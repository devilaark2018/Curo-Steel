import React from 'react';
import styles from '../app_styles/styles';
import { Text, FlatList, Image, View, TextInput, TouchableOpacity, Dimensions, ImageBackground, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView,ActivityIndicator} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import {StyleSheet} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons'
import Images from "../app_imgs/Images";
// import { Icon } from 'react-native-vector-icons/Icon';
const { width, height } = Dimensions.get("screen");


const dataOrders = [
    {
        id: "1",
        serialno: "56",
        clientname: "ISGEC Titan Metal Fabricators Pvt Ltd",
        createdate: "12 DEC 2019",
        deliverydate: "12 JAN 2020",
        pno: "C04/568789",
        penality:"YES",
        status:"In Process",
        assigned:"SUNIL"
    },
    {
        id: "2",
        serialno: "56",
        clientname: "ISGEC Titan Metal Fabricators Pvt Ltd",
        createdate: "12 DEC 2019",
        deliverydate: "12 JAN 2020",
        pno: "C04/568789",
        penality:"YES",
        status:"In Process",
        assigned:"SUNIL"
    },
    {
        id: "3",
        serialno: "56",
        clientname: "ISGEC Titan Metal Fabricators Pvt Ltd",
        createdate: "12 DEC 2019",
        deliverydate: "12 JAN 2020",
        pno: "C04/568789",
        penality:"YES",
        status:"In Process",
        assigned:"SUNIL"
    },
    {
        id: "4",
        serialno: "56",
        clientname: "ISGEC Titan Metal Fabricators Pvt Ltd",
        createdate: "12 DEC 2019",
        deliverydate: "12 JAN 2020",
        pno: "C04/568789",
        penality:"YES",
        status:"In Process",
        assigned:"SUNIL"
    },
    {
        id: "5",
        serialno: "56",
        clientname: "ISGEC Titan Metal Fabricators Pvt Ltd",
        createdate: "12 DEC 2019",
        deliverydate: "12 JAN 2020",
        pno: "C04/568789",
        penality:"YES",
        status:"In Process",
        assigned:"SUNIL"

    }];



class Orders extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loading: false,
            data: dataOrders,
            error: null,
            refreshing: false
          };
      
        this.arrayholder = dataOrders;
    }

    _gotoDetail(){
        //ClientDetails
        this.props.navigation.navigate('OrderDetails');
    }

    _Itemrender ( item ) {
        return (
            <TouchableOpacity onPress={()=>{this._gotoDetail()}} style={[{backgroundColor:'white',padding: 6,alignItems: 'center',justifyContent:'center', width:width,borderBottomColor:'#525f7f',borderBottomWidth:2}]}>
                <View style={{flex: 1,padding: 3,flexDirection: 'row',alignItems: 'center',flexWrap: 'nowrap', justifyContent: 'space-between',width:width}}>
                    {/* <View style={{flex: 1,padding: 3,flexDirection: 'column',alignItems: 'center'}}>
                        <Image source={Images.BackgroundImg} style={{height: 40,width: 40,borderRadius: 20}} />
                    </View> */}
                    <View style={{flex: 5,padding: 6,flexDirection: 'column',alignItems: 'flex-start'}}>
                        <Text style={{marginLeft: 3,fontSize: 14,color:"#525f7f"}}>{item.clientname}</Text>
                        <Text style={{marginLeft: 3,fontSize: 15,fontWeight:"bold",color:"#32325d"}}>{item.pno} ({item.serialno})</Text>
                        <Text style={{marginLeft: 3,fontSize: 12,}}>Delivery: {item.deliverydate}</Text>
                        <Text style={{marginLeft: 3,fontSize: 12,}}>Penality: {item.penality} ({item.status})</Text>
                        <Text style={{marginLeft: 3,fontSize: 12,}}>Assigned: {item.assigned}</Text>
                    </View>
                    <View>
                        <Icon name="ios-arrow-forward" size={20} style={{paddingRight:10}}/>
                    </View>
                </View>
            </TouchableOpacity>
        );
      }



    render(){
        return(
            <View style={[tempstyles.container]}>
                <FlatList
                data={this.state.data}
                keyExtractor={item => item.id}
                // renderItem = {({ item }) => <Item title={item.clientname} />}
                renderItem = {({ item }) => this._Itemrender(item) }
                // ListHeaderComponent={this._renderHeader}
                // refreshing = {this.state.refreshing}
                // onRefresh = {this.handleRefresh}
                />

                
            </View>
        )
    }
}

const tempstyles = StyleSheet.create({
    container:{
        flex:1,
        // alignItems:"center",
        // justifyContent:"center",
        backgroundColor:"#F7FAFC"
        // backgroundColor:"#d1d5e1"
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
    //   marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
});

export default Orders