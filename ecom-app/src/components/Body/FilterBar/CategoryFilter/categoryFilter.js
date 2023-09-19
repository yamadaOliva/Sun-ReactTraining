import { Accordion, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getCategories } from "../../../../services/filterServices";
import CategoryChild from "./CategoryChild/CategoryChild";
export default function CategoryFilter(props) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getCategories();
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);
  return (
    <>
      <VStack w="100%" alignItems="flex-start" pt="32px" pb="32px">
        <Text fontSize="11px" fontWeight="500" letterSpacing="1px">
          CATEGORY
        </Text>
        <VStack w="100%" alignItems="flex-start">
          <Accordion as="ul" allowToggle w="100%">
            {categories.map((item) => {
              return <CategoryChild key={item.name} item={item} />;
            })}
          </Accordion>
        </VStack>
      </VStack>
    </>
  );
}
