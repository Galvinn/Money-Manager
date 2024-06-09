// layout will present in every route (we could do a nav bar here)
// Import Stack, and we will import the screen index.tsx to be shown

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}} />
    </Stack>
  );
}
