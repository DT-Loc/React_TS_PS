import { requestAPI } from "./axios.service";

export const getListPost = async () => {
    const data = await requestAPI("GET", "posts", { id: 2 });
    return data;
};
