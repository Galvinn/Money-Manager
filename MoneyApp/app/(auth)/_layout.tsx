// layout will present in every route (we could do a nav bar here)
// Import Stack, and we will import the screen index.tsx to be shown
// (auth) in brackets means we can define root in the folder, since we don't want to show the bottom bar for the login/signup page, we need a separate layout

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect } from "react";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}} />
    </Stack>
  );
}
