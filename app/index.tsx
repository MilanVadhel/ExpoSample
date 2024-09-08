import { useRouter } from "expo-router"
import { Button, Text, View } from "react-native"

const RootScreen = () => {
    const router = useRouter()
    return (
        <View style={{
            flex : 1
        }}>
            <Text>Root Screen</Text>
            <Button title="Go to Home" onPress={() => router.push('/home')}/>
        </View>
    )
}

export default RootScreen