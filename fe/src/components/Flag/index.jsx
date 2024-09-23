import React from 'react'
import {Box, Image} from '@chakra-ui/react'

export const Flag = ({countryInfo}) => {
  const hasFlag = countryInfo?.flag

  return hasFlag ? (
    <Box display='flex' justifyContent='center' mb={4}>
      <Image
        src={countryInfo?.flag}
        alt={`Flag of ${countryInfo.name}`}
        boxSize={{base: '150px', md: '200px'}} // Responsive flag size
        objectFit='contain'
      />
    </Box>
  ) : null
}
