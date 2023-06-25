"use client";
import { useState, ChangeEvent, useEffect } from 'react';
import Link from 'next/link';
import { Center, Text, Input, Button, Box, useClipboard, VStack, Spinner } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';


export default function LinkPage() {
  const searchParams = useSearchParams();

  const [star_id, setStarId] = useState('')

  useEffect(() => {
    
    fetch("/api/mongo_db", {
      method: "POST",
      body: JSON.stringify({
        name: searchParams.get('name'),
        context: searchParams.get('context'),
        youtubeURL: searchParams.get('youtubeURL'),
        profilePicURL: searchParams.get('profilePicURL')
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setStarId(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  const { onCopy, value, setValue, hasCopied } = useClipboard("");

  return (
    <>
    {!star_id ? (
              <div>
              <Box w="100%" h="100vh" bgGradient="linear(to-r, #2C2ABB, #FCA6EF)">
                <Center h="100vh">
                  <VStack>
                    <Text fontSize="48px" color="White" pb="2rem">
                      Hold tight while we generate a custom starAI link for your fans!
                    </Text>
                    <Spinner
                      thickness='4px'
                      speed='0.65s'
                      emptyColor='gray.200'
                      color='blue.500'
                      size='xl'
                    />
                  </VStack>
                </Center>
              </Box>
            </div>
    ) : (
      <div>
        <Box w="100%" h="100vh" bgGradient="linear(to-r, #2C2ABB, #FCA6EF)">
          <Center h="100vh">
            <VStack>
              <Text fontSize="32px" color="White" opacity="0.6">
                Copy this link and send it to your fans
              </Text>
              <Text fontSize="48px" color="White">
                Your shareable starAI link for your AI personality
              </Text>
              <Text fontSize="34px" color="Black" pb="4rem">
                {`http://starai/${star_id}`}
              </Text>
              <Button onClick={onCopy} variant='outline'>
                {hasCopied ? "Copied!" : "Copy"}
              </Button>
            </VStack>
          </Center>
        </Box>
      </div>
    )}
    </>
  );
}