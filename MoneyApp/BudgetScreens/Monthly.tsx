import {View, Button,Text, StatusBar,SafeAreaView,StyleSheet,TextInput, Pressable} from "react-native";
import { useState } from "react";

  const MonthlyBudget=()=>{
  return (
    <View style ={styles.container}>
        <Text style ={styles.Text}>MonthlyScreen</Text>
    </View>
  );
}
export default MonthlyBudget;
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
