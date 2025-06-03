
import { View, Text } from 'react-native'
import React from 'react'
import { Card} from '../components/ui/card';
import { Image } from '../components/ui/image';
import { Box } from '../components/ui/box';
import { Button } from '../components/ui/button';
import { Heading } from '../components/ui/heading';
import { VStack } from '../components/ui/vstack'; 
import { ButtonText } from '../components/ui/button';




export const ProductListItem = ({product}   : {product: any}) => {
    return (
        <Card className="p-5 rounded-lg max-w-[360px] m-3">
      <Image
      source={{uri:product.image, width: 300, height: 300}}
        className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
        alt={'${product.name}image'}
      />
      <Text className="text-sm font-normal mb-2 text-typography-700">
        {product.name}
      </Text>
      <VStack className="mb-6">
        <Heading size="md" className="mb-4">
            {product.description}
        </Heading>
        <Text className="text-sm font-normal text-typography-700">
            ${product.price}
        </Text>
      </VStack>
      <Box className="flex-col sm:flex-row">
        <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
          <ButtonText size="sm">Add to cart</ButtonText>
        </Button>
        <Button
          variant="outline"
          className="px-4 py-2 border-outline-300 sm:flex-1"
        >
          <ButtonText size="sm" className="text-typography-600">
            Wishlist
          </ButtonText>
        </Button>
      </Box>
    </Card>
    )
}