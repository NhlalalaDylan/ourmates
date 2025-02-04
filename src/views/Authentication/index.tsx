import React , { useState , useContext } from "react";  
import { View , Text, KeyboardAvoidingView, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemeContext } from "styled-components/native";
import { Container, TopCard } from "./styles";

export default function Authentication(){
    const themeContext  = useContext(ThemeContext);
    return(
        <Container>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{ flexGrow: 1 }}
            >
            <StatusBar style={themeContext?.dark ? "light" : "dark"} />
            
            <Text style={{color:themeContext?.colors.text}}>Hello THERE I'm here for you</Text>
            </KeyboardAvoidingView>
        </Container>
    );
}