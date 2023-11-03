import React, { useState } from 'react'

import { Box, Button, Input, InputGroup, InputLeftElement, InputRightElement, Skeleton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useResultContext } from '../../context/ResultContextProvider'

const Search = () => {
  const [text, setText] = useState("")

  const { setSearch, isLoading } = useResultContext()

  const handleSearch = () => {
    setSearch(text)
  }

  return (
    <Box flex="1" color="white" minW={{base: "full", md: "sm"}}>
      {
        isLoading ? (<Skeleton h="40px" w="full" />) : (
          <InputGroup borderColor="#7AB7AC">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="white" />
            </InputLeftElement>
            <Input type='text' focusBorderColor='#7AB7AC' placeholder='Type here...' pr='20' onChange={(e) => setText(e.target.value)} />
            <InputRightElement width='4.5rem' mr="2">
              <Button onClick={handleSearch} colorScheme='white' bg="#7AB7AC" h='1.75rem' size='xs' _hover={{ border: "2px", borderColor: "#7AB7AC", bg: "transparent", color: "white" }} >
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
        )
      }
    </Box>
  )
}

export default Search