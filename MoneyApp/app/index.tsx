// This is our start page or home page or Root

import { Text, View} from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

// This is a function
export default function Start() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F2E3BC',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{fontSize:20}}>Welcome to Money Manager!</Text>
      <Link href="/login" style={{color: '#445E93', fontSize:30}}>Log In</Link>
      <Link href="/signup" style = {{color: '#445E93', fontSize:30}}>Sign Up</Link>
    </View>
  );
}
