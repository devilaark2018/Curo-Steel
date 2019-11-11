import React from 'react';
import {Ionicons} from '@expo/vector-icons'
import DashBoard from '../screens/Dashboard'
import BillStackNavigator from '../navigation/BillStackNavigator'
import {createDrawerNavigator,createAppContainer} from 'react-navigation';
import {TouchableOpacity} from 'react-native'

const AdminDrawNavigator = createDrawerNavigator({
    Billboard : {screen: BillStackNavigator},
    Dashboard : {screen: DashBoard}
});

export default createAppContainer(AdminDrawNavigator);
