"use client";
import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { Center, Text, Input, Button, Box, VStack, Spinner } from '@chakra-ui/react';


export default function LoadingPage() {

    return (
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
    );
  }