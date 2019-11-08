import React from 'react';
import {Ionicons} from '@expo/vector-icons'
import Login from '../screens/Login'
import {createStackNavigator,createAppContainer} from 'react-navigation';
import {TouchableOpacity} from 'react-native'

const StackNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    }
});

export default createAppContainer(StackNavigator);