import React from 'react';
import { registerRootComponent } from 'expo';  
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import Router from "./views/index.routes";


export default function App(){

    return(
        <SafeAreaProvider>
            <NavigationContainer>
                <Router />
            </NavigationContainer>
         </SafeAreaProvider>
    );
}


registerRootComponent(App);