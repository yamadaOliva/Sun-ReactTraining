import FilterBar from "./FilterBar/filterBar";
import ProductList from "./ProductList/productList";
import { Box, Stack } from "@chakra-ui/react";
const Body = () => {
  return (
    <>
      <Stack
        as="main"
        p="32px 16px"
        gap="60px"
        ml={{ base: "0", xl: "300px" }}
        mr={{ base: "0", xl: "300px" }}
        direction="row"
      >
        <Box minW="270px" order={-1} top="0px">
          <FilterBar />
        </Box>
        <Box flex={1} alignSelf="stretch">
          <ProductList />
        </Box>
      </Stack>
    </>
  );
};
export default Body;
