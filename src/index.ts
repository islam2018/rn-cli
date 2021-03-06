import { AxiosInstance, AxiosRequestConfig } from "axios"
 

export abstract class RestService {
    abstract getApi(apiName: string): AxiosInstance 
    request<T, R>(request: AxiosRequestConfig, config: Config): Promise<R> {
        let apiName=config.apiName
        return this.getApi(apiName).request(request).then(response=> {
            return response.data
        })
    }
}

interface Config {
    readonly apiName: string
}


// let options = {
//     url: "http://sgscore/api/abp/api-definition?IncludeTypes=true",
//     module: "config",
//     rootNamespace: "Itcomp.Sgs.Config",
//     targetFolder: "sample",
// }
// var executor = new Executor(options);

// executor.getApiDefinition().then(()=>{
//     executor.configureServicesAndDtos()
//             .renderFiles()
//             .saveFiles()
// }).catch(error=>{ 
//     console.error(error)
// })

