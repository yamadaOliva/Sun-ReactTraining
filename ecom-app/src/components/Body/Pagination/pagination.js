import { Button, HStack } from "@chakra-ui/react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNumOfPage } from "../../../redux/slices/filterSlice";
export default function Pagination() {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [totalPage, setTotalPage] = useState(filter?.totalPages);
  const [currentPage, setCurrentPage] = useState(filter?.numOfPage);
  let arr = [1, 2, 3, 4, 5];
  const setArr = () => {
    if (currentPage > 3)
      return [
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
      ];
    else if (currentPage > totalPage - 1) {
      return [
        totalPage - 4,
        totalPage - 3,
        totalPage - 2,
        totalPage - 1,
        totalPage,
      ];
    }
  };
  const handlePageClick = (item) => {
    setCurrentPage(item);
    dispatch(setNumOfPage(item));
    setArr();
  };
  return (
    <>
      <HStack mt="80px">
        <Button
          pointerEvents={currentPage === 1 ? "none" : "fill"}
          color={currentPage === 1 ? "dark.200" : "dark.800"}
          bgColor="transparent"
          _hover={{ bgColor: "transparent" }}
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage((currentPage) => currentPage - 1);
            }
          }}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </Button>
        <HStack>
          {arr.map((item) => {
            return (
              <Button
                colorScheme={item === currentPage ? "primary" : "gray"}
                h="40px"
                w="40px"
                onClick={() => {
                  handlePageClick(item);
                }}
              >
                {item}
              </Button>
            );
          })}
        </HStack>
        <Button
          pointerEvents={currentPage === totalPage ? "none" : "fill"}
          bgColor="transparent"
          color={currentPage === totalPage ? "dark.200" : "dark.800"}
          _hover={{ bgColor: "transparent" }}
          onClick={() => {
            if (currentPage <= totalPage - 1) {
              setCurrentPage((currentPage) => currentPage + 1);
            }
          }}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </Button>
      </HStack>
    </>
  );
}
