import {
  Box,
  Divider,
  HStack,
  Heading,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryFilter from "./CategoryFilter/categoryFilter";
import BrandFilter from "./BrandFilter/brandFilter";
import PriceFilter from "./PriceFilter/priceFilter";
import FreeshipFilter from "./FreeshipFilter/freeshipFilter";
import RatingFilter from "./RatingFilter/ratingFilter";
import { setDefault } from "../../../redux/slices/filterSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
export default function FilterBar() {
  const dispatch = useDispatch();
  return (
    <>
      <VStack gap="0px">
        <HStack w="100%" h="80px">
          <Heading size="lg" fontSize="24px" fontWeight="500">
            Filters
          </Heading>
          <Spacer />
          <HStack
            as="button"
            onClick={() => {
              dispatch(setDefault());
            }}
          >
            <Box fontSize="10px" color="dark.700">
              <FontAwesomeIcon icon={faRotateRight} />
            </Box>
            <Text fontSize="12px" color="dark.400">
              Clear filters
            </Text>
          </HStack>
        </HStack>
        <Divider h="1px" bgColor="dark.200" />
        <CategoryFilter />
        <Divider h="1px" bgColor="dark.200" />
        <BrandFilter />
        <Divider h="1px" bgColor="dark.200" />
        <PriceFilter />
        <Divider h="1px" bgColor="dark.200" />
        <FreeshipFilter />
        <Divider h="1px" bgColor="dark.200" />
        <RatingFilter />
      </VStack>
    </>
  );
}
