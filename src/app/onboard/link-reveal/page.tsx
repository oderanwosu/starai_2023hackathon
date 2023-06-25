"use client";
import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { Center, Text, Input, Button, Box, useClipboard } from '@chakra-ui/react';


export default function LinkPage() {
  const { onCopy, value, setValue, hasCopied } = useClipboard("");

    return (
      <div>
        <Box w="100%" h="100vh" bgGradient="linear(to-r, #2C2ABB, #FCA6EF)">
          <Center h="100vh">
            <Text fontSize="32px" color="White">
              Copy this link and send it to your fans
            </Text>
            <Text fontSize="48px" color="White">
              Copy this link and send it to your fans
            </Text>
            <Text fontSize="48px" color="Black">
              http://starai/johnsmith53432
            </Text>
            <Button onClick={onCopy} colorScheme='teal' variant='outline'>{hasCopied ? "Copied!" : "Copy"}</Button>
          </Center>
        </Box>
        <button>
            Copy link
        </button>
      </div>
    );
  }