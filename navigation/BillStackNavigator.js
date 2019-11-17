import React from 'react';
import Icon from '@expo/vector-icons/Ionicons'
import BillBoardTabNavigator from './BillTabNavigator'
import {createStackNavigator,createAppContainer} from 'react-navigation';
import {TouchableOpacity} from 'react-native'

const BillStackNavigator = createStackNavigator({
    BillBoardTabNavigator: {screen: BillBoardTabNavigator}
},{
    defaultNavigationOptions:({navigation})=>{
        return{
            headerLeft:<Icon name="md-menu" onPress={()=>navigation.openDrawer()} style={{paddingLeft:10}} size={30}/>,
            headerRight:<Icon name="md-walk"  style={{paddingRight:10}} size={30}/>
        }
    }
});

export default createAppContainer(BillStackNavigator);