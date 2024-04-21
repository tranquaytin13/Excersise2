import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
const DetailsCreen =()=>{
    return(
        <View style={styles.container}>
            <Text>Details Screen</Text>
        </View>
    )
}

export default DetailsCreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})