import axios from "../setup/axios";

const paginate = (page, limit) => {
  return axios.get(`/products?_page=${page}&_limit=${limit}`);
}
const getRatings = () => {
  return axios.get("/ratings?_sort=rating&_order=DESC");
};
const getCategories = () => {
  return axios.get("/categories?_sort=name&_order=ASC");
};
const getBrands = () => {
  return axios.get("/brands?_sort=quantity&_order=DESC");
};

export { paginate, getRatings, getCategories, getBrands };
