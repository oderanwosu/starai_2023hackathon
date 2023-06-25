"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {
  Avatar,
  Button,
  Center,
  ChakraBaseProvider,
  ChakraProvider,
  Grid,
  GridItem,
  Input,
  Textarea,
  Wrap,
  WrapItem,
  Text,
  Badge,
  Box,
  Flex,
} from "@chakra-ui/react";

export default function ChatBotPage() {
  return (
    <ChakraProvider>
      <div className="p-20" id="header">
        <Flex className="py-4">
          <Avatar src="https://bit.ly/sage-adebayo" />
          <Box ml="3">
            <Text fontWeight="bold">
              Segun Adebayo
              <Badge ml="1" colorScheme="yellow">
                Responding
              </Badge>
            </Text>
            <Text fontSize="sm">Last seen two hours ago</Text>
          </Box>
        </Flex>
        <hr></hr>
      </div>
      <div className="fixed bottom-0 w-full ">
        {/* text body */}
        <Center>
          <Grid>
            <GridItem>
              <Flex>
              <Text>John Smith&nbsp;</Text>
              <Text color={'grey'}>Yesterday</Text>
              </Flex>
              <Flex
                overflow='hidden'
                bgGradient="linear(to-r, #2C2ABB, #FCA6EF)"
                borderRadius={30}
              >
                 <Text color={'white'} padding={2} fontSize={16}>
                magni porro sunt illo culpa quo obcaecati. Beatae, ducimus ab.
              </Text>
           
              </Flex>

             
            </GridItem>
            <GridItem>
              <h1>
                {" "}
                doloremque tenetur repellendus autem praesentium nisi, voluptate
                magni porro sunt illo culpa quo obcaecati. Beatae, ducimus ab.
              </h1>
            </GridItem>
            <GridItem>
              <h1>
                {" "}
                doloremque tenetur repellendus autem praesentium nisi, voluptate
                magni porro sunt illo culpa quo obcaecati. Beatae, ducimus ab.
              </h1>
            </GridItem>
          </Grid>
        </Center>
        {/*text body area */}
        <Center>
          <Textarea placeholder="Here is a sample placeholder" />
          <Button colorScheme="blue">Send</Button>
        </Center>
      </div>

      {/* header */}
    </ChakraProvider>
  );
}
