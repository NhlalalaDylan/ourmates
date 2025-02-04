import React, { useContext } from "react";
import { Dimensions } from "react-native";
import { ThemeContext } from "styled-components/native";
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { Feather, MaterialCommunityIcons  } from "@expo/vector-icons";
import { SceneName } from "../@types/SceneName";
import Notifications from "./Notifications";
import Messages from "./Messages"; 
import Swipe from "./Swipe"; 
import Account from "./Account";
import UserAccount from "./UserAccount";
import Authentication from "./Authentication";



const Tab = createBottomTabNavigator ();
const Stack = createStackNavigator(); 

const Tabs = () => {
  const themeContext = useContext(ThemeContext) ; 

  return (
    <Tab.Navigator
     screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: themeContext?.colors.text,
     }}
     initialRouteName={SceneName.Swipe}
    >
      <Tab.Screen 
       name={SceneName.Swipe} 
       component={Swipe} 
       options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
          tabBarShowLabel: false,
          
        }
       }
       />
       <Tab.Screen 
       name={SceneName.Notifications} 
       component={Notifications} 
       options={{
          tabBarIcon: ({ color }) => (
            <Feather name="heart" size={24} color={color} style={{ transform: [{ rotate: '180deg' }] }} />
          ),
          tabBarShowLabel: false,
          
        }
       }
       />
      <Tab.Screen
       name={SceneName.Messages} 
       component={Messages} 
       options={{
          tabBarIcon: ({ color }) => (
            <Feather name="message-circle" size={24} color={color} />
          ),
          tabBarShowLabel: false
       }}
       />
       
       <Tab.Screen
       name={SceneName.EditAccount} 
       component={Account} 
       options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-outline" size={26} color={ color } />
          ),
          tabBarShowLabel: false
       }}
       />
      
    </Tab.Navigator>
  );
};

function Router(){
  const theme = useContext(ThemeContext);
  return(
    <Stack.Navigator
    initialRouteName={SceneName.Authentication}
    screenOptions={{
      headerShown: false,
      headerBackTitle: "Back",
      headerTitleAlign: "center",
      cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
    }}
    >
    <Stack.Group>
      <Stack.Screen name = {SceneName.Main} component={Tabs}  />
      <Stack.Screen name={SceneName.UserAccount} component={UserAccount} />
    </Stack.Group>
    <Stack.Group>
      <Stack.Screen name={SceneName.Authentication} component={Authentication} />
    </Stack.Group>
    </Stack.Navigator>
  );
}

export default Router;
