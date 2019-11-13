import React from 'react';
import Icon from '@expo/vector-icons/Ionicons'
import BillDetail from '../screens/BillDetail';
import BillSearch from '../screens/BillSearch';
import {createStackNavigator,createAppContainer} from 'react-navigation';

const BillSearchStackNavigator = createStackNavigator({
    BillSearch: {screen: BillSearch},
    BillDetail: {screen: BillDetail}
},{
    defaultNavigationOptions:({navigation})=>{
        return{
            headerLeft:<Icon name="md-menu" onPress={()=>navigation.openDrawer()} style={{paddingLeft:10,color:"#f47532"}} size={30}/>,
            headerRight:<Icon name="md-walk"  style={{paddingRight:10,color:"#f47532"}} size={30}/>
        }
    }
});

export default createAppContainer(BillSearchStackNavigator);