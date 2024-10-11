import axios, {type AxiosError, type AxiosInstance, type AxiosResponse} from "axios";

export class Request {
    /**
     * 获取请求实例
     */
    private instance = (): AxiosInstance => {
        let axiosInstance = axios.create({
            baseURL: 'https://api-v2.locyanfrp.cn/api/v2',
            timeout: 80000,
            headers: {
                post: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                }
            },
        })
        axiosInstance.interceptors.response.use(
            async (response) => response,
            async (error) => await error.response
        )
        return axiosInstance
    }

    /**
     * 发送一个 GET 请求
     * @param path    请求路径
     * @param params  查询参数
     * @param headers 附加请求标头
     */
    public async get(path: string, params: object | null, headers: object | null): Promise<AxiosResponse> {
        return await this.instance().get(path, {
            params: params ?? {},
            headers: headers ?? {}
        })
    }

    /**
     * 发送一个 POST 请求
     * @param path    请求路径
     * @param params  查询参数
     * @param data    表单数据
     * @param headers 附加请求标头
     */
    public async post(path: string, params: object | null, data: any, headers: object | null): Promise<AxiosResponse> {
        return await this.instance().post(path, data, {
            params: params ?? {},
            headers: headers ?? {}
        })
    }

    /**
     * 发送一个 DELETE 请求
     * @param path    请求路径
     * @param params  查询参数
     * @param headers 附加请求标头
     */
    public async delete(path: string, params: object | null, headers: object | null): Promise<AxiosResponse> {
        return await this.instance().delete(path, {
            params: params ?? {},
            headers: headers ?? {}
        })
    }
}