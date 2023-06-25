"use client";
import { ChakraProvider } from '@chakra-ui/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <ChakraProvider>
        <html lang="en">
        <body>{children}</body>
      </html>
      </ChakraProvider>
      
    )
  }
  