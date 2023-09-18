import {
  HStack,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
export default function PriceFilter() {
  const [rangeValue, setRangeValue] = useState([0, 100]);
  const handleRangeInputOnChangeEnd = (value) => {
    setRangeValue(value);
  }
  return (
    <>
      <VStack w="100%" alignItems="flex-start" pt="32px" pb="32px">
        <Text fontSize="11px" fontWeight="500" letterSpacing="1px">
          PRICE
        </Text>
        <RangeSlider
          aria-label={['min', 'max'].toString()}
          defaultValue={[0, 100]}
          value={rangeValue}
          onChange={value => {
            setRangeValue(value)
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
              {Math.round(0 + rangeValue[0] * 10)}
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
              {Math.round(0 + rangeValue[1] * 10)}
              </Text>
            </HStack>
          </RangeSliderThumb>
        </RangeSlider>
      </VStack>
    </>
  );
}
