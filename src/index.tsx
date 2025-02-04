import React, { useMemo } from 'react';
import { registerRootComponent } from 'expo';  
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from "styled-components/native";
import { DefaultTheme, LightTheme, DarkTheme } from "./themes";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./views/index.routes";
import { useColorScheme } from 'react-native';



export default function App(){
    const colorScheme = useColorScheme();
    const theme  = useMemo(() => {
        if(!colorScheme) return DefaultTheme; 
        return colorScheme === "dark" ? DarkTheme : LightTheme;
    },[colorScheme]);
    return(
        <SafeAreaProvider>
            <ThemeProvider theme={theme}>
            <NavigationContainer theme={theme as any}>
                <Router />
            </NavigationContainer>
            </ThemeProvider>
         </SafeAreaProvider>
    );
}


registerRootComponent(App);