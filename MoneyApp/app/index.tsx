// This is our start page or home page or Root

import { Text, View, Image, StyleSheet, TouchableOpacity} from "react-native";
import { Link } from "expo-router";

// This is a function
// Next step: need to handle navigation (makes the whole button pressable)
export default function Start() {
  return (
    <View
      style={{
        flex: 1,
        //
        backgroundColor: '#F2E3BC',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={require('../assets/images/Galvin-Logo-Idea.png')}
        style={{ width: 300, height: 300, borderRadius: 150}} />
      <Text style={{fontSize:20}}>Welcome to Money Manager!</Text>
      <TouchableOpacity style={styles.button}>
        <Link href="/login" style={styles.buttonText}>Log In</Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Link href="/signup" style={styles.buttonText}>Sign Up</Link>
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFB685',
    paddingVertical: 15,
    paddingHorizontal: 150,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
