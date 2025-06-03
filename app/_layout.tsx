import { View, Text } from 'react-native'
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import React from 'react'
import { Stack } from 'expo-router'

export default function RootLayout() {
  return <GluestackUIProvider>
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="product/[id]"
        options={{
          title: "Product Details",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="cart"
        options={{
          title: "Cart",
          headerShown: true,
        }}
      />
    </Stack>
    </GluestackUIProvider>;
}
