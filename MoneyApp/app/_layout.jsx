
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useEffect } from "react";

export default function rootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}} />
    </Stack>
  );
}
