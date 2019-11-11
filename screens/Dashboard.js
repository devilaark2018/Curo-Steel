import React from 'react';
import styles from '../app_styles/styles';
import { Text, Image, View, TextInput, TouchableOpacity, Dimensions, ImageBackground, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView,ActivityIndicator} from 'react-native';
import {StyleSheet} from 'react-native';


class DashBoard extends React.Component {
    render(){
        return(
            <View style={[tempstyles.container]}>
                <Text>
                DashBoard
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

export default DashBoard