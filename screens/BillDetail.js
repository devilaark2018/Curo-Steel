import React, { Component } from 'react'
import { Animated, Easing, Text, Image, View, TextInput, TouchableOpacity,ScrollView, Dimensions, ImageBackground, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView,ActivityIndicator} from 'react-native';
import {StyleSheet} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons'
import Images from "../app_imgs/Images";
import {Card} from 'react-native-elements';
const { width, height } = Dimensions.get("screen");

const item = {
        id: "2",
        clientname: "ISGEC Titan Metal Fabricators Pvt Ltd",
        invoiceNumber:"2",
        clientAddress:{
            line1:"RAMLILA GROUND",
            line2:"",
            gstin:"dbdfgbdbdbdgb",
            state:"Haryana",
            city:"Yamuna Nagar",
            postal:"135001"
        },
        deliveryAddress:{
            line1:"RAMLILA GROUND",
            line2:"",
            gstin:"fvfdvfdgbgdbdgb",
            state:"Haryana",
            city:"Yamuna Nagar",
            postal:"135001"
        },
        prods:[
            {
                name:"Service 1",
                hsn:"343",
                qty:"1000",
                rate:"2000",
                discount:"0"
            },
            {
                name:"Service 2",
                hsn:"343",
                qty:"1000",
                rate:"2000",
                discount:"0"
            },
            {
                name:"Service 3",
                hsn:"343",
                qty:"1000",
                rate:"2000",
                discount:"0"
            },
            {
                name:"Service 4",
                hsn:"343",
                qty:"1000",
                rate:"2000",
                discount:"0"
            },
            {
                name:"Service 5",
                hsn:"343",
                qty:"1000",
                rate:"2000",
                discount:"0"
            }
        ],
        transMode:"Truck",
        vehicle_no:"HR02-8899",
        place_supply:"Haryana",
        inv_bef_tax:"25048.00",
        cgst_amt:"0.00",
        sgst_amt:"0.00",
        igst_amt:"4508.64",
        tot_gst:"4508.64",
        gst_type:"IGST",
        amt_with_tax:"29556.64",
        amt_in_words:"Twenty Nine Thousand Five Hundred and Fifty Six"
}

class BillDetail extends React.Component {


    constructor(props){
        super(props);
        this.RotateValueHolder = new Animated.Value(0);
    }



    state = {
        Receiver_panel:{
            heightValue: new Animated.Value(0),
            isOpen:false,
            arrow_name:'ios-arrow-forward'
        },
        Consignee_panel:{
            heightValue: new Animated.Value(0),
            isOpen:false,
            arrow_name:'ios-arrow-forward'
        }
        
    };

    _consignee_panel_toggleSlide = () => {
        if(!this.state.Consignee_panel.isOpen){
            //console.log("open");
            Animated.timing(this.state.Consignee_panel.heightValue, {
                toValue: 390,
                duration: 500,
                easing:Easing.linear
              }).start();
              this.setState({
                Consignee_panel:{
                    ...this.state.Consignee_panel,
                    isOpen:true,
                    arrow_name:'ios-arrow-down'
                }
              })
        }else{
            //console.log("close");
            Animated.timing(this.state.Consignee_panel.heightValue, {
                toValue: 0,
                duration: 500,
                easing:Easing.linear
              }).start();
              this.setState({
                Consignee_panel:{
                    ...this.state.Consignee_panel,
                    isOpen:false,
                    arrow_name:'ios-arrow-forward'

                }
              })
        }
    }

    _receiver_panel_toggleSlide = () => {
        console.log("refrefrgfr");
        if(!this.state.Receiver_panel.isOpen){
            //console.log("open");
            Animated.timing(this.state.Receiver_panel.heightValue, {
                toValue: 390,
                duration: 500,
                easing:Easing.linear
              }).start();
              this.setState({
                Receiver_panel:{
                    ...this.state.Receiver_panel,
                    isOpen:true,
                    arrow_name:'ios-arrow-down'
                }
              })
        }else{
            //console.log("close");
            Animated.timing(this.state.Receiver_panel.heightValue, {
                toValue: 0,
                duration: 500,
                easing:Easing.linear
              }).start();
              this.setState({
                Receiver_panel:{
                    ...this.state.Receiver_panel,
                    isOpen:false,
                    arrow_name:'ios-arrow-forward'
                }
              })
        }
        
      };


