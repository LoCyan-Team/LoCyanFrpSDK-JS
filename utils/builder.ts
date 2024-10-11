import {Response} from "../models/response.ts";
import type {ResultData, ResultReq} from "../models/result.ts";

export class Builder {
    public static build(
        data: ResultData,
        req: ResultReq
    ): Response {
        return new Response(data, req)
    }
}