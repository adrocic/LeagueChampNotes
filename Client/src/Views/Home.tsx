import React, { useContext } from 'react'
import { Flex, Box, Text } from '@chakra-ui/core'
import { UserContext } from '../Services/UserContext'

import UserCard from '../Components/UserCard'

const Home = (): JSX.Element => {
  const { user } = useContext(UserContext as any)

  return (
    <Flex direction="column" mt={10}>
      <Box fontSize={48} alignSelf="center" fontWeight="bold">
        Home Page
      </Box>
      <Box alignSelf="center" color="orange.300">
        User this page to login and see the generated &quotuser context.&quot
      </Box>

      {user.data ? (
        <>
          <UserCard />
        </>
      ) : (
        <Flex alignSelf="center" mt={24}>
          <Text>No user data</Text>
        </Flex>
      )}
    </Flex>
  )
}

export default Home
