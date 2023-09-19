import Pagination from "../Pagination/pagination";
import { Divider, HStack, Select, SimpleGrid, VStack } from "@chakra-ui/react";
import ProductCard from "./ProductDetail/ProductCard";
import { useEffect, useState } from "react";
import { paginate } from "../../../services/filterServices";
import {
  setTotalPages,
  setHitOffPageRedux,
} from "../../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
export default function ProductList() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const [products, setProducts] = useState([]);
  const [hitOffPage, setHitOffPage] = useState(filter.hitOffPage);

  const hitOffPageChange = (e) => {
    setHitOffPage(e.target.value);
    dispatch(setHitOffPageRedux(e.target.value));
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await paginate(filter.numOfPage, hitOffPage);
        dispatch(
          setTotalPages(
            Math.ceil(res.headers["x-total-count"] / filter.hitOffPage + 1)
          )
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [filter.numOfPage, hitOffPage]);
  return (
    <>
      <VStack justify="flex-start" gap="0">
        <HStack h="80px" alignSelf="flex-end">
          <Select variant="unstyled" size="xs" defaultValue="feature">
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
          {products &&
            products?.map((product) => {
              return <ProductCard key={product.objectID} product={product} />;
            })}
        </SimpleGrid>
        <Pagination />
      </VStack>
    </>
  );
}
