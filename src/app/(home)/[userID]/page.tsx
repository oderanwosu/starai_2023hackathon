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
  Text,
  Badge,
  Box,
  Flex,
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
