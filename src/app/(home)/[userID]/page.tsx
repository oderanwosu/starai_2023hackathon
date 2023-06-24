"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
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
  //the conversation
  let [conversation, setConversation] = useState([]);

  // adding message to the message box when user type stuff in
  let [userInput, setUserInput] = useState("");

  // user enter the message
  const onUserEnter = (newMessage: string) => {
    setConversation([...conversation, newMessage]);
  };
  // user typing in the message
  const handleMessageChange = () => {
    setUserInput(value);
  };
  const userInputOnclick = () => {
    //add user message to the message display
    //push user input to backend
  };

  // scroll to bottom on new message recieve/sent with use effect

  return (
    <ChakraProvider>
      <main className="overflow-hidden">
        <Grid gap={4}>
          <GridItem classname="chatbox" colSpan={1}>
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
                <Input
                  className="userInput"
                  placeholder="Here is a sample placeholder"
                  value={userInput}
                  onChange={handleMessageChange}
                />
                <Button onClick={userInputOnclick}> Enter</Button>
              </GridItem>
            </GridItem>
          </Center>
        </Grid>
      </main>
    </ChakraProvider>
  );
}
