import { View, Text} from 'react-native';

export default function MyFirstComponent({firstName, lastName}) {

    return (
        <View>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                {firstName}
            </Text>
            <Text>{lastName}</Text>
        </View>
    )


}