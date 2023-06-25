import { ChakraProvider, Flex, Text } from "@chakra-ui/react";

const MessageBubble = (props: {
  isUser: boolean;
  sender: string;
  text: string;
  dateSent: string;
}) => {
  const { isUser, text, dateSent } = props;
<<<<<<< HEAD
  let placement = isUser ? "end" : "start";
  let color = isUser ? "bg-primary" : "bg-neutral-content";
  let textColor = isUser ? "white" : "black";
  let sender = isUser ? "" : "You";
=======
>>>>>>> 7043b3ddec8e3ad0ace4425ac46c518f7ad578ef

  let placement = isUser ? "end" : "start";
  let color = isUser ? "bg-primary" : "bg-neutral-content";
  let textColor = isUser ? "white" : "black";
  let sender = isUser ? "" : "You";
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
