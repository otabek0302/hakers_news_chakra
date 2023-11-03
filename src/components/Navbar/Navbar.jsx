import React from 'react'

import Search from '../Ui/Search'
import Categories from '../Ui/Categories'

import { Container, Stack } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Container maxW="1024px" centerContent py="10">
      <Stack justify="space-between" w="full" wrap direction={{ base: "column", md: "row" }}>
        <Search />
        <Categories />
      </Stack>
    </Container>
  )
}

export default Navbar