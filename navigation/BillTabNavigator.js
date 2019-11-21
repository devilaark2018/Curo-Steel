import React from 'react';
// import BillBoard from '../screens/Billboard'
// import BillScan from '../screens/BillScan'
import Icon from '@expo/vector-icons/Ionicons'

import BillSearchStackNavigator from './BillSearchStackNavigator';
import BillScanStackNavigator from './BillScanStackNavigator';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import {TouchableOpacity} from 'react-native'

const BillBoardTabNavigator = createBottomTabNavigator({
    Search: {
      screen: BillSearchStackNavigator,
      navigationOptions: {
        tabBarLabel:"Search",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search" size={25} color={tintColor} />
        )
      }
    },
    Scan: {
      screen: BillScanStackNavigator,
      navigationOptions: {
        tabBarLabel:"Scan",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-qr-scanner" size={25} color={tintColor} />
        )
      }
    }
},{
    order: ['Search', 'Scan'],
    tabBarOptions: {
      activeTintColor: '#f47532',
      inactiveTintColor: '#525f7f',
      showIcon: true,
      style: {
        backgroundColor: 'white',
      }
    },
  }
);

export default createAppContainer(BillBoardTabNavigator);
