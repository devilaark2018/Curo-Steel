import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
// import { NetworkInfo } from 'react-native-network-info'
import * as Network from 'expo-network';

export default class BillSearch extends Component {
    async componentDidMount(){
        var res = await Network.getIpAddressAsync();
        var res2 = await Network.getNetworkStateAsync();
        console.log(res);
        console.log(res2);
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