    render(){
        return(
            <ScrollView style={{width:"100%",backgroundColor:"#F7FAFC"}}>
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
                                <Text style={[tempstyles.txt_disp_lbl]}>Invoice</Text>
                                <Text style={[tempstyles.txt_disp_value]}>{item.invoiceNumber}</Text>
                            </View>        
                        </View>   
                        <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={[tempstyles.form_group,{width: '100%'}]}>
                                <Text style={[tempstyles.txt_disp_lbl]}>Transfer Mode</Text>
                                <Text style={[tempstyles.txt_disp_value]}>{item.transMode}</Text>
                            </View>        
                        </View> 
                        <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={[tempstyles.form_group,{width: '100%'}]}>
                                <Text style={[tempstyles.txt_disp_lbl]}>Vehicle Number</Text>
                                <Text style={[tempstyles.txt_disp_value]}>{item.vehicle_no}</Text>
                            </View>        
                        </View>   
                    </Card>

                    <View style={{backgroundColor:'white',marginTop:6,width:width * .95,borderRadius:4,borderWidth:1,borderColor:"#d5dbdc",elevation:3,shadowColor:"rgba(255,255,255, .5)",shadowOffset:{ height: 3, width: 0 }}}>
                        <TouchableOpacity onPress={()=>this._consignee_panel_toggleSlide()}> 
                            <View style={{flexDirection:"row"}}>
                                <Text style={[tempstyles.txt_disp_lbl,{marginLeft:10,paddingTop:10,paddingBottom:10,fontSize:16,width:"80%"}]}>Detail Of Consignee</Text>
                                <Animated.View style={{width:"20%",justifyContent:"center",alignItems:"center"}}>
                                    <Icon name={this.state.Consignee_panel.arrow_name} size={20} style={{paddingRight:10}}/>
                                </Animated.View>
                            </View>
                        </TouchableOpacity>
                        <Animated.View style={{alignItems:"center",height:this.state.Consignee_panel.heightValue,overflow:"hidden"}}>
                            <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={[tempstyles.form_group,{width: '90%'}]}>
                                    <Text style={[tempstyles.txt_disp_lbl]}>Line 1</Text>
                                    <Text style={[tempstyles.txt_disp_value]}>{item.clientAddress.line1}</Text>
                                </View>        
                            </View>
                            <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={[tempstyles.form_group,{width: '90%'}]}>
                                    <Text style={[tempstyles.txt_disp_lbl]}>Line 2</Text>
                                    <Text style={[tempstyles.txt_disp_value]}>{item.clientAddress.line1}</Text>
                                </View>        
                            </View>
                            <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={[tempstyles.form_group,{width: '90%'}]}>
                                    <Text style={[tempstyles.txt_disp_lbl]}>State</Text>
                                    <Text style={[tempstyles.txt_disp_value]}>{item.clientAddress.state}</Text>
                                </View>        
                            </View>
                            <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={[tempstyles.form_group,{width: '90%'}]}>
                                    <Text style={[tempstyles.txt_disp_lbl]}>City</Text>
                                    <Text style={[tempstyles.txt_disp_value]}>{item.clientAddress.city}</Text>
                                </View>        
                            </View>
                            <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={[tempstyles.form_group,{width: '90%'}]}>
                                    <Text style={[tempstyles.txt_disp_lbl]}>GSTIN</Text>
                                    <Text style={[tempstyles.txt_disp_value]}>{item.clientAddress.gstin}</Text>
                                </View>        
                            </View>
                            <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={[tempstyles.form_group,{width: '90%'}]}>
                                    <Text style={[tempstyles.txt_disp_lbl]}>Postal</Text>
                                    <Text style={[tempstyles.txt_disp_value]}>{item.clientAddress.postal}</Text>
                                </View>        
                            </View>
                        </Animated.View>
                    </View>
                    <View style={{backgroundColor:'white',marginTop:6,width:width * .95,borderRadius:4,borderWidth:1,borderColor:"#d5dbdc",elevation:3,shadowColor:"rgba(255,255,255, .5)",shadowOffset:{ height: 3, width: 0 }}}>
                        <TouchableOpacity onPress={()=>this._receiver_panel_toggleSlide()} >
                            <View style={{flexDirection:"row"}}>
                                <Text style={[tempstyles.txt_disp_lbl,{marginLeft:10,paddingTop:10,paddingBottom:10,fontSize:16,width:"80%"}]}>Detail Of Receiver</Text>
                                <Animated.View style={{width:"20%",justifyContent:"center",alignItems:"center"}}>
                                    <Icon name={this.state.Receiver_panel.arrow_name} size={20} style={{paddingRight:10}}/>
                                </Animated.View>
                            </View>
                        </TouchableOpacity>
                        <Animated.View style={{alignItems:"center",height:this.state.Receiver_panel.heightValue,overflow:"hidden"}}>
                            <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={[tempstyles.form_group,{width: '90%'}]}>
                                    <Text style={[tempstyles.txt_disp_lbl]}>Line 1</Text>
                                    <Text style={[tempstyles.txt_disp_value]}>{item.deliveryAddress.line1}</Text>
                                </View>        
                            </View>
                            <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={[tempstyles.form_group,{width: '90%'}]}>
                                    <Text style={[tempstyles.txt_disp_lbl]}>Line 2</Text>
                                    <Text style={[tempstyles.txt_disp_value]}>{item.deliveryAddress.line1}</Text>
                                </View>        
                            </View>
                            <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={[tempstyles.form_group,{width: '90%'}]}>
                                    <Text style={[tempstyles.txt_disp_lbl]}>State</Text>
                                    <Text style={[tempstyles.txt_disp_value]}>{item.deliveryAddress.state}</Text>
                                </View>        
                            </View>
                            <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={[tempstyles.form_group,{width: '90%'}]}>
                                    <Text style={[tempstyles.txt_disp_lbl]}>City</Text>
                                    <Text style={[tempstyles.txt_disp_value]}>{item.deliveryAddress.city}</Text>
                                </View>        
                            </View>
                            <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={[tempstyles.form_group,{width: '90%'}]}>
                                    <Text style={[tempstyles.txt_disp_lbl]}>GSTIN</Text>
                                    <Text style={[tempstyles.txt_disp_value]}>{item.deliveryAddress.gstin}</Text>
                                </View>        
                            </View>
                            <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={[tempstyles.form_group,{width: '90%'}]}>
                                    <Text style={[tempstyles.txt_disp_lbl]}>Postal</Text>
                                    <Text style={[tempstyles.txt_disp_value]}>{item.deliveryAddress.postal}</Text>
                                </View>        
                            </View>
                        </Animated.View>
                    </View>

                    <View style={{backgroundColor:'white',marginTop:6,width:width * .95,borderRadius:4,borderWidth:1,borderColor:"#d5dbdc",elevation:3,shadowColor:"rgba(255,255,255, .5)",shadowOffset:{ height: 3, width: 0 }}}>
                        <TouchableOpacity onPress={()=>this._receiver_panel_toggleSlide()} >
                            <View style={{flexDirection:"row"}}>
                                <Text style={[tempstyles.txt_disp_lbl,{marginLeft:10,paddingTop:10,paddingBottom:10,fontSize:16,width:"80%"}]}>Payment Details</Text>
                                <Animated.View style={{width:"20%",justifyContent:"center",alignItems:"center"}}>
                                    <Icon name="ios-arrow-down" size={20} style={{paddingRight:10}}/>
                                </Animated.View>
                            </View>
                        </TouchableOpacity>
                        <View style={{alignItems:"center",height:540,overflow:"hidden"}}>
                            <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={[tempstyles.form_group,{width: '90%'}]}>
                                    <Text style={[tempstyles.txt_disp_lbl]}>Invoice Before Tax</Text>
                                    <Text style={[tempstyles.txt_disp_value]}>{item.inv_bef_tax}</Text>
                                </View>        
                            </View>
                            <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={[tempstyles.form_group,{width: '90%'}]}>
                                    <Text style={[tempstyles.txt_disp_lbl]}>Gst Type</Text>
                                    <Text style={[tempstyles.txt_disp_value]}>{item.gst_type}</Text>
                                </View>        
                            </View>
                            <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={[tempstyles.form_group,{width: '90%'}]}>
                                    <Text style={[tempstyles.txt_disp_lbl]}>CGST Amt</Text>
                                    <Text style={[tempstyles.txt_disp_value]}>{item.cgst_amt}</Text>
                                </View>        
                            </View>
                            <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={[tempstyles.form_group,{width: '90%'}]}>
                                    <Text style={[tempstyles.txt_disp_lbl]}>SGST Amt</Text>
                                    <Text style={[tempstyles.txt_disp_value]}>{item.sgst_amt}</Text>
                                </View>        
                            </View>
                            <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={[tempstyles.form_group,{width: '90%'}]}>
                                    <Text style={[tempstyles.txt_disp_lbl]}>IGST Amt</Text>
                                    <Text style={[tempstyles.txt_disp_value]}>{item.igst_amt}</Text>
                                </View>        
                            </View>
                            <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={[tempstyles.form_group,{width: '90%'}]}>
                                    <Text style={[tempstyles.txt_disp_lbl]}>Total GST</Text>
                                    <Text style={[tempstyles.txt_disp_value]}>{item.tot_gst}</Text>
                                </View>        
                            </View>
                            <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={[tempstyles.form_group,{width: '90%'}]}>
                                    <Text style={[tempstyles.txt_disp_lbl]}>Amt After Tax</Text>
                                    <Text style={[tempstyles.txt_disp_value]}>{item.amt_with_tax}</Text>
                                </View>        
                            </View>
                            <View style={{ padding: 4, marginBottom: 5, flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={[tempstyles.form_group,{width: '90%'}]}>
                                    <Text style={[tempstyles.txt_disp_lbl]}>Amt in words</Text>
                                    <Text style={[tempstyles.txt_disp_value]}>{item.amt_in_words}</Text>
                                </View>        
                            </View>
                        </View>
                    </View>



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

export default BillDetail