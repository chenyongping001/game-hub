import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}

const axiosInstance =  axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        'key':'01b29da6c41841458b00aa22c947a464',
    }
})

class APIClient<T> {
    endpoint:string;
    constructor(endpoint:string){
        this.endpoint = endpoint
    }
    getAll=(config?:AxiosRequestConfig)=>
        axiosInstance
            .get<FetchResponse<T>>(this.endpoint,config)
            .then(res=>res.data)
}

export default APIClient;