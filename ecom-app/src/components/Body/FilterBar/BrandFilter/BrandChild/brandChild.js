import { Box, Checkbox, HStack, Tag, Text } from "@chakra-ui/react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBrandsRedux } from "../../../../../redux/slices/filterSlice";
export default function BrandChild({ item }) {
  const brands = useSelector((state) => state.filter.brands);
  const dispatch = useDispatch();
  const handleBrandClick = () => {
    if (brands.includes(item.name)) {
      dispatch(setBrandsRedux(brands.filter((brand) => brand !== item.name)));
    } else {
      dispatch(setBrandsRedux([...brands, item.name]));
    }
  };
  return (
    <>
      <Checkbox
        isChecked={brands.includes(item.name) ? true : false}
        icon={
          <Box fontSize="5px">
            <FontAwesomeIcon icon={faCircle} />
          </Box>
        }
        onChange={() => handleBrandClick()}
      >
        <HStack
          as="button"
          gap="0"
          ml="8px"
          pointerEvents="none"
          cursor="pointer"
        >
          <Text
            sx={styles.title}
            fontWeight={
              brands.includes(item.name) === item.name ? "bold" : "400"
            }
          >
            {item?.name}
          </Text>
          <Tag sx={styles.tag}>{item?.quantity}</Tag>
        </HStack>
      </Checkbox>
    </>
  );
}
const styles = {
  tag: {
    fontSize: "10px",
    fontWeight: "700",
    lineHeight: "1",
    minH: "16px",
    minW: "auto",
    pl: "4px",
    pr: "4px",
    bgColor: "dark.50",
    color: "dark.800",
    borderRadius: "4px",
  },
  title: {
    color: "dark.1000",
    fontSize: "14.4px",
    mr: "8px",
  },
};
