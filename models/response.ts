import type {ResultData, ResultReq} from "./result.ts";

export class Response {
  constructor(public result: ResultData, public request: ResultReq) {
    this.result = result;
    this.request = request;
  }
}
