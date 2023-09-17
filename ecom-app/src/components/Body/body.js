import FilterBar from "./FilterBar/filterBar";
import { Box, HStack } from '@chakra-ui/react'
const Body = () => {
  return <>
    <HStack
        as="main"
        p="32px 16px"
        gap="60px"
        ml={{ base: '0', xl: '300px' }}
        mr={{ base: '0', xl: '300px' }}
      >
        <Box minW="270px">
            <FilterBar />
        </Box>
      </HStack>
  </>;
};
export default Body;
