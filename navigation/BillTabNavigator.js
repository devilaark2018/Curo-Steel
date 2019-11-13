import React from 'react';
import {Ionicons} from '@expo/vector-icons'
// import BillBoard from '../screens/Billboard'
// import BillScan from '../screens/BillScan'
import BillSearchStackNavigator from './BillSearchStackNavigator';
import BillScanStackNavigator from './BillScanStackNavigator';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import {TouchableOpacity} from 'react-native'

const BillBoardTabNavigator = createBottomTabNavigator({
    Search: {screen: BillSearchStackNavigator},
    Scan: {screen: BillScanStackNavigator}
},{
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);

export default createAppContainer(BillBoardTabNavigator);
