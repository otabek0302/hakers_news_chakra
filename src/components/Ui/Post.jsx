import React from 'react'

import { Badge, Button, Card, CardBody, CardFooter, CardHeader, Heading, Link, Stat, StatHelpText, WrapItem } from '@chakra-ui/react'

const Post = ({ title, created_at, url, author, story_title, story_url }) => {
  return (
    <WrapItem flex="49%" m="0px" boxShadow="sm">
      <Card bg="blackAlpha.800" borderColor="teal" border="2px" p="24px 16px" w="full" h="200px" justify="space-between" rounded="md">
        <CardHeader py="0">
            <Heading size="md" color="white" noOfLines="1">{title || story_title}</Heading>
        </CardHeader>
        <CardBody>
          <Badge p="1" variant="subtle" colorScheme='pink'>{author}</Badge>
        </CardBody>
        <CardFooter justify="space-between" py="0">
          <Stat display="flex" alignItems="center">
            <StatHelpText color="white" fontSize="md" mb="0">{new Date(created_at).toDateString()}</StatHelpText>
          </Stat>
          {
            (url || story_url) && (
              <Button colorScheme='teal' variant="solid">
                <Link href={url || story_url} isExternal _hover={{ textDecorationStyle: "none" }}>Read More</Link>
              </Button>
            )
          }

        </CardFooter>
      </Card>
    </WrapItem>
  )
}

export default Post