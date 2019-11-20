import React, { Component } from 'react'
import Icon from '@expo/vector-icons/Ionicons'
import {View} from 'react-native'
import Orders from '../screens/Orders';
import OrderDetails from '../screens/OrderDetails';
import {createStackNavigator,createAppContainer} from 'react-navigation';

const OrderStackNavigator = createStackNavigator({
    Order: {screen: Orders,
        navigationOptions:{
            title: 'Orders'
        }},
    OrderDetails: {
        screen: OrderDetails,
        navigationOptions: ({navigation})=>({
            title: 'Order Details',
            headerLeft: <View style={{flexDirection: "row",justifyContent: "flex-start",width: 60}}>
                <Icon name="md-arrow-back" onPress={()=>navigation.goBack()} style={{paddingLeft:10,color:"#f47532"}} size={30}/>
                <Icon name="md-menu" onPress={()=>navigation.openDrawer()} style={{paddingLeft:10,color:"#f47532"}} size={30}/>
            </View>,
        })
    }
},{
    defaultNavigationOptions:({navigation})=>{
        return{
            headerLeft:<Icon name="md-menu" onPress={()=>navigation.openDrawer()} style={{paddingLeft:10,color:"#f47532"}} size={30}/>,
            headerRight:<Icon name="md-walk"  style={{paddingRight:10,color:"#f47532"}} size={30}/>
        }
    }
});

export default createAppContainer(OrderStackNavigator);