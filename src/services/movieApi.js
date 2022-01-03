
import axiosClient from "./axiosClient";
const movieApi = {
  getAll: () => {
    const url = "/getallmovie/";
    return axiosClient.get(url);
  },
  getMovieOnID: (params) => {
    const url = "/getmoviebymid/";
    return axiosClient.post(url, { params });
  },
  getmovie: (params) => {
    const url = "/getmovierange/";
    return axiosClient.post(url, { params });
  },
  getMovieByKey: (params) => {
    const url = "/getmoviebysearch/";
    return axiosClient.post(url, { params });
  },
  getAllYear: () => {
    const url = "/getallYear/";
    return axiosClient.get(url);
  },
  getMovieByActor: () => {
    const url = "/getallYear/";
    return axiosClient.get(url);
  },
  getMovieByDirector: () => {
    const url = "/getallYear/";
    return axiosClient.get(url);
  },
  getRandomMovie: () => {
    const url = "/getRandomMovie/";
    return axiosClient.get(url);
  },
};

export default movieApi;
