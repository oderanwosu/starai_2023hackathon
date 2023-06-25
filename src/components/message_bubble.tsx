import { ChakraProvider, Flex, Text } from "@chakra-ui/react";

const MessageBubble = (props: {
  sender: string;
  text: string;
  dateSent: string;
}) => {
  const { isUser, text, dateSent } = props;
  let placement = isUser == true ? "end" : "start";
  let color = isUser == false ? "bg-primary" : "bg-neutral-content";
  let textColor = isUser == false ? "white" : "black";
  let sender = isUser == false ? "" : "You";

  return (
    <ChakraProvider>
      <div className={`chat chat-${placement}`}>
        <div className="chat-header">
          {sender}
          <time className="text-xs opacity-50">&nbsp;{dateSent}</time>
        </div>
        <div className={`chat-bubble ${color}`}>
          <Text color={textColor}>{text}</Text>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default MessageBubble;
