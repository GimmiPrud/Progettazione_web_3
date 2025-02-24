import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Appearance } from 'react-native'; // per scegliere il tema scuro o chiaro

import { Colors } from '@/constants/Colors';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Stack screenOptions={{headerStyle: {backgroundColor: theme.headerbackground}, headerTintColor: theme.text, headerShadowVisible:false}}>
        <Stack.Screen name="index" options={{title: "Home", headerShown:false}} />
        <Stack.Screen name="maglie" options={{title: "Maglie", headerShown:true, animation:"ios_from_right" ,headerTitle:"Maglie in vendita"}} /> 
        <Stack.Screen name="scarpe" options={{title: "Scarpini", headerShown:true, animation:"ios_from_right" ,headerTitle:"Scarpini in vendita"}} /> 
        <Stack.Screen name="gadget" options={{title: "Accessori", headerShown:true, animation:"ios_from_right" ,headerTitle:"Accessori in vendita"}} /> 
        <Stack.Screen name="+not-found" options={{headerShown: false}} />
      </Stack>
  );
}
