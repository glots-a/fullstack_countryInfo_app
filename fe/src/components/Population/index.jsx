import React from 'react'
import {Box, Heading} from '@chakra-ui/react'

import {Line} from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler)

export const Population = ({countryInfo}) => {
  const hasPopulationInfo = Array.isArray(countryInfo?.population)

  const populationData = {
    labels: (countryInfo?.population || []).map(entry => entry.year),
    datasets: [
      {
        label: 'Population',
        data: (countryInfo?.population || []).map(entry => entry.value),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  }
  return hasPopulationInfo ? (
    <Box mt={8}>
      <Heading as='h2' size='lg' mb={4}>
        Population Over Years
      </Heading>
      <Line data={populationData} />
    </Box>
  ) : null
}
