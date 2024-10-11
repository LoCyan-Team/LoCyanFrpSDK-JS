export interface ResultData {
    status: number
    message: string
    data: object
}

export class ResultReq {
    constructor(
        public status: number,
    ) {
        this.status = status;
    }
}
