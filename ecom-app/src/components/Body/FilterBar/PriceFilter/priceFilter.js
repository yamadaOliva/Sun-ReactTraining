import {
  HStack,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { setPrice } from "../../../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
export default function PriceFilter() {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.filter.price);
  const [rangeValue, setRangeValue] = useState();
  const handleRangeInputOnChangeEnd = (value) => {
    value[0] = Math.round(value[0] * 10);
    value[1] = Math.round(value[1] * 10);
    if (+value[0] !== price[0] || +value[1] !== price[1]) {
      dispatch(setPrice(value));
    }
  };
  useEffect(() => {
    setRangeValue([price[0] / 10, price[1] / 10]);
  }, []);
  return (
    <>
      <VStack w="100%" alignItems="flex-start" pt="32px" pb="32px">
        <Text fontSize="11px" fontWeight="500" letterSpacing="1px">
          PRICE
        </Text>
        <RangeSlider
          aria-label={["min", "max"].toString()}
          defaultValue={[0, 1000]}
          value={rangeValue}
          onChange={(value) => {
            setRangeValue(value);
          }}
          onChangeEnd={handleRangeInputOnChangeEnd}
          mt="24px"
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb
            index={0}
            _focus={{ boxShadow: "var(--chakra-shadows-base)" }}
            position="relative"
          >
            <HStack position="absolute" top="-24px" gap="2px">
              <Text fontSize="12px" fontWeight="bold" color="primary.500">
                $
              </Text>
              <Text fontSize="12px" fontWeight="bold">
                {Math.round(0 + price[0])}
              </Text>
            </HStack>
          </RangeSliderThumb>
          <RangeSliderThumb
            index={1}
            _focus={{ boxShadow: "var(--chakra-shadows-base)" }}
          >
            <HStack position="absolute" top="-24px" gap="2px">
              <Text fontSize="12px" fontWeight="bold" color="primary.500">
                $
              </Text>
              <Text fontSize="12px" fontWeight="bold">
                {Math.round(0 + price[1])}
              </Text>
            </HStack>
          </RangeSliderThumb>
        </RangeSlider>
      </VStack>
    </>
  );
}
