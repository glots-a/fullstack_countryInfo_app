import React from 'react'
import {Outlet} from 'react-router-dom'
import {Box} from '@chakra-ui/react'

function App() {
  return (
    <Box
      minHeight='100vh'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      padding={['4', '8', '12']}
      maxWidth={['100%', '90%', '80%', '70%']}
      margin='0 auto'>
      <Outlet />
    </Box>
  )
}

export default App
