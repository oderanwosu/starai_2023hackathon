"use client";
import '../globals.css'
// import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google';
import { ChakraProvider } from '@chakra-ui/react'

// const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ['latin'],
  weight: '700'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <ChakraProvider>
        <html lang="en">
            {/* <body className={inter.className}>{children}</body> */}
            <body className={poppins.className}>{children}</body>
        </html>
      </ChakraProvider>
    
  )
}