import {
  Box,
  Button,
  FormControl,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import BrandChild from "./BrandChild/brandChild";
import { getBrands } from "../../../../services/filterServices";
export default function BrandFilter(props) {
  const [searchKey, setSearchKey] = useState("");
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await getBrands();
        setBrands(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBrands();
  }, []);
  return (
    <>
      <VStack w="100%" alignItems="flex-start" pt="32px" pb="32px">
        <Text fontSize="11px" fontWeight="500" letterSpacing="1px">
          BRANDS
        </Text>
        <Box
          as="form"
          borderRadius="10px"
          bottom="-32px"
          w="100%"
          pt="16px"
          pb="16px"
        >
          <FormControl
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgColor="darkGray.60"
            height="40px"
            borderRadius="2px"
          >
            <Button
              type="submit"
              bgColor="transparent"
              _hover={{ bgColor: "transparent" }}
            >
              <Box color="dark.500" fontSize="12px">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Box>
            </Button>
            <Input
              border="none"
              fontSize="12px"
              color="dark.800"
              bgColor="transparent"
              size="lg"
              p="0"
              _focus={{ boxShadow: "none" }}
              placeholder="Search for brands..."
              _placeholder={{ color: "dark.400" }}
              value={searchKey}
              onChange={(e) => {
                setSearchKey(e.target.value);
              }}
            />
          </FormControl>
        </Box>
        <VStack as="ul" alignItems="flex-start">
          {brands
            .filter((item) => {
              return searchKey.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(searchKey.toLowerCase());
            })
            .map((item, index) => {
              if (index > 9) return null;
              return <BrandChild key={item.name} item={item} />;
            })}
        </VStack>
      </VStack>
    </>
  );
}
