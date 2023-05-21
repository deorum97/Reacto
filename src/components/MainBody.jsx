import React from "react";
import { StyleSheet, View,Text } from "react-native";
import Constants from 'expo-constants';
import theme from "../theme";
import AlarmsList from "./AlarmsList";

const MainBody=()=>{
    return (
        <View style={{flex:1}}>
            <View>
                <AlarmsList />
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
})

export default MainBody