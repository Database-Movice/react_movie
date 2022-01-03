
import axiosClient from "./axiosClient";
const typeApi={
    getAll:() => {
        const url = "/getallType/";
        return axiosClient.get(url);
    },
}

export default typeApi;
