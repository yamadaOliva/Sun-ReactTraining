import { Box, HStack, Tag } from "@chakra-ui/react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
export default function RatingFilterChild({  rating, quantity  }) {
  return (
    <>
      {" "}
      <HStack as="button" gap="16px">
        <HStack>
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return item > rating ? (
              <Box key={item} color="dark.50">
                <FontAwesomeIcon icon={faStar} />
              </Box>
            ) : (
              <Box
                key={item}
                color={
                  2 === rating ? "primary.500" : "primary.400"
                }
              >
                <FontAwesomeIcon icon={faStar} />
              </Box>
            );
          })}
        </HStack>
        <Tag sx={styles.tag}>{quantity}</Tag>
      </HStack>
    </>
  );
}
const styles = {
    tag: {
      fontSize: '10px',
      fontWeight: '700',
      lineHeight: '1',
      minH: '16px',
      minW: 'auto',
      pl: '4px',
      pr: '4px',
      bgColor: 'dark.50',
      color: 'dark.300',
      borderRadius: '4px'
    }
  }
