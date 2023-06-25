"use client";
import { Message } from "@/utils/interfaces"
import { useEffect, useRef } from "react";
import MessageBubble from "./message_bubble";
import { ChakraProvider } from "@chakra-ui/react";


const MessagesContainer = (props: {conversation: Array<Message>, chatBoxRef: any}) => {
    const {conversation, chatBoxRef} = props;
  
    return (
    <ChakraProvider>
        <div
        ref={chatBoxRef}
        className="messageContainer"
        style={{ width: "100%", height: "55vh", overflowY: "auto" }}
        >
            
        {conversation.map((message, index) => (
            
            <MessageBubble key={index} isUser={message.isUser} text={message.content} dateSent={message.time}></MessageBubble>
        ))}
        </div>
    </ChakraProvider>
    )
    
}

export default MessagesContainer;