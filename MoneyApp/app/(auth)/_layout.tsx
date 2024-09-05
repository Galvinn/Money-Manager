// layout will present in every route (we could do a nav bar here)
// Import Stack, and we will import the screen index.tsx to be shown
// (auth) in brackets means we can define root in the folder, since we don't want to show the bottom bar for the login/signup page, we need a separate layout

// Layout files in a directory are used to define shared UI elements such as headers, 
// tab bars so that they persist between different routes.

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

//You have to stack the screen here so that it can be used
export default function AuthLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="login" options={{headerShown:false}} />
        <Stack.Screen name="signup" options={{headerShown:false}} />
      </Stack>

      <StatusBar backgroundColor = "#F2E3BC" />
    </>
  );
}
