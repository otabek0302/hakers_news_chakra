import React from 'react'

import Search from '../Ui/Search'
import Categories from '../Ui/Categories'

import { Container, HStack } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Container maxW="1024px" centerContent py="10">
      <HStack justify="space-between" w="full">
        <Search />
        <Categories />
      </HStack>
    </Container>
  )
}

export default Navbar