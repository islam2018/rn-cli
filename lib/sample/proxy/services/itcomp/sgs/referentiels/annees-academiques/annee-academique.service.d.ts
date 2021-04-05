import { AnneeAcademiqueCreateOrUpdateDto } from "../../../../../dtos/itcomp/sgs/referentiels/annees-academiques/models";
import { RestService } from "@itcomp/abp-rn";
export declare class AnneeAcademiqueService {
    private restService;
    apiName: string;
    constructor(restService: RestService);
    create: (input: AnneeAcademiqueCreateOrUpdateDto) => any;
    delete: (id: number) => any;
    confirm: (id: number) => any;
    start: (id: number) => any;
    close: (id: number) => any;
    get: (id: number) => any;
    getList: (input: any) => any;
    update: (id: number, input: AnneeAcademiqueCreateOrUpdateDto) => any;
}
