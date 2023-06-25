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
import { Message } from "postcss";

export default function ChatBotPage() {
  const query = useSearchParams();
  const userID = query.get("userID");

  let [starImageURL, setStarImageURL] = useState("");
  let [starName, setStarName] = useState("");
  let [responseStatus, setResponseStatus] = useState(0);

  //fetch star information
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(`api/user?id=${userID}`, fetcher);
  if (data != null) {
    setStarImageURL(data.starImageURL);
    setStarName(data.starName);
  }

  //the conversation
  let [conversation, setConversation] = useState([]);
  // adding message to the message box when user type stuff in
  let [userInput, setUserInput] = useState("");
  let [botRes, setBotRes] = useState("");
  // user enter the message
  const userInputOnclick = () => {
    // message object
    const date = Date.now();
    let message: Message = {
      content: "",
      sender: "",
      time: new Date(date).toString(),
      type: "",
    };

    //add user message to the message display

    if (true) {
      setResponseStatus(2);
      message.content = userInput;
      message.sender = "user";
      message.isUser = true;
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
          console.log(data);
          setResponseStatus(2);
          let botMessage: Message = {
            content: data.text,
            sender: "star",
            isUser: false,
            time: new Date(date).toString(),
            type: "",
          };

          setConversation((preContent) => [...preContent, botMessage]);
          setTimeout(() => {
            setResponseStatus(3);
          }, 500);
          setResponseStatus(2);
        })
        .catch((error) => {
          console.log(error);
        });

      // setBotRes(res);
    }
    //push user input to backend
  };

  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      userInputOnclick();
    }
  };

  //   if (error){
  //     return <Flex
  //    width={"100vw"}
  //    height={"100vh"}
  //    alignContent={"center"}
  //    justifyContent={"center"}
  //  ><Center><Text color={"tomato"}> There was an error retrieving the user. Refresh the page.</Text></Center></Flex>
  //   }

  //    if (!data) return  <Flex
  //    width={"100vw"}
  //    height={"100vh"}
  //    alignContent={"center"}
  //    justifyContent={"center"}
  //  ><Center><CircularProgress isIndeterminate color="#2C2ABB" /></Center></Flex>

  // user typing in the message
  const handleMessageChange = (event) => {
    setUserInput(event.target.value);
    if (event.key === "Enter") {
      userInputOnclick();
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

  return (
    <Grid paddingTop={"5vh"} paddingInline={"3vw"}>
      <section id="header">
        <Center>
          <Flex className="py-4">
            <Avatar src="https://media.cnn.com/api/v1/images/stellar/prod/230621150034-taylor-swift-concert-chicago-0602-restricted.jpg?c=3x2" />
          </Flex>
        </Center>
        <Center>
          <Text>Lucy</Text>
        </Center>

        <Divider paddingTop={"5"}></Divider>
      </section>
      <section>
        <MessagesContainer
          conversation={conversation}
          chatBoxRef={chatbox}
        ></MessagesContainer>
      </section>
      <section className="relative bottom-0 w-full py-5">
        <Box ml="5" p={5}>
          <Text fontWeight="bold">
            {starName}
            {responseStatus === 0 && <Badge ml="1">Waiting for you</Badge>}
            {responseStatus === 2 && (
              <Badge ml="1" colorScheme="blue">
                Typing...
              </Badge>
            )}
            {responseStatus === 3 && (
              <Badge ml="1" colorScheme="purple">
                Responded
              </Badge>
            )}
          </Text>
        </Box>
        <Center>
          <TextBox
            handleClick={userInputOnclick}
            handleMessageChange={handleMessageChange}
            userInput={userInput}
            handleKeyPress={handleKeyPress}
          ></TextBox>
        </Center>
      </section>
    </Grid>
  );
}
