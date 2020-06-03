import React, { useContext } from 'react'
import { UserContext } from '../Services/UserContext'
import { Flex, Avatar, Box, Text } from '@chakra-ui/core'

const UserCard = (): JSX.Element => {
  const { user } = useContext(UserContext as any)

  return (
    <Flex direction="column" alignSelf="center" mt={10}>
      <Flex
        direction="column"
        bg="#212F3C"
        width="300px"
        rounded={4}
        p={4}
        mb={10}
      >
        <Flex alignItems="center" mb={3}>
          <Avatar name={user.data.name} src={user.data.image} mr={3} />
          <Box>
            <Text>{user.data.name}</Text>
            <Text fontSize={12} color="gray.400">
              @{user.data.username}
            </Text>
          </Box>
        </Flex>
        <Text fontStyle="italic" color="gray.400">
          Email: {user.data.email}
        </Text>
      </Flex>
    </Flex>
  )
}

export default UserCard
