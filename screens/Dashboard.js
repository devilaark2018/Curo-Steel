import React from 'react';
import styles from '../app_styles/styles';
import { Text, FlatList, Image, View, TextInput, TouchableOpacity, Dimensions, ImageBackground, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView,ActivityIndicator} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import {StyleSheet} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons'
import Images from "../app_imgs/Images";
// import { Icon } from 'react-native-vector-icons/Icon';
const { width, height } = Dimensions.get("screen");

const dataClients = [
    {
      id: "1",
      clientname: "ISGEC Heavy Engineering",
      clientgst: "dfdfsfsgfdg",
      clientBills: 2
    },
    {
        id: "2",
        clientname: "ISGEC Titan Metal Fabricators Pvt Ltd",
        clientgst: "gstfdfsfsgfdg",
        clientBills: 3
    }];




    function Item ({ title }) {
        return (
          <View style={[{backgroundColor:'#d9d9d9',padding: 6,alignItems: 'center',justifyContent:'center', width:width,borderBottomColor:'#8E8E8E',borderBottomWidth:1}]}>
            <Text style={styles.title}>{title}</Text>
          </View>
        );
      }

class DashBoard extends React.Component {
    
    _gotoDetail(){
        //ClientDetails
        this.props.navigation.navigate('ClientDetails')
    }
    _Itemrender ( item ) {
        return (
            <TouchableOpacity onPress={()=>{this._gotoDetail()}} style={[{backgroundColor:'white',padding: 6,alignItems: 'center',justifyContent:'center', width:width,borderBottomColor:'black',borderBottomWidth:2}]}>
                <View style={{flex: 1,padding: 3,flexDirection: 'row',alignItems: 'center',flexWrap: 'nowrap', justifyContent: 'space-between',width:width}}>
                    <View style={{flex: 1,padding: 3,flexDirection: 'column',alignItems: 'center'}}>
                        <Image source={Images.BackgroundImg} style={{height: 40,width: 40,borderRadius: 20}} />
                    </View>
                    <View style={{flex: 5,padding: 6,flexDirection: 'column',alignItems: 'flex-start'}}>
                        <Text style={{marginLeft: 3,fontSize: 14,}}>{item.clientname}</Text>
                        <Text style={{marginLeft: 3,fontSize: 12,}}>{item.clientgst}</Text>
                        <Text style={{marginLeft: 3,fontSize: 12,}}>Number of Bills: {item.clientBills}</Text>
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
                data={dataClients}
                keyExtractor={item => item.id}
                // renderItem = {({ item }) => <Item title={item.clientname} />}
                renderItem = {({ item }) => this._Itemrender(item) }
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

export default DashBoard