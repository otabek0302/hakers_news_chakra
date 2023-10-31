import React from 'react'
import Post from '../Ui/Post'

import { Badge, Box, Button, Container, Heading, VStack, Wrap } from '@chakra-ui/react'
import { useResultContext } from '../../context/ResultContextProvider'

const Posts = () => {
  const { category, results, setShow, show } = useResultContext();
  console.log(results);
  return (
    <Container maxW="1024">
      <Box w="100%" h="100%">
        <Heading as="h2" size="md" color="white" >Category: <Badge variant='outline' p="1" ml="2" colorScheme='blue'>{category}</Badge></Heading>
        <Box my="4" h="580px" overflow="hidden">
          <Wrap h="100%" justify="space-between" overflowY="scroll" scrollBehavior="smooth">
            {results?.map((post, i) => (<Post { ...post } key={i} />))}
          </Wrap>
        </Box>
      </Box>
      <VStack>
        <Button onClick={() => setShow(!show)} variant="outline" color="white" borderColor="#7AB7AC" _hover={{ color: "#7AB7AC", borderColor: "white" }}>
          Show { show ? "Less" : "More" }
        </Button>
      </VStack>

    </Container>
  )
}

export default Posts

