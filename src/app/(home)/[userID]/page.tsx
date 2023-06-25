"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useRef, useEffect } from "react";
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
  const userInputOnclick = () => {
    //add user message to the message display
    setConversation((preContent) => [...preContent, userInput]);
    setUserInput("");
    console.log(userInput);
    console.log(conversation);
    //push user input to backend
  };
  // user typing in the message
  const handleMessageChange = (event) => {
    setUserInput(event.target.value);
  };

  // scroll to bottom on new message recieve/sent with use effect
  const chatbox = useRef(null);
  useEffect(() => {
    const divElement = chatbox.current;
    divElement.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <ChakraProvider>
      <main className="overflow-hidden">
        <Grid gap={4}>
          <GridItem className="chatbox" colSpan={1}>
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
              <div
                ref={chatbox}
                className="messageContainer"
                style={{ width: "200px", height: "100px" }}
              >
                {conversation.map((message, index) => (
                  <div key={index}>{message}</div>
                ))}
              </div>
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
