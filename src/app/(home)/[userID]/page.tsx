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
import useSWR from "swr";

export default function ChatBotPage() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  //the conversation
  let [conversation, setConversation] = useState([]);
  // adding message to the message box when user type stuff in
  let [userInput, setUserInput] = useState("");
  let [botRes, setBotRes] = useState("");

  // user enter the message
  const userInputOnclick = () => {
    // message object
    let message = { content: "", sender: "" };
    //add user message to the message display
    if (userInput != "") {
      message.content = userInput;
      message.sender = "user";
      setConversation((preContent) => [...preContent, message]);
      setUserInput("");
      //api request
      const { res, error } = useSWR("/api/mongodb", fetcher);
      setBotRes(res);
    }
    //how to make seperate user message vs chatbot message?
    //push user input to backend
    if (botRes != "") {
      message.content = botRes;
      message.sender = "star";
      setConversation((preContent) => [...preContent, message]);
      setBotRes("");
    }
  };
  // user typing in the message
  const handleMessageChange = (event) => {
    setUserInput(event.target.value);
  };

  // scroll to bottom on new message recieve/sent with use effect
  const chatbox = useRef(null);
  useEffect(() => {
    const chatboxElement = chatbox.current;
    chatboxElement.scrollIntoView({ behavior: "smooth" });
    chatboxElement.scrollTop = chatboxElement.scrollHeight;
  }, [conversation]);

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
                style={{ width: "200px", height: "100px", overflowY: "auto" }}
              >
                {conversation.map((message, index) => (
                  <div key={index}>{message.content}</div>
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
