import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

import { useAuth } from '../Services/AuthContext'
import { Spinner, Flex } from '@chakra-ui/core'

const PrivateRoute = (props: RouteProps): any => {
  const auth = useAuth()
  if (auth.isLoading)
    return (
      <Flex direction="column" align="center" justify="center" h="100vh">
        <Spinner color="orange.400" mb="4" />
      </Flex>
    )
  return auth.isLoggedIn ? <Route {...props} /> : <Redirect to="/login" />
}

export default PrivateRoute
