"use client";
import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { Center, Text, Input, Button, Box, Container, VStack } from '@chakra-ui/react';


export default function NamePage() {

  const [name, setName] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

    return (
      <div>
        <Box w="100%" h="100vh" bgGradient="linear(to-r, #2C2ABB, #FCA6EF)">
          <Center h="100vh">
            <VStack>
              <Text fontSize="48px" color="White" pb="4rem">
                My name is&nbsp; <Input type="text" value={name} onChange={handleInputChange} placeholder="type here" size="48px" variant="unstyled" fontWeight="normal" color="White" width='25rem' _placeholder={{ opacity: 0.4, color: 'inherit' }} />
              </Text>
              <Link
                href={{
                  pathname: '/onboard/data-entry-context',
                  query: {
                    name: name
                  }
                }}
              >
                {/* <button>Next</button> */}
                <Button variant='outline' m="1">
                  Next
                </Button>
              </Link>
            </VStack>
          </Center>
        </Box>
      </div>
    );
  }