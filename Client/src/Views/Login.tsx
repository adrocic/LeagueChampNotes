import React from 'react'
import { Flex } from '@chakra-ui/core'
import { useAuth } from '../Services/AuthContext'
import LoginForm from '../Components/LoginForm'
import { withRouter, Redirect } from 'react-router-dom'

const Login = (): JSX.Element => {
  const { isLoggedIn } = useAuth()
  return (
    <Flex
      bg="teal.600"
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        height="400px"
        width="400px"
        bg="white"
        rounded="4px"
        p="10px"
        justifyContent="center"
        alignItems="center"
      >
        {isLoggedIn ? <Redirect to={'/home'} /> : <LoginForm />}
      </Flex>
    </Flex>
  )
}

export default withRouter(Login)
