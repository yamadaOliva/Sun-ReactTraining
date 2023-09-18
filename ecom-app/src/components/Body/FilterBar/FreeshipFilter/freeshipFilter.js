import { FormControl, FormLabel, Switch, Text, VStack } from "@chakra-ui/react";
export default function FreeshipFilter(props) {
  return (
    <>
      <VStack w="100%" alignItems="flex-start" pt="32px" pb="32px">
        <Text fontSize="11px" fontWeight="500" letterSpacing="1px">
          FREE SHIPPING
        </Text>
        <FormControl
          display="flex"
          alignItems="center"
          _hover={{ cursor: "pointer" }}
        >
          <FormLabel
            htmlFor="free-shipping"
            mb="0"
            fontSize="14.4px"
            fontWeight="400"
            cursor="pointer"
          >
            Display only items with free shipping
          </FormLabel>
          <Switch
            id="free-shipping"
            checked={1 ? true : false}
          />
        </FormControl>
      </VStack>
    </>
  );
}
