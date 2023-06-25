"use client";
import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { Center, Text, Input, Button, Box, useClipboard, VStack } from '@chakra-ui/react';
import Header from '@/app/common/header';

export default function LinkPage() {
  const { onCopy, value, setValue, hasCopied } = useClipboard("");

    return (
      <div>
        <Box w="100%" bgGradient="linear(to-r, #2C2ABB, #FCA6EF)">
          <Header />
          <Center h="90vh">
            <VStack>
              <Text fontSize="32px" color="White" opacity="0.6" fontWeight='400'>
                Copy this link and send it to your fans
              </Text>
              <Text fontSize="48px" color="White" fontWeight='500'>
                Your shareable starAI link for your AI personality
              </Text>
              <Text fontSize="48px" color="Black" pb="4rem" fontWeight='700'>
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