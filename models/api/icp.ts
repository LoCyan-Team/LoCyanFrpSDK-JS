import type { ResultData } from '../result.ts'

export class GetICPResult implements ResultData {
  constructor(
    public status: number,
    public message: string,
    public data: {
      list: Array<{
        id: number
        icp: string
        unit_name: string
        nature_name: string
        domain: string
        status: string
      }>
    }
  ) {
    this.status = status
    this.message = message
    this.data = data
  }
}

export class PostICPResult implements ResultData {
  constructor(
    public status: number,
    public message: string,
    public data: {
      icp: string
      unit_name: string
      nature_name: string
    }
  ) {
    this.status = status
    this.message = message
    this.data = data
  }
}

export class DeleteICPResult implements ResultData {
  constructor(
    public status: number,
    public message: string,
    public data: {}
  ) {
    this.status = status
    this.message = message
    this.data = data
  }
}
