"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {
  Avatar,
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
      <main className="overflow-hidden">
        <Grid gap={4}>
          <GridItem colSpan={1}>
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
          <Center>
            <GridItem colSpan={3}>
              <h1>Hello, I am this person that you care about</h1>
              <h1>Hello, I am this person that you care about</h1>
              <h1>Hello, I am this person that you care about</h1>
              <GridItem>
                <Textarea placeholder='Here is a sample placeholder' />
            </GridItem>
                
            </GridItem>
          </Center>
        </Grid>
      </main>
    </ChakraProvider>
  );
}
