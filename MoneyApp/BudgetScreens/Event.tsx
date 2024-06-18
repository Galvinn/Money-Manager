import {View, Button,Text, StatusBar,SafeAreaView,StyleSheet,TextInput, Pressable} from "react-native";
import { useState } from "react";

  const Event=()=>{
  return (
    <View style ={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#F2E3BC"/>
        <Text style ={styles.Text}>EventScreen</Text>
    </View>
  );
}
export default Event;
const styles= StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"#F2E3BC",
  paddingTop: StatusBar.currentHeight
},
Text:{
  fontSize:25,
  // color:"#A5243D",
  color:"#AA8422",
  padding:5
}
})