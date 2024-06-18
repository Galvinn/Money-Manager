import {View, Button,Text, StatusBar,SafeAreaView,StyleSheet,TextInput, Pressable, TouchableOpacity} from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
export default function Index() {
  const [name,setName]=useState("")
   const [password,setPassword]=useState("")
  return (
    <SafeAreaView
      style={styles.container}>
        <Text style = {styles.mainText}>User Name</Text>
        <TextInput style={styles.inputText} value={name} onChangeText={setName}/>
        <Text style = {styles.mainText}>Password</Text>
        <TextInput style={styles.inputText} value={password} onChangeText={setPassword}/>
        <TouchableOpacity style={styles.logInButton}>
        <Link href="/budget" style={styles.buttonText}>Log In</Link>
        </TouchableOpacity>
       {/* <Pressable onPress={()=>console.log("logIn pressed")}>
        <Text style = {styles.logIn}>Log In</Text>
       </Pressable> */}
        </SafeAreaView>
  );
}
const styles= StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"#F2E3BC",
  paddingTop: StatusBar.currentHeight
},
mainText:{
  fontSize:25,
  // color:"#A5243D",
  color:"#5f5533",
  padding:5
},
inputText:{
height:40,
margin: 2,
color:"#861D32",
backgroundColor:"#FFD7A7",
padding:10,
borderWidth:0
},
logInButton:{
    backgroundColor: '#FFB685',
    paddingVertical: 15,
    paddingHorizontal: 150,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#5e5533',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
