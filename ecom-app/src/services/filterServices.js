import axios from "../setup/axios";

const paginate = (page, limit) => {
  return axios.get(`/products?_page=${page}&_limit=${limit}`);
  return axios.get(`/products`);
};
const getRatings = () => {
  return axios.get("/ratings");
};
const getCategories = () => {
  return axios.get("/categories?_sort=name&_order=ASC");
};
const getBrands = () => {
  return axios.get("/brands");
};

export { paginate, getRatings, getCategories, getBrands };
