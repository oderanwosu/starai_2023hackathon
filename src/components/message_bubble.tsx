import { ChakraProvider, Flex, Text } from "@chakra-ui/react";

const MessageBubble = (props: {
  sender: string;
  text: string;
  dateSent: string;
}) => {
  const { sender, text, dateSent } = props;
  let isUser = sender === "user" ? true : false;
  let placement = isUser == false || isUser == null ? "end" : "start";
  let color = isUser == false ? "bg-primary" : "bg-neutral-content";
  let textColor = isUser == false ? "white" : "black";
  let senderName = isUser == false ? "" : "You";

  return (
    <ChakraProvider>
      <div className={`chat chat-${placement}`}>
        <div className="chat-header">
          {senderName}
          <time className="text-xs opacity-50">&nbsp;12:45</time>
        </div>
        <div className={`chat-bubble ${color}`}>
          <Text color={textColor}>{text}</Text>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default MessageBubble;
