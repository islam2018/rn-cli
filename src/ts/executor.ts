import axios, { AxiosInstance } from "axios";
import { Factory } from "./factory";
import { Renderer } from "./renderer";
import * as fs from 'fs';
import { Console } from "node:console";
import { Agent } from "https";

export default interface Options {
    url: string,
    module: string,
    rootNamespace: string,
    targetFolder: string
}
export class Executor {
    

    private appConfig = {} as {modules, types}
    private axiosInstance: AxiosInstance
    private factory?: Factory
    private renderer?: Renderer

    constructor(private options:Options) {
        this.axiosInstance = axios.create({
            httpsAgent: new Agent({  
              rejectUnauthorized: false
            })
        });
    }

    getApiDefinition() {
        console.log("INFO: Getting Api definition...")
        return  this.axiosInstance.get(this.options.url).then((response)=>{
            this.appConfig = response.data
            return this
        }).catch(error=>{
            throw new Error("ERROR: Could not get api definition")
        })
    }

    configureServicesAndDtos() {
        console.log("INFO: Configure services and dtos...")
        this.factory = new Factory(this.options, this.appConfig.modules, this.appConfig.types)
        this.factory.resolveServices() 
        return this
    }

    renderFiles() {
        console.log("INFO: Rendering files...")
        this.renderer = new Renderer(this.factory?.services!, this.factory?.dtos!)
        this.renderer.renderServices()
        this.renderer.renderDtos()
        return this
    }

    saveFiles() {
        console.log("INFO: Saving into target folder...")
        // content = this.renderer....  save files using fs
        return this
    }

}