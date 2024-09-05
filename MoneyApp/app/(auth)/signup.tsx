import { View, Text, StatusBar, SafeAreaView, StyleSheet, TextInput, Pressable } from "react-native";
import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainText}>Username</Text>
      <TextInput
        style={styles.inputText}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter your username"
      />
      <Text style={styles.mainText}>Email</Text>
      <TextInput
        style={styles.inputText}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <Text style={styles.mainText}>Password</Text>
      <TextInput
        style={styles.inputText}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Pressable onPress={() => console.log("Sign Up pressed")}>
        <Text style={styles.signUp}>Sign Up</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2E3BC",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20, // Added padding for better layout
    justifyContent: "center", // Center content vertically
  },
  mainText: {
    fontSize: 25,
    color: "#AA8422",
    padding: 5,
  },
  inputText: {
    height: 40,
    marginVertical: 10, // Increased margin for spacing between inputs
    color: "#861D32",
    backgroundColor: "#EBD499",
    padding: 10,
    borderWidth: 0,
    borderRadius: 5, // Added border radius for rounded corners
  },
  signUp: {
    fontSize: 40,
    color: "#F2E3BC",
    textAlign: "center",
    height: 50,
    marginVertical: 20, // Adjusted margin for spacing
    backgroundColor: "#AA8422",
    lineHeight: 50, // Center text vertically within the button
    borderRadius: 5, // Added border radius for rounded corners
  },
});
