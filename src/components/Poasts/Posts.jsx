import React from 'react'
import Post from '../Ui/Post'

import { Badge, Box, Button, Container, Heading, Skeleton, SkeletonText, VStack, Wrap } from '@chakra-ui/react'
import { useResultContext } from '../../context/ResultContextProvider'

const Posts = () => {
  const { category, results, setShow, show, isLoading } = useResultContext();
  console.log(results);
  return (
    <Container maxW="1024">
      <Box w="100%" h="100%">
        <Heading as="h2" size="md" color="white" >Category: <Badge variant='outline' p="1" ml="2" colorScheme='blue'>{category}</Badge></Heading>
        <Box my="4" h="580px" overflow="hidden">
          <Wrap h="100%" justify="space-between" overflowY="scroll" scrollBehavior="smooth">
            {results?.map((post, i) => (<Post { ...post } key={i} />))}
            {
              isLoading && Array(4).fill(
                <Box flex="49%" bg="whiteAlpha.400" p="24px 16px" borderRadius="4px">
                    <Skeleton h="40px" w="full" />
                    <SkeletonText mt="6" noOfLines="2" spacing="4" skeletonHeight="4" />
                </Box>
              )
            }
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

