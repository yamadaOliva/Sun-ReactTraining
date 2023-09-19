import Pagination from "../Pagination/pagination";
import { Divider, HStack, Select, SimpleGrid, VStack } from "@chakra-ui/react";
import ProductCard from "./ProductDetail/ProductCard";
import { useEffect, useState } from "react";
import {
  paginate,
  priceSort,
  filterServices,
} from "../../../services/filterServices";
import {
  setTotalPages,
  setHitOffPageRedux,
  setProducts,
} from "../../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
export default function ProductList() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const [sortBy, setSortBy] = useState("feature"); // feature, price_asc, price_desc
  const hitOffPageChange = (e) => {
    dispatch(setHitOffPageRedux(e.target.value));
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await paginate(filter.numOfPage, filter.hitOffPage);
        dispatch(
          setTotalPages(
            Math.ceil(res.headers["x-total-count"] / filter.hitOffPage + 1)
          )
        );
        dispatch(setProducts(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    const fetchProductsByPrice = async (value) => {
      try {
        const res = await priceSort(filter.numOfPage, filter.hitOffPage, value);
        dispatch(
          setTotalPages(
            Math.ceil(res.headers["x-total-count"] / filter.hitOffPage + 1)
          )
        );
        dispatch(setProducts(res.data));
      } catch (error) {
        console.log(error);
      }
    };
      const fetchProductsByFilter = async (options) => {
        try {
          const res = await filterServices(
            filter.numOfPage,
            filter.hitOffPage,
            options
          );
          dispatch(
            setTotalPages(
              Math.ceil(res.headers["x-total-count"] / filter.hitOffPage + 1)
            )
          );
          dispatch(setProducts(res.data));
        } catch (error) {
          console.log(error);
        }
      };
    if (!filter.isFiltering) {
      switch (sortBy) {
        case "feature":
          fetchProducts();
          break;
        case "price_asc":
          fetchProductsByPrice("asc");
          break;
        case "price_desc":
          fetchProductsByPrice("desc");
          break;
      }
    } else {
      let options = {};
      if (filter.categorieslv0.length > 0) {
        options.categorieslv0 = filter.categorieslv0;
      }
      if (filter.categorieslv1.length > 0) {
        options.categorieslv1 = filter.categorieslv1;
      }
      if (filter.price[0] > 0 || filter.price[1] < 1000) {
        options.price = filter.price;
      }
      if (filter.brands.length > 0) {
        options.brands = filter.brands;
      }
      if (filter.rating > 0) {
        options.rating = filter.rating;
      }
      if (filter.isFreeShip) {
        options.isFreeShip = filter.isFreeShip;
      }
      fetchProductsByFilter(options);
    }
  }, [
    filter.hitOffPage,
    filter.categorieslv0,
    filter.categorieslv1,
    filter.price,
    filter.isFreeShip,
    filter.rating,
    filter.brands,
    filter.numOfPage,
    sortBy,
  ]);
  return (
    <>
      <VStack justify="flex-start" gap="0">
        <HStack h="80px" alignSelf="flex-end">
          <Select
            variant="unstyled"
            size="xs"
            defaultValue="feature"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="feature">Sort by featured</option>
            <option value="price_asc">Price ascending</option>
            <option value="price_desc">Price descending</option>
          </Select>
          <Select
            variant="unstyled"
            size="xs"
            defaultValue={filter.hitOffPage}
            onChange={(e) => hitOffPageChange(e)}
          >
            <option value="16">16 hit per page</option>
            <option value="32">32 hit per page</option>
            <option value="64">64 hit per page</option>
          </Select>
        </HStack>
        <Divider h="1px" bgColor="dark.200" />
        <SimpleGrid columns={4} spacing="30px" flex={1} w="100%" pt="32px">
          {filter.products &&
            filter.products?.map((product) => {
              return <ProductCard key={product.objectID} product={product} />;
            })}
        </SimpleGrid>
        <Pagination />
      </VStack>
    </>
  );
}
