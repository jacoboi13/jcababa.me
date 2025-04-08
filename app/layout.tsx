import type React from "react"
 import type { Metadata } from "next"
 import { Inter } from "next/font/google"
 import "./globals.css"
 import ClientLayout from "./clientLayout"
 
 const inter = Inter({ subsets: ["latin"] })
 
 export const metadata: Metadata = {
   title: "Johncarlo CA",
   description: "Personal info of Johncarlo Ababa",
   generator: "v0.dev | Sn0wRainX",
   icons: "/favicon.ico",
 }
 
 export default function RootLayout({
   children,
 }: {
   children: React.ReactNode
 }) {
   return <ClientLayout>{children}</ClientLayout>
 }
 