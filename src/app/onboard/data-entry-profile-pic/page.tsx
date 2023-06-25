"use client";
import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Center, Text, Input, Button, Box } from '@chakra-ui/react';


export default function ProfilePicPage() {
    const searchParams = useSearchParams();

    const [profilePicURL, setProfilePicURL] = useState('')

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setProfilePicURL(event.target.value)
    }

    return (
      <div>
        <Box w="100%" h="100vh" bgGradient="linear(to-r, #2C2ABB, #FCA6EF)">
          <Center h="100vh">
            <Text fontSize="48px" color="White">
              Upload your profile picture
            </Text>
            <Text fontSize="24px" color="White">
              Image url:
            </Text>
            <Input type="text" value={profilePicURL} onChange={handleInputChange} placeholder="type here" size="32px" variant="unstyled" fontWeight="normal"  color="whiteAlpha.800" />
            <Link
              href={{
                pathname: '/onboard/generate-url-loading',
                query: {
                  name: searchParams.get('name'),
                  context: searchParams.get('context'),
                  profilePicURL: profilePicURL
                }
              }}
            >
              <Button colorScheme='teal' variant='outline'>
                Next
              </Button>
            </Link>
          </Center>
        </Box>
      </div>
    );
  }