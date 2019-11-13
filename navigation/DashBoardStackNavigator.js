import React from 'react';
import Icon from '@expo/vector-icons/Ionicons'
import DashBoard from '../screens/Dashboard'
import {View} from 'react-native'
import ClientDetails from '../screens/ClientDetails'
import {createStackNavigator,createAppContainer} from 'react-navigation';
import {TouchableOpacity} from 'react-native'

const DashBoardStackNavigator = createStackNavigator({
    DashBoard: {screen: DashBoard},
    ClientDetails: {
        screen: ClientDetails,
        navigationOptions: ({navigation})=>({
            title: 'Client Details',
            headerLeft: <View style={{flexDirection: "row",justifyContent: "flex-start",width: 60}}>
                <Icon name="md-menu" onPress={()=>navigation.openDrawer()} style={{paddingLeft:10,color:"#f47532"}} size={30}/>
                <Icon name="ios-arrow-back" onPress={()=>navigation.goBack()} style={{paddingLeft:10,color:"#f47532"}} size={30}/>
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

export default createAppContainer(DashBoardStackNavigator);