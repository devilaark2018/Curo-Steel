import React, { Component } from 'react'
import { Text, Image, View, TextInput, TouchableOpacity, Dimensions, ImageBackground, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView,ActivityIndicator} from 'react-native';
import {StyleSheet} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons'
import Images from "../app_imgs/Images";
import {Card} from 'react-native-elements';
const { width, height } = Dimensions.get("screen");

const item = {
        id: "2",
        clientname: "ISGEC Titan Metal Fabricators Pvt Ltd",
        clientgst: "gstfdfsfsgfdg",
        clientBills: 3,
        clientSts:"Enable"

}
class ClientDetails extends Component {
    
    render() {
        //const { citemitem } = this.props.navigation.state.params //for future
        return (
            <View style={tempstyles.container}>
                <Card containerStyle={{width:width * .95,borderRadius:5,borderWidth:1,backgroundColor:'rgba(255,255,255, .9)',elevation:3,shadowColor:"rgba(255,255,255, .5)",shadowOffset:{ height: 3, width: 0 }}}>
                    <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={[tempstyles.form_group,{width: '100%'}]}>
                            <Text style={[tempstyles.txt_disp_lbl]}>Name</Text>
                            <Text style={[tempstyles.txt_disp_value]}>{item.clientname}</Text>
                        </View>        
                    </View>
                    <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={[tempstyles.form_group,{width: '100%'}]}>
                            <Text style={[tempstyles.txt_disp_lbl]}>GST</Text>
                            <Text style={[tempstyles.txt_disp_value]}>{item.clientgst}</Text>
                        </View>        
                    </View>   
                    <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={[tempstyles.form_group,{width: '100%'}]}>
                            <Text style={[tempstyles.txt_disp_lbl]}>Number of Bills</Text>
                            <Text style={[tempstyles.txt_disp_value]}>{item.clientBills}</Text>
                        </View>        
                    </View> 
                    <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={[tempstyles.form_group,{width: '100%'}]}>
                            <Text style={[tempstyles.txt_disp_lbl]}>Status</Text>
                            <Text style={[tempstyles.txt_disp_value]}>{item.clientSts}</Text>
                        </View>        
                    </View>   
                </Card>
            </View>
        )
    }
}

const tempstyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        // justifyContent:"center",
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
        fontSize: 14, 
        width: '100%',
        textAlign: 'left', 
        fontWeight: '700', 
        color: '#000000'
    }
});

export default ClientDetails
