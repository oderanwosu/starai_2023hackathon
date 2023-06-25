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
  Container,
  Divider,
  CircularProgress,
} from "@chakra-ui/react";
import { handleClientScriptLoad } from "next/script";
import MessageBubble from "@/components/message_bubble";
import { useEffect, useRef, useState } from "react";
import MessagesContainer from "@/components/messages_list";
import TextBox from "@/components/textbox";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

export default function ChatBotPage() {
 
  const query = useSearchParams()
  const userID = query.get('userID')


  //fetch star information
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(`api/user?id=${userID}`, fetcher);
  if(data != null){
    setStarImageURL(data.starImageURL)
    setStarName(data.starName)
  }

  
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
      // const { res, error } = useSWR("/api/mongodb", fetcher);
      console.log("user input: " + userInput);
      fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({
          question: (message.content = userInput),
          history: conversation,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setBotRes(data.answer);
        })
        .catch((error) => {
          console.log(error);
        });
      // setBotRes(res);
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
  
  // if (error) return <div>Failed to load</div>
//    if (!data) return  <Flex
//    width={"100vw"}
//    height={"100vh"}
//    alignContent={"center"}
//    justifyContent={"center"}
//  ><Center><CircularProgress isIndeterminate color="#2C2ABB" /></Center></Flex>

  // user typing in the message
  const handleMessageChange = (event) => {
    setUserInput(event.target.value);
    if(event.key === "Enter"){
    userInputOnclick()
    }
  };

  // scroll to bottom on new message recieve/sent with use effect
  const chatbox = useRef(null);
  useEffect(() => {
    const chatboxElement = chatbox.current;
    document.title = "Chat";
    chatboxElement.scrollIntoView({ behavior: "smooth" });
    chatboxElement.scrollTop = chatboxElement.scrollHeight;
  }, [conversation]);

  //press enter to submit
  const handleKeypress = (event) => {
    if (event.keyCode === 13) {
      userInputOnclick();
    }
  };

  return (
    <Grid paddingTop={"5vh"} paddingInline={"3vw"}>
      <section id="header">
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
      <Divider></Divider>
       
    </section>
    <section>
    <MessagesContainer conversation={conversation} chatBoxRef={chatbox}></MessagesContainer>
    </section>
    <section className="relative bottom-0 w-full py-10" >
        <Center>
          <TextBox
            handleClick={userInputOnclick}
            handleMessageChange={handleMessageChange}
            userInput={userInput}
            handleKeyPress={handleKeypress}
          ></TextBox>
        </Center>
      </section>
    </Grid>
  );
}
