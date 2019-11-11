import React from 'react';
import {Ionicons} from '@expo/vector-icons'
import BillBoardTabNavigator from '../navigation/BillTabNavigator'
import {createStackNavigator,createAppContainer} from 'react-navigation';
import {TouchableOpacity} from 'react-native'

const BillStackNavigator = createStackNavigator({
    BillBoardTabNavigator: {
        screen: BillBoardTabNavigator
    }
});

export default createAppContainer(BillStackNavigator);