import { InputGroup, InputRightElement, Button, Textarea } from "@chakra-ui/react"
import { Input } from "postcss"

const TextBox = (props: {handleClick: any, handleMessageChange: any, userInput: any}) => {
    const {handleClick, handleMessageChange, userInput} = props
    return (
        <InputGroup size='md'>
      <Textarea resize={"none"} placeholder="Here is a sample placeholder" onChange={handleMessageChange} value={userInput} />
      <InputRightElement width='5.5rem' >
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          Send
        </Button>
      </InputRightElement>
    </InputGroup>
    )
}

export default TextBox;

