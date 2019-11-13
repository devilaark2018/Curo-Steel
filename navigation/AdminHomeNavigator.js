import React from 'react';
import {Ionicons} from '@expo/vector-icons'
import DashBoardStackNavigator from './DashBoardStackNavigator'
// import BillStackNavigator from './BillStackNavigator'
import BillTabNavigator from './BillTabNavigator';
import OrderStackNavigator from './OrderStackNavigator'
import {createDrawerNavigator,createAppContainer} from 'react-navigation';
import {TouchableOpacity} from 'react-native'

const AdminDrawNavigator = createDrawerNavigator({
    Dashboard : {screen: DashBoardStackNavigator},
    Billboard : {screen: BillTabNavigator},
    Orders: {screen: OrderStackNavigator},
    
});

export default createAppContainer(AdminDrawNavigator);
