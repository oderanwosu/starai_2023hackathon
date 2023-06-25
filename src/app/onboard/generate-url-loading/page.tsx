"use client";
import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { Center, Text, Input, Button, Box } from '@chakra-ui/react';


export default function LoadingPage() {

    return (
      <div>
        <Box w="100%" h="100vh" bgGradient="linear(to-r, #2C2ABB, #FCA6EF)">
          <Center h="100vh">
            <Text fontSize="48px" color="White">
              Ok, we are generating a custom starAI link for you and your fans
            </Text>
            <Text>
              [Loading circle]
            </Text>
          </Center>
        </Box>
      </div>
    );
  }