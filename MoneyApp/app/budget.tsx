import {NavigationContainer} from '@react-navigation/native'
import {View, Button,Text, StatusBar,SafeAreaView,StyleSheet,TextInput, Pressable} from "react-native";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Event from '@/BudgetScreens/Event';
import MonthlyBudget from '@/BudgetScreens/Monthly';
const Tab = createMaterialTopTabNavigator();
export default function login() {
  return (
    //<NavigationContainer>
    <Tab.Navigator screenOptions={{
    tabBarLabelStyle: { fontSize: 12 },
    tabBarItemStyle: { width: 200, height:50 },
    tabBarStyle: { backgroundColor: '#c5b791' },
  }}>
      <Tab.Screen name="event" component={Event} />
      <Tab.Screen name="monthlyBudget" component={MonthlyBudget} />
    </Tab.Navigator>
    //</NavigationContainer>
  );
}