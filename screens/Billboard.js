import React from 'react';
import styles from '../app_styles/styles';
import { Text, Image, View, TextInput, TouchableOpacity, Dimensions, ImageBackground, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView,ActivityIndicator} from 'react-native';
import {StyleSheet} from 'react-native';


class BillBoard extends React.Component {
    render(){
        return(
            <View style={[tempstyles.container]}>
                <Text>
                    BillBoard
                </Text>
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

export default BillBoard