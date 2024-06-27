import { Redirect, Tabs} from "expo-router";
import { Text, View , Image} from "react-native";
import  Constants  from 'expo-constants';

import { icons } from "../../constants";

// create a function that will display the icon accordingly
const TabIcon = ({icon, color, name, focused}) => {
    return (
        <View className="items-center justify-center gap-0">
            <Image
            source={icon}
            resizeMode="contain"
            className = "w-6 h-6"
            // depends on whether it is focuesed on not, change the color
            style={{
                tintColor: focused ? color : 'black'
            }}
            />
            <Text className="font-psemibold text-xs">
                {name}
            </Text>
        </View>
    )
}

const TabIconAdd = ({icon, color, name, focused}) => {
    return (
        <View className="items-center justify-center gap-0">
            <Image
            source={icon}
            resizeMode="contain"
            // configure the size of the icon
            className = "w-9 h-9"
            // depends on whether it is focuesed on not, change the color
            style={{
                tintColor: focused ? color : 'black'
            }}
            />
        </View>
    )
}

export default function TabsLayout() {
  return (
    <>
      <Tabs
      // do not show the label of the tab on the bottom
        screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle:{
                backgroundColor:"#FFB685"
            }
        }}
      >
        <Tabs.Screen
            name = "overview"
            options={
                {
                    title: 'Overview',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) =>(
                        <TabIcon
                            icon = {icons.overview}
                            color = {color}
                            name = "Overview"
                            focused = {focused}
                        />
                    )
                }
            }
        />
        <Tabs.Screen
            name = "budget"
            options={
                {
                    title: 'Budget',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) =>(
                        <TabIcon
                            icon = {icons.budget}
                            color = {color}
                            name = "Budget"
                            focused = {focused}
                        />
                    )
                }
            }
        />
        <Tabs.Screen
            name = "add"
            options={
                {
                    title: 'Add',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) =>(
                        <TabIconAdd
                            icon = {icons.add}
                            color = {color}
                            name = "Add"
                            focused = {focused}
                        />
                    )
                }
            }
        />
        <Tabs.Screen
            name = "saving"
            options={
                {
                    title: 'Saving',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) =>(
                        <TabIcon
                            icon = {icons.saving}
                            color = {color}
                            name = "Saving"
                            focused = {focused}
                        />
                    )
                }
            }
        />
        <Tabs.Screen
            name = "dashboard"
            options={
                {
                    title: 'Dashboard',
                    headerShown: false,
                    tabBarIcon: ({color, focused}) =>(
                        <TabIcon
                            icon = {icons.dashboard}
                            color = {color}
                            name = "Dashboard"
                            focused = {focused}
                        />
                    )
                }
            }
        />
      </Tabs>
    </>
  );
}