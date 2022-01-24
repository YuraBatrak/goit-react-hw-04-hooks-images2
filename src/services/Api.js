import axios from "axios";

const key = "24211699-fe52f20aaf965cfae8cea3f33";

const fetchApi = (query = "", page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(({ data }) => data.hits.map((elem) => elem));
};

export { fetchApi };
