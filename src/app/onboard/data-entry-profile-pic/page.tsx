"use client";
import { useState, ChangeEvent } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Center, Text, Input, Button, Box, VStack } from "@chakra-ui/react";
import Header from "@/app/common/header";

export default function ProfilePicPage() {
  const searchParams = useSearchParams();

  const [profilePicURL, setProfilePicURL] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProfilePicURL(event.target.value);
  };

  return (
    <div>
      <Box w="100%" bgGradient="linear(to-r, #2C2ABB, #FCA6EF)">
        <Header />
        <Center h="90vh">
          <VStack className="p-10">
            <Text fontSize="48px" color="White" pb="2rem" fontWeight="500">
              Upload your profile picture
            </Text>
            <Text
              fontSize="24px"
              color="White"
              opacity="0.6"
              pb="1rem"
              fontWeight="400"
            >
              Image url:
            </Text>
            <Input
              type="text"
              value={profilePicURL}
              onChange={handleInputChange}
              placeholder="type here"
              fontWeight="normal"
              color="White"
              _placeholder={{ opacity: 0.4, color: "inherit" }}
            />
            <Link
              href={{
                pathname: "/onboard/generate-url-loading",
                query: {
                  name: searchParams.get("name"),
                  context: searchParams.get("context"),
                  youtubeURL: searchParams.get("youtubeURL"),
                  profilePicURL: profilePicURL,
                },
              }}
            >
              <Button variant="outline">Next</Button>
            </Link>
            <Link
              href={{
                pathname: "/onboard/data-entry-socials",
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
