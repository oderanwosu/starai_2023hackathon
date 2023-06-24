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
} from "@chakra-ui/react";

export default function ChatBotPage() {
  return (
    <ChakraProvider>
      {/* <main className="overflow-hidden">
        <Grid gap={4}>
          <GridItem>
            <Center>
              <Wrap>
                <WrapItem>
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                </WrapItem>
              </Wrap>
            </Center>
          </GridItem>
          <GridItem>
            <GridItem colSpan={3}>
              <Center>
                <Grid>
                  <h1>Hello, I am this person that you care about</h1>
                  <h1>Hello, I am this person that you care about</h1>
                  <h1>Hello, I am this person that you care about</h1>
                </Grid>
              </Center>
            </GridItem>
          </GridItem>
        </Grid>
      </main> */}
      <main>
      
          {/* header */}
          <div>
          <Center>
              <Wrap>
                <WrapItem>
                  <Avatar
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                </WrapItem>
              </Wrap>
            </Center>
          </div>

          <div className="fixed bottom-0 w-full ">
                {/* text body */}
            <Center>
            <Grid>
                <GridItem>
                    <h1> doloremque tenetur repellendus autem praesentium nisi, voluptate magni porro sunt illo culpa quo obcaecati. Beatae, ducimus ab.</h1>
                </GridItem>
                <GridItem>
                    <h1> doloremque tenetur repellendus autem praesentium nisi, voluptate magni porro sunt illo culpa quo obcaecati. Beatae, ducimus ab.</h1>
                </GridItem>
                <GridItem>
                    <h1> doloremque tenetur repellendus autem praesentium nisi, voluptate magni porro sunt illo culpa quo obcaecati. Beatae, ducimus ab.</h1>
                </GridItem>
            </Grid>
            </Center>
            {/*text body area */}
            <Center>
            <Textarea placeholder="Here is a sample placeholder" />
            <Button colorScheme='blue'>Send</Button>
            </Center> 
          </div>
     
      </main>
     
    </ChakraProvider>
  );
}
