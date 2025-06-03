import { useLocalSearchParams } from 'expo-router';
import { Text } from '../../components/ui/text';


export default function ProductDetailsScreen() {

    const {id} = useLocalSearchParams();
    return (


            <Text>Product Details {id}</Text>

    );
}   