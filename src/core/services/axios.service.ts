import axios from "axios";

export const requestAPI = (method: string, path: string, data?: any) => {
    return axios({
        method: method,
        params: method === "GET" && data,
        data: method === "POST" && data,
        url: path,
        baseURL: "https://jsonplaceholder.typicode.com/",
    });
};
