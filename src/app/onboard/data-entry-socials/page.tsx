"use client";
import { useState, ChangeEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Center,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  Box,
  VStack,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { createIcon } from "@chakra-ui/icon";
import Header from "../../common/header";

export default function SocialsPage() {
  const searchParams = useSearchParams();

  const [youtubeURL, setYoutubeURL] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setYoutubeURL(event.target.value);
  };

  const YoutubeIcon = createIcon({
    displayName: "YoutubeIcon",
    viewBox: "0 0 16 16",
    path: (
      <path
        fill="currentColor"
        d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
      />
    ),
  });

  return (
    <div>
      <Box w="100%" bgGradient="linear(to-r, #2C2ABB, #FCA6EF)">
        <Header />
        <Center h="90vh">
          <VStack className="p-10">
            <Text fontSize="24px" color="White" opacity="0.6" fontWeight="400">
              This feature will train the AI to speak like you!
            </Text>
            <Text fontSize="48px" color="White" fontWeight="500">
              Feel free to add any social media links
            </Text>
            <Text fontSize="18px" color="White" fontWeight="400">
              (At least one is required)
            </Text>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                {/* <PhoneIcon color='gray.300' /> */}
                <Icon as={YoutubeIcon} boxSize={6} fill="currentColor" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Youtube video URL"
                onChange={handleInputChange}
                color="White"
                _placeholder={{ opacity: 0.4, color: "inherit" }}
              />
            </InputGroup>
            {/* <Link
                href={{
                  pathname: '/onboard/data-entry-profile-pic',
                  query: {
                    name: searchParams.get('name'),
                    context: searchParams.get('context')
                  }
                }}
              >
                <Button variant='outline'>
                    Next
                </Button>
              </Link> */}
            <Link
              href={{
                pathname: "/onboard/data-entry-profile-pic",
                query: {
                  name: searchParams.get("name"),
                  context: searchParams.get("context"),
                  youtubeURL: searchParams.get("youtubeURL"),
                },
              }}
            >
              <Button variant="outline" m="1">
                Next
              </Button>
            </Link>
            <Link
              href={{
                pathname: "/onboard/data-entry-context",
              }}
            >
              <Button variant="outline" m="1">
                Back
              </Button>
            </Link>
          </VStack>
        </Center>
      </Box>
    </div>
  );
}
