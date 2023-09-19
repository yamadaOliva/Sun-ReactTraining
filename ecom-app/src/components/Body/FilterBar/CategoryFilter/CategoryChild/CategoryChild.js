import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  HStack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  setCategorieslv0,
  setCategorieslv1,
} from "../../../../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
export default function CategoryChild({ item }) {
  const dispatch = useDispatch();
  const categorieslv0 = useSelector((state) => state.filter.categorieslv0);
  const categorieslv1 = useSelector((state) => state.filter.categorieslv1);
  return (
    <>
      <AccordionItem as="li" border="none" listStyleType="none">
        {({ isExpanded }) => (
          <>
            <AccordionButton
              pl="0px"
              pr="0px"
              _hover={{ bgColor: "white" }}
              onClick={() => {
                if (categorieslv0 === item.name) {
                  dispatch(setCategorieslv0(""));
                  dispatch(setCategorieslv1(""));
                } else {
                  dispatch(setCategorieslv0(item.name));
                  dispatch(setCategorieslv1(""));
                }
              }}
            >
              <HStack gap="0">
                {isExpanded && categorieslv0 === item.name? (
                  <Box fontSize="12px" color="dark.500" mr="16px">
                    <FontAwesomeIcon icon={faCaretDown} />
                  </Box>
                ) : (
                  <Box fontSize="12px" color="dark.500" mr="16px">
                    <FontAwesomeIcon icon={faCaretUp} />
                  </Box>
                )}
                <Text
                  sx={styles.title}
                  fontWeight={isExpanded && categorieslv0 === item.name? "bold" : "400"}
                >
                  {item?.name}
                </Text>
                <Tag sx={styles.tag}>{item?.quantity}</Tag>
              </HStack>
            </AccordionButton>
            <AccordionPanel as="ul" p="0">
              {categorieslv0 === item.name&&item.lv1.map((val) => {
                return (
                  <HStack
                    key={val.name}
                    as="button"
                    sx={styles.titleWrapper}
                    onClick={() => {
                      if (categorieslv1 === val.name)
                        dispatch(setCategorieslv1(""));
                      else dispatch(setCategorieslv1(val.name));
                    }}
                  >
                    {categorieslv1 === val.name ? (
                      <Box fontSize="12px" color="dark.500" mr="16px">
                        <FontAwesomeIcon icon={faCaretDown} />
                      </Box>
                    ) : (
                      <Box fontSize="12px" color="dark.500" mr="16px">
                        <FontAwesomeIcon icon={faCaretUp} />
                      </Box>
                    )}
                    <Text
                      sx={styles.title}
                      fontWeight={categorieslv1 === val.name ? "bold" : "400"}
                    >
                      {val?.name}
                    </Text>
                    <Tag sx={styles.tag}>{val?.quantity}</Tag>
                  </HStack>
                );
              })}
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
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
  titleWrapper: {
    gap: "0",
    pl: "16px",
    pt: "8px",
    pb: "8px",
  },
};
