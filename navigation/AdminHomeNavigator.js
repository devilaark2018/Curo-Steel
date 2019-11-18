import React from 'react';
import {Ionicons} from '@expo/vector-icons'
import DashBoardStackNavigator from './DashBoardStackNavigator'
// import BillStackNavigator from './BillStackNavigator'
import BillTabNavigator from './BillTabNavigator';
import OrderStackNavigator from './OrderStackNavigator'
import {createDrawerNavigator,createAppContainer} from 'react-navigation';
import AdminMenu from '../screens/Menus/AdminMenu';
import { MaterialIcons,Entypo } from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native'

const AdminDrawNavigator = createDrawerNavigator({
    Dashboard : {
        screen: DashBoardStackNavigator,
        navigationOptions:{
            drawerLabel: 'Dashboard',
            drawerIcon: ({ tintColor }) =>  <MaterialIcons name="desktop-windows" size={25} color={tintColor} />
          }
    },
    Billboard : {
        screen: BillTabNavigator,
        navigationOptions:{
            drawerLabel:'Billboard',
            drawerIcon: ({tintColor}) => <Entypo name="pencil" size={25} color={tintColor} />
        }
    },
    Orders: {
        screen: OrderStackNavigator,
        navigationOptions:{
            drawerLabel:'Orders',
            drawerIcon: ({tintColor}) => <Entypo name="archive" size={25} color={tintColor} />
        }
    },
},{
    initialRouteName: "Orders",
    contentComponent: AdminMenu,
    contentOptions: {
    activeTintColor: '#f47532',
    activeBackgroundColor: '#ffffff',
    itemsContainerStyle:{
        marginTop:0,
        
    }
  }
});

export default createAppContainer(AdminDrawNavigator);
