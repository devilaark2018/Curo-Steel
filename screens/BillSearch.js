import React from 'react';
import styles from '../app_styles/styles';
import { Text, FlatList, Image, View, TextInput, TouchableOpacity, Dimensions, ImageBackground, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView,ActivityIndicator} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import {StyleSheet} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons'
import Images from "../app_imgs/Images";
// import { Icon } from 'react-native-vector-icons/Icon';
const { width, height } = Dimensions.get("screen");


const dataBills = [
    {
        id: "1",
        clientname: "ISGEC Titan Metal Fabricators Pvt Ltd",
        clientgst: "gstfdfsfsgfdg",
        createdate: "12 DEC 2019",
        pno: "C04/568789"
    },
    {
        id: "2",
        clientname: "ISGEC Titan Metal Fabricators Pvt Ltd",
        clientgst: "gstfdfsfsgfdg",
        createdate: "12 DEC 2019",
        pno: "C04/568789"
    },
    {
        id: "3",
        clientname: "ISGEC Titan Metal Fabricators Pvt Ltd",
        clientgst: "gstfdfsfsgfdg",
        createdate: "12 DEC 2019",
        pno: "C04/568789"
    },
    {
        id: "4",
        clientname: "ISGEC Titan Metal Fabricators Pvt Ltd",
        clientgst: "gstfdfsfsgfdg",
        createdate: "12 DEC 2019",
        pno: "C04/568789"
    },
    {
        id: "5",
        clientname: "ISGEC Titan Metal Fabricators Pvt Ltd",
        clientgst: "gstfdfsfsgfdg",
        createdate: "12 DEC 2019",
        pno: "P04/568789"
    }
];


export default class BillSearch extends React.Component {
    async componentDidMount(){
        // var res = await Network.getIpAddressAsync();
        // var res2 = await Network.getNetworkStateAsync();
        // console.log(res);
        // console.log(res2);
    }
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            data: dataBills,
            error: null,
            refreshing: false
          };
      
        this.arrayholder = dataBills;
    }

    _gotoDetail(){
        //ClientDetails
        this.props.navigation.navigate('BillDetail');
    }

    searchFilterFunction = (text) =>{

        this.setState({
            value: text,
          });
      
          const newData = this.arrayholder.filter(item => {
            const itemData = `${item.clientname.toUpperCase()} ${item.clientgst.toUpperCase()} ${item.pno.toUpperCase()}`;
            const textData = text.toUpperCase();
      
            return itemData.indexOf(textData) > -1;
          });
          this.setState({
            data: newData,
          });

    }

    _renderHeader = () => {
        return ( 
            <SearchBar placeholder = "Search Bills..." containerStyle={{backgroundColor:"#F7FAFC"}} 
            inputContainerStyle={{backgroundColor:"white"}} 
            lightTheme clearIcon={{color:"#f47532"}} 
            searchIcon={{color:"#f47532"}}  
            onChangeText = {(text) => this.searchFilterFunction(text)}
            autoCorrect = {false}
            value={this.state.value}
            />    
        );
    };

    _Itemrender ( item ) {
        return (
            <TouchableOpacity onPress={()=>{this._gotoDetail()}} style={[{backgroundColor:'white',padding: 6,alignItems: 'center',justifyContent:'center', width:width,borderBottomColor:'#525f7f',borderBottomWidth:2}]}>
                <View style={{flex: 1,padding: 3,flexDirection: 'row',alignItems: 'center',flexWrap: 'nowrap', justifyContent: 'space-between',width:width}}>
                    {/* <View style={{flex: 1,padding: 3,flexDirection: 'column',alignItems: 'center'}}>
                        <Image source={Images.BackgroundImg} style={{height: 40,width: 40,borderRadius: 20}} />
                    </View> */}
                    <View style={{flex: 5,padding: 6,flexDirection: 'column',alignItems: 'flex-start'}}>
                        <Text style={{marginLeft: 3,fontSize: 14,color:"#525f7f"}}>{item.clientname}</Text>
                        <Text style={{marginLeft: 3,fontSize: 15,fontWeight:"bold",color:"#32325d"}}>{item.pno}</Text>
                        <Text style={{marginLeft: 3,fontSize: 12,}}>Created: {item.createdate}</Text>
                        <Text style={{marginLeft: 3,fontSize: 12,}}>Gst: {item.clientgst}</Text>
                    </View>
                    <View>
                        <Icon name="ios-arrow-forward" size={20} style={{paddingRight:10}}/>
                    </View>
                </View>
            </TouchableOpacity>
        );
      }


    render() {
        return(
            <View style={[tempstyles.container]}>
                <FlatList
                data={this.state.data}
                keyExtractor={item => item.id}
                // renderItem = {({ item }) => <Item title={item.clientname} />}
                renderItem = {({ item }) => this._Itemrender(item) }
                ListHeaderComponent={this._renderHeader}
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