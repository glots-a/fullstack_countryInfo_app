import React from 'react'
import {Spinner, Text, Button, Heading} from '@chakra-ui/react'
import {useGetCountries} from '../../hooks'
import {useNavigate} from 'react-router-dom'
import {OpacityBox} from '../../components'

export const ListPage = () => {
  const {countries, loading, error} = useGetCountries()
  const navigate = useNavigate()

  if (loading) return <Spinner />
  if (error) return <Text color='red.500'>{error}</Text>

  return (
    <OpacityBox>
      <Heading size='xl' mb={10}>
        Welcome dear guest{' '}
      </Heading>
      {countries.map(country => (
        <Button
          key={country?.countryCode}
          onClick={() => navigate(`/countries/${country.countryCode}`)}
          fontSize='lg'
          colorScheme='teal'
          variant='outline'
          display='block'
          mb={2}
          width='100%'
          textAlign='center'
          _hover={{bg: 'teal.500', color: 'white'}}>
          {country.name}
        </Button>
      ))}
    </OpacityBox>
  )
}
