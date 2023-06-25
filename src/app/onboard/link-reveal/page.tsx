"use client";
import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { Center, Text, Input, Button, Box, useClipboard, VStack } from '@chakra-ui/react';


export default function LinkPage() {
  const { onCopy, value, setValue, hasCopied } = useClipboard("");

    return (
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
              <Text fontSize="48px" color="Black" pb="4rem">
                http://starai/johnsmith53432
              </Text>
              <Button onClick={onCopy} variant='outline'>
                {hasCopied ? "Copied!" : "Copy"}
              </Button>
            </VStack>
          </Center>
        </Box>
      </div>
    );
  }