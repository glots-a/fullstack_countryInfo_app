import React from 'react'
import {Box, Button, Heading, Stack} from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'

export const HomePage = () => {
  const navigate = useNavigate()

  const handleShowCountries = () => {
    navigate('/countries')
  }

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      minHeight='100vh'>
      <Stack spacing={6} textAlign='center'>
        <Heading size='xl'>Welcome dear guest </Heading>
        <Button colorScheme='teal' size='lg' onClick={handleShowCountries}>
          Show Countries
        </Button>
      </Stack>
    </Box>
  )
}
