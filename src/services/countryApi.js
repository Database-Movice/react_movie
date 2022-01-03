
import axiosClient from "./axiosClient";
const orderApi={
    getAll:() => {
        const url = "/getallCountry/";
        return axiosClient.get(url);
    },
}
export default orderApi;
