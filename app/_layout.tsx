import { View, Text } from 'react-native'
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import React from 'react'
import { Stack } from 'expo-router'

export default function RootLayout(){
  return <GluestackUIProvider mode="light"><Stack/></GluestackUIProvider>;
}
