
import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Card } from './ui/card';
import { Image } from './ui/image';
import { Link } from 'expo-router';




export const ProductListItem = ({ product }: { product: any }) => {
  return (

    <Link href={`/product/${product.id}`} asChild>
      <Pressable className="flex-1">
        <Card className="p-5 rounded-lg max-w-[360px] flex-1">
          <Image
            source={{ uri: product.image, width: 300, height: 300 }}
            className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
            alt={'${product.name}image'}
            resizeMode='contain'
          />
          <Text className="text-sm font-normal mb-2 text-typography-700">
            {product.name}
          </Text>
          <Text className="text-sm font-normal text-typography-700">
            ${product.price}
          </Text>
        </Card>
      </Pressable>
    </Link>
  )
}