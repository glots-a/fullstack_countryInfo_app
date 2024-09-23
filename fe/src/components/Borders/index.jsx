import React from 'react'
import {VStack, List, ListItem, ListIcon, Text} from '@chakra-ui/react'
import {StarIcon} from '@chakra-ui/icons'

export const Borders = ({countryInfo}) => {
  const hasBorders = countryInfo?.borders?.length !== 0

  return hasBorders ? (
    <VStack spacing={4} align='stretch'>
      <Text fontSize='lg'>Borders:</Text>
      <List spacing={2} textAlign='left'>
        {countryInfo?.borders.map(border => (
          <ListItem key={border?.countryCode}>
            <ListIcon as={StarIcon} color='green.500' />
            {border?.commonName} (Official: {border?.officialName})
          </ListItem>
        ))}
      </List>
    </VStack>
  ) : null
}
