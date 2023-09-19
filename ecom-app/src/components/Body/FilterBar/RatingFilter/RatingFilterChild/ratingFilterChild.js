import { Box, HStack, Tag } from "@chakra-ui/react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { setRatingRedux } from "../../../../../redux/slices/filterSlice";
export default function RatingFilterChild({ rating, quantity }) {
  const ratingRedux = useSelector((state) => state.filter.rating);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setRatingRedux(rating));
  };
  return (
    <>
      {" "}
      <HStack as="button" gap="16px" onClick={() => handleClick()}>
        <HStack>
          {[1, 2, 3, 4, 5].map((item) => {
            return item > rating ? (
              <Box key={item} color="dark.50">
                <FontAwesomeIcon icon={faStar} />
              </Box>
            ) : (
              <Box
                key={item}
                color={ratingRedux === rating ? "primary.500" : "primary.400"}
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
    fontSize: "10px",
    fontWeight: "700",
    lineHeight: "1",
    minH: "16px",
    minW: "auto",
    pl: "4px",
    pr: "4px",
    bgColor: "dark.50",
    color: "dark.300",
    borderRadius: "4px",
  },
};
