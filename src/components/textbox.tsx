import {
  InputGroup,
  InputRightElement,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { Input } from "postcss";

const TextBox = (props: {handleClick: any, handleMessageChange: any, userInput: any, handleKeyPress: any}) => {
    const {handleClick, handleMessageChange, userInput, handleKeyPress} = props
    return (
        <InputGroup size='md'>
      <Textarea resize={"none"} placeholder="Here is a sample placeholder" onChange={handleMessageChange} value={userInput} onKeyDown={handleKeyPress} />
      <InputRightElement width='5.5rem' >
        <Button h='1.75rem' size='sm' onClick={handleClick }>
          Send
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default TextBox;
