import Header from "./components/Header/header.js";
import { Box, HStack } from "@chakra-ui/react";
import Body from "./components/Body/body.js";
import { ChakraProvider } from "@chakra-ui/react";
import { theme as customTheme } from "./style/theme";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTotalPages } from "./redux/slices/filterSlice";
import {
  paginate,
  getBrands,
  getRatings,
  getCategories,
} from "./services/filterServices";

function App() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [dataFetched, setDataFetched] = useState(false); // State to track if data has been fetched
  const dispatch = useDispatch();
  const hitOffPage = useSelector((state) => state.filter.hitOffPage);
  useEffect(() => {
    if (!dataFetched) {
      // Check if data has not been fetched yet
      const fetchData = async () => {
        try {
          const res = await paginate(1, 10);
          setProducts(res.data);
          dispatch(
            setTotalPages(
              Math.ceil(res.headers["x-total-count"] / hitOffPage) + 1
            )
          );
          const ratingRes = await getRatings();
          setRatings(ratingRes.data);
          const brandRes = await getBrands();
          setBrands(brandRes.data);
          setDataFetched(true); // Set dataFetched to true
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }
  }, [dataFetched]); // Add dataFetched to the dependencies array

  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Box>
        <Header />
        <Body />
      </Box>
    </ChakraProvider>
  );
}

export default App;
