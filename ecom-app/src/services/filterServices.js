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
const filterServices = (page, limit, option) =>{
  console.log(option);
  let URL = `/products?_page=${page}&_limit=${limit}`;
  if(option.categorieslv0) URL += `&category_lvl0=${option.categorieslv0}`;
  if(option.categorieslv1) URL += `&category_lvl1=${option.categorieslv1}`;
  if(option.price) URL += `&price_gte=${option.price[0]}&price_lte=${option.price[1]}`;
  if(option.isFreeShip) URL += `&isFreeShip=${option.isFreeShip}`;
  if(option.brands?.lenght>0){
    option.brands.forEach(brand=>{
      URL += `&brand=${brand}`;
    })
  }
  if(option.rating) URL += `&rating_gte=${option.rating}`;
  return axios.get(URL);

}
const priceSort = (page, limit, option) =>{
  console.log(option);
  return axios.get(`/products?_page=${page}&_limit=${limit}&_sort=price&_order=${option}`);
}
export { paginate, getRatings, getCategories, getBrands , priceSort, filterServices};
