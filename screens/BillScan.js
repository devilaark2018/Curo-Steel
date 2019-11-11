import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {StyleSheet} from 'react-native';


class BillScan extends Component {
    render() {
        return (
            <View style={[tempstyles.container]}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
const tempstyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
});

export default BillScan