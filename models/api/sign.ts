import type {ResultData} from "../result.ts";

export class GetSignResult implements ResultData {
    constructor(
        public status: number,
        public message: string,
        public data: {
            status: boolean
        }
    ) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}

export class PostSignResult implements ResultData {
    constructor(
        public status: number,
        public message: string,
        public data: {
            get_traffic: number
            sign_count: number
            total_get_traffic: number
            first_sign: boolean
        }
    ) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
}
