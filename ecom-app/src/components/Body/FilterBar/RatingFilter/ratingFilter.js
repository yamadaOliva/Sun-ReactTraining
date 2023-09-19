import { Text, VStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import RatingFilterChild from "./RatingFilterChild/ratingFilterChild";
import { useEffect, useState } from "react";
import { getRatings } from "../../../../services/filterServices";
export default function RatingFilter(props) {
  const [ratings, setRatings] = useState([]);
  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const res = await getRatings();
        setRatings(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRatings();
  }, []);
  return (
    <>
      <VStack w="100%" alignItems="flex-start" pt="32px" pb="32px">
        <Text fontSize="11px" fontWeight="500" letterSpacing="1px">
          RATINGS
        </Text>
        <VStack mt="8px">
          {ratings.map((item) => {
            if (item.rating === 6) return null;
            return (
              <RatingFilterChild
                key={item.rating}
                rating={item?.rating}
                quantity={item?.quantity}
              />
            );
          })}
        </VStack>
      </VStack>
    </>
  );
}
