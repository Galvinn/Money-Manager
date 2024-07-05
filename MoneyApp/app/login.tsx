import {Text, StatusBar,SafeAreaView,StyleSheet,TextInput, Pressable} from "react-native";
import { useState } from "react";
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
       <Pressable onPress={()=>console.log("logIn pressed")}>
        <Text style = {styles.logIn}>Log In</Text>
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
logIn:{
  fontSize:40,
  // color:"#A5243D",
  color:"#F2E3BC",
  textAlign:"center",
  height:50,
  margin :100,
  backgroundColor:"#AA8422",
}

})
