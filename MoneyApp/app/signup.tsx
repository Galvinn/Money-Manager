import { useState } from "react";
import {Text, StatusBar,SafeAreaView,StyleSheet,TextInput, Pressable} from "react-native";
// import { Text, View } from "react-native";

export default function Index() {
  const [name,setName]=useState("")
  const [password,setPassword]=useState("")
  const [rePassword,setRePassword]=useState("")
 return (
  <SafeAreaView
     style={styles.container}>
       <Text style = {styles.mainText}>User Name</Text>
       <TextInput style={styles.inputText} value={name} onChangeText={setName}/>

       <Text style = {styles.mainText}>Password</Text>
       <TextInput style={styles.inputText} value={password} onChangeText={setPassword}/>

       <Text style = {styles.mainText}>Re-password</Text>
       <TextInput style={styles.inputText} value={rePassword} onChangeText={setRePassword}/>

      <Pressable onPress={()=>console.log("Register pressed")}>

       <Text style = {styles.signUp}>Register</Text>
      </Pressable>
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
    color:"#AA8422",
    padding:5
  },
  inputText:{
  height:40,
  margin: 2,
  color:"#861D32",
  backgroundColor:"#EBD499",
  padding:10,
  borderWidth:0
  },
  signUp:{
    fontSize:40,
    // color:"#A5243D",
    color:"#F2E3BC",
    textAlign:"center",
    height:50,
    margin :100,
    backgroundColor:"#AA8422",
  }
  })
  