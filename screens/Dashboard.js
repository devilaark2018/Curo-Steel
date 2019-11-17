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
    },
    {
        id: "3",
        clientname: "ISGEC Titan Metal Fabricators Pvt Ltd",
        clientgst: "gstfdfsfsgfdg",
        clientBills: 3
    },
    {
        id: "4",
        clientname: "ISGEC Titan Metal Fabricators Pvt Ltd",
        clientgst: "gstfdfsfsgfdg",
        clientBills: 3
    },
    {
        id: "5",
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
    
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            data: dataClients,
            error: null,
            refreshing: false
          };
      
        this.arrayholder = dataClients;
    }


    _gotoDetail(){
        //ClientDetails
        this.props.navigation.navigate('ClientDetails')
    }
    

    handleRefresh = () => {
        this.setState({refreshing: true});
        dataClients.push(
            {
                id: "6",
                clientname: "ISGEC Titan Metal Fabricators Pvt Ltd",
                clientgst: "gsstfdfsfsgfdg",
                clientBills: 3
            }
        )
        this.setState({
            data: dataClients,
            refreshing: false
          });
    }

    searchFilterFunction = (text) =>{

        this.setState({
            value: text,
          });
      
          const newData = this.arrayholder.filter(item => {
            const itemData = `${item.clientname.toUpperCase()} ${item.clientgst.toUpperCase()}`;
            const textData = text.toUpperCase();
      
            return itemData.indexOf(textData) > -1;
          });
          this.setState({
            data: newData,
          });

    }

    _renderHeader = () => {
        return ( 
            <SearchBar placeholder = "Search Client..." containerStyle={{backgroundColor:"#F7FAFC"}} 
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
                data={this.state.data}
                keyExtractor={item => item.id}
                // renderItem = {({ item }) => <Item title={item.clientname} />}
                renderItem = {({ item }) => this._Itemrender(item) }
                ListHeaderComponent={this._renderHeader}
                refreshing = {this.state.refreshing}
                onRefresh = {this.handleRefresh}
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