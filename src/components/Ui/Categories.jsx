import React from 'react'

import { Box, Button, Wrap, WrapItem } from '@chakra-ui/react'
import { useResultContext } from '../../context/ResultContextProvider'

const Categories = () => {
  const { setCategory } = useResultContext()
  return (
    <Box flex="1" color="white">
      <Wrap spacing="4">
        <WrapItem><Button onClick={() => setCategory("story")} colorScheme='white' borderColor="#7AB7AC" _hover={{ bg: "#7AB7AC", color: "white" }} variant="outline">Story</Button></WrapItem>
        <WrapItem><Button onClick={() => setCategory("comment")} colorScheme='white' borderColor="#7AB7AC" _hover={{ bg: "#7AB7AC", color: "white" }} variant="outline">Comments</Button></WrapItem>
        <WrapItem><Button onClick={() => setCategory("poll")} colorScheme='white' borderColor="#7AB7AC" _hover={{ bg: "#7AB7AC", color: "white" }} variant="outline">Poll</Button></WrapItem>
        <WrapItem><Button onClick={() => setCategory("job")} colorScheme='white' borderColor="#7AB7AC" _hover={{ bg: "#7AB7AC", color: "white" }} variant="outline">Jobs</Button></WrapItem>
      </Wrap>
    </Box>
  )
}

export default Categories