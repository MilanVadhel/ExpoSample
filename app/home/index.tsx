import { useRouter } from "expo-router"
import { Button, Text, View } from "react-native"

const HomeScreen = () => {
    const router = useRouter()
    return (
        <View style={{
            flex : 1
        }}>
            <Text>Home Screen</Text>
            <Button title="Go to Details" onPress={() => router.push('/details')}/>
        </View>
    )
}

export default HomeScreen