import React, { Component } from 'react'
import Icon from '@expo/vector-icons/Ionicons'
import Orders from '../screens/Orders';
import OrderDetails from '../screens/OrderDetails';
import {createStackNavigator,createAppContainer} from 'react-navigation';

const OrderStackNavigator = createStackNavigator({
    Order: {screen: Orders},
    OrderDetails: {screen: OrderDetails}
},{
    defaultNavigationOptions:({navigation})=>{
        return{
            headerLeft:<Icon name="md-menu" onPress={()=>navigation.openDrawer()} style={{paddingLeft:10,color:"#f47532"}} size={30}/>,
            headerRight:<Icon name="md-walk"  style={{paddingRight:10,color:"#f47532"}} size={30}/>
        }
    }
});

export default createAppContainer(OrderStackNavigator);