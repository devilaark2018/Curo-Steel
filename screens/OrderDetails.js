import React, { Component } from 'react'
import { Text,ScrollView, Image, FlatList, View, TextInput, TouchableOpacity, Dimensions, ImageBackground, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView,ActivityIndicator} from 'react-native';
import {StyleSheet} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons'
import Images from "../app_imgs/Images";
import {Card} from 'react-native-elements';
const { width, height } = Dimensions.get("screen");


const item = {
    id: "1",
    serialno: "56",
    clientname: "ISGEC Titan Metal Fabricators Pvt Ltd",
    createdate: "12 DEC 2019",
    deliverydate: "12 JAN 2020",
    pno: "C04/568789",
    penality: "YES",
    status: "In Process",
    priorty: "High",
    assigned: "SUNIL",
    clientSR:[
        {
            SR:"12",
            qty:45,
            dispatch:33
        },
        {
            SR:"13",
            qty:46,
            dispatch:30
        },
        {
            SR:"14",
            qty:49,
            dispatch:33
        }
    ]
}


class OrderDetails extends Component {

    _Itemrender ( item ) {
        return (
            <View  style={[{backgroundColor:'white',padding: 6,alignItems: 'center',justifyContent:'center', width:width,borderBottomColor:'#525f7f',borderBottomWidth:1}]}>
                <View style={{flex: 1,padding: 3,flexDirection: 'row',alignItems: 'center',flexWrap: 'nowrap', justifyContent: 'space-between',width:width}}>
                    <View style={{flex: 5,padding: 6,flexDirection: 'column',alignItems: 'flex-start'}}>
                        <Text style={{marginLeft: 3,fontSize: 14,color:"#525f7f"}}>Serial Number: {item.SR}</Text>
                        <Text style={{marginLeft: 3,fontSize: 12,}}>Qty: {item.qty}</Text>
                        <Text style={{marginLeft: 3,fontSize: 12,}}>Dispatch: {item.dispatch}</Text>
                    </View>
                </View>
            </View>
        );
      }

      _ClientSRrencer( itemlist ){
        if(itemlist){
            return(
                <View style={{backgroundColor:'white',marginTop:6,width:width * .95,height:300,borderRadius:4,borderWidth:1,borderColor:"#d5dbdc",elevation:3,shadowColor:"rgba(255,255,255, .5)",shadowOffset:{ height: 3, width: 0 }}}>
                        <Text style={[tempstyles.txt_disp_lbl,{marginLeft:10,paddingTop:10,paddingBottom:10,fontSize:16}]}>Client Serials</Text>
                        <FlatList
                            style={{borderTopWidth:2,borderTopColor:'#525f7f',}}
                            data={item.clientSR}
                            keyExtractor={item => item.SR}
                            renderItem = {({ item }) => this._Itemrender(item) }
                        />
                    </View>
            );
        }else{
            return (null)
        }
      }




    render() {
        return (
            <ScrollView style={{width:"100%",backgroundColor:"#F7FAFC"}}>
                <View style={tempstyles.container}>
                    <Card containerStyle={{width:width * .95,borderRadius:5,borderColor:"#d5dbdc",borderWidth:1,backgroundColor:'rgba(255,255,255, .9)',elevation:3,shadowColor:"rgba(255,255,255, .5)",shadowOffset:{ height: 3, width: 0 }}}>
                        <View style={{ padding: 4, marginBottom: 3, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={[tempstyles.form_group,{width: '100%'}]}>
                                <Text style={[tempstyles.txt_disp_lbl]}>Name</Text>
                                <Text style={[tempstyles.txt_disp_value]}>{item.clientname}</Text>
                            </View>        
                        </View>
                        <View style={{ padding: 4, marginBottom: 3, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={[tempstyles.form_group,{width: '49%'}]}>
                                <Text style={[tempstyles.txt_disp_lbl]}>PNO</Text>
                                <Text style={[tempstyles.txt_disp_value]}>{item.pno}</Text>
                            </View>
                            <View style={[tempstyles.form_group,{width: '49%'}]}>
                                <Text style={[tempstyles.txt_disp_lbl]}>Serial</Text>
                                <Text style={[tempstyles.txt_disp_value]}>{item.serialno}</Text>
                            </View>                
                        </View>
                        <View style={{ padding: 4, marginBottom: 3, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={[tempstyles.form_group,{width: '49%'}]}>
                                <Text style={[tempstyles.txt_disp_lbl]}>Delivery</Text>
                                <Text style={[tempstyles.txt_disp_value]}>{item.deliverydate}</Text>
                            </View>
                            <View style={[tempstyles.form_group,{width: '49%'}]}>
                            <Text style={[tempstyles.txt_disp_lbl]}>Assigned</Text>
                                <Text style={[tempstyles.txt_disp_value]}>{item.assigned}</Text>
                            </View>        
                        </View>
                        <View style={{ padding: 4, marginBottom: 3, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={[tempstyles.form_group,{width: '32%'}]}>
                                <Text style={[tempstyles.txt_disp_lbl]}>Penality</Text>
                                <Text style={[tempstyles.txt_disp_value]}>{item.penality}</Text>
                            </View>
                            <View style={[tempstyles.form_group,{width: '32%'}]}>
                                <Text style={[tempstyles.txt_disp_lbl]}>Status</Text>
                                <Text style={[tempstyles.txt_disp_value]}>{item.status}</Text>
                            </View>
                            <View style={[tempstyles.form_group,{width: '32%'}]}>
                                <Text style={[tempstyles.txt_disp_lbl]}>Priorty</Text>
                                <Text style={[tempstyles.txt_disp_value]}>{item.priorty}</Text>
                            </View>        
                        </View>
                    </Card>
                    
                    {this._ClientSRrencer(item.clientSR)}         
                </View>
            </ScrollView>
        )
    }
}

const tempstyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        // justifyContent:"center",
        // backgroundColor:"#F7FAFC"
        backgroundColor:"#F7FAFC"
    },
    form_group:{
        flexDirection: 'column', 
        flexWrap: 'nowrap', 
        justifyContent: 'flex-start',
        // width: '100%'
    },
    txt_disp_lbl:{
        paddingBottom:4,
        fontSize: 10, 
        width: '100%', 
        textAlign: 'left', 
        fontWeight: '700', 
        color: '#525f7f'
    },
    txt_disp_value:{
        padding: 8,
        borderColor:'#cad1d7',
        borderRadius:4,
        borderWidth:1,
        fontSize: 13, 
        width: '100%',
        textAlign: 'left', 
        fontWeight: '700', 
        color: '#525f7f'
    }
});
export default OrderDetails
