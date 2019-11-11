import React from 'react';
import {Ionicons} from '@expo/vector-icons'
import BillBoard from '../screens/Billboard'
import BillScan from '../screens/BillScan'
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import {TouchableOpacity} from 'react-native'

const BillBoardTabNavigator = createBottomTabNavigator({
    BillBoard,
    BillScan
},
{
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);

export default createAppContainer(BillBoardTabNavigator);
