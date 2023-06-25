"use client";
import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'
import { Center, Text, Textarea, Input, Button, Box, VStack } from '@chakra-ui/react';


export default function ContextPage() {
  const searchParams = useSearchParams()
  // console.log(searchParams.get('name'))

  const [context, setContext] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContext(event.target.value);
  };

    return (
      <div>
        <Box w="100%" h="100vh" bgGradient="linear(to-r, #2C2ABB, #FCA6EF)">
          <Center h="100vh">
            <VStack>
              <Text fontSize="24px" color="White" opacity="0.6">
                This is a chance to give your fans a deeper connection. What is something you haven't told them?
              </Text>
              <Text fontSize="48px" color="White">
                Something I want people to know about me is...
              </Text>
              <Textarea fontSize="24px" placeholder="type here" value={context} onChange={handleInputChange} fontWeight="normal" color="White" _placeholder={{ opacity: 0.4, color: 'inherit' }} />
              <Link
                href={{
                  pathname: '/onboard/data-entry-socials',
                  query: {
                    name: searchParams.get('name'),
                    context: context
                  }
                }}
              >
                <Button variant='outline' m="1">
                  Next
                </Button>
              </Link>
              <Link
                href={{
                  pathname: '/onboard/data-entry-name',
                }}
              >
                <Button variant='outline' m="1">
                  Back
                </Button>
              </Link>
            </VStack>
          </Center>
        </Box>
      </div>
    );
  }