import {Text,View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {Link} from "expo-router";
import React from "react";


export default function App(){
    return(
        <View className="flex-1 items-center justify-center 
        bg-white">
            <Text className ="text-3xl">kuku ebat!</Text>
            <StatusBar style="auto"></StatusBar>
            <Link href="/profile" style={{color:"blue"}}>go to Profile</Link>
        </View>
    )
}
