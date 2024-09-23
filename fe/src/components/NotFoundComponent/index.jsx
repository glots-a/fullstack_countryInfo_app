import React from 'react'
import {Link} from 'react-router-dom'
import {Box, Heading, Text, Button, Image, VStack} from '@chakra-ui/react'

export const NotFoundComponent = () => (
  <Box
    minHeight='100vh'
    display='flex'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    bg='white'
    textAlign='center'>
    <Heading as='h1' size='4xl' mb={4}>
      404
    </Heading>

    <Image
      src='https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif'
      alt='Not Found'
      boxSize={{base: '300px', md: '400px'}} // Responsive image size
      objectFit='cover'
      mb={6}
    />

    <VStack spacing={4}>
      <Heading as='h2' size='xl'>
        Looks like you're lost
      </Heading>
      <Text>The page you are looking for is not available!</Text>
      <Link to='/'>
        <Button colorScheme='green' variant='solid'>
          Go to Home
        </Button>
      </Link>
    </VStack>
  </Box>
)
