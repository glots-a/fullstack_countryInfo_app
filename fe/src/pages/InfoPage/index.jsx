import React from 'react'
import {Heading, Text, Spinner, Button} from '@chakra-ui/react'
import {useNavigate, useParams} from 'react-router-dom'
import {useGetCountryInformation} from '../../hooks'

import {Borders, Flag, OpacityBox, Population} from '../../components'

export const InfoPage = () => {
  const {countryCode} = useParams()
  const navigate = useNavigate()
  const {countryInfo, loading, error} = useGetCountryInformation(countryCode)

  if (loading) return <Spinner />
  if (error) return <Text color='red.500'>{error}</Text>

  return (
    <OpacityBox p={4} textAlign='center'>
      <Heading as='h1' size='2xl' mb={4}>
        {countryInfo.name}
      </Heading>
      <Flag countryInfo={countryInfo} />
      <Borders countryInfo={countryInfo} />
      <Population countryInfo={countryInfo} />

      <Button mt={4} colorScheme='teal' onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </OpacityBox>
  )
}
