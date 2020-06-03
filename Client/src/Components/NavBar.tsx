import React from 'react'
import { Flex, Avatar, Text, Stack, PseudoBox } from '@chakra-ui/core'
import { NavLink } from 'react-router-dom'

const filename = () => {
  return (
    <Flex direction="row" justifyContent="space-between" px={5}>
      {/* empty avater for alignment*/}
      <Avatar visibility="hidden" />
      <Flex bg="#212F3C" rounded={3} m={1} p={3} alignItems="center">
        <Text p={2} mr={5} fontWeight="bold">
          React Context Example
        </Text>
        <Stack spacing={3} isInline>
          <PseudoBox _hover={{ color: 'orange.300' }}>
            <NavLink
              style={{ padding: '5px 10px 5px 10px' }}
              activeStyle={{ borderBottom: '2px solid orange' }}
              to="/"
              exact
            >
              Home
            </NavLink>
          </PseudoBox>
          <PseudoBox _hover={{ color: 'orange.300' }}>
            <NavLink
              style={{ padding: '5px 10px 5px 10px' }}
              activeStyle={{ borderBottom: '2px solid orange' }}
              to="/about"
              exact
            >
              About
            </NavLink>
          </PseudoBox>
        </Stack>
      </Flex>
      <Flex alignItems="center">
        {user.data ? (
          <Avatar name={user.data.name} src={user.data.image} />
        ) : (
          <Avatar />
        )}
      </Flex>
    </Flex>
  )
}

export default filename
