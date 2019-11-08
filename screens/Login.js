import React from 'react'
import styles from '../app_styles/styles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Text, Image, View, TextInput, TouchableOpacity, Dimensions, ImageBackground, KeyboardAvoidingView} from 'react-native';
import { Card } from 'react-native-elements';
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import Images from "../app_imgs/Images";
//import { Font } from "expo";
import * as Font from "expo-font";
const { width, height } = Dimensions.get("screen");
class Login extends React.Component {
    state = {
        fontLoaded:false,
        controls:{
          email:{
            value:""
          },
          password:{
            value:""
          }
        }
      }
    
      updateControlState = (key,value)=>{
        this.setState(prevState => {
          return {
            controls:{
              ...prevState.controls,
              [key]: {
                ...prevState.controls[key],
                value:value
              }
            }
          };
        });
      }
    //   constructor(){
    //     super();
    //     this.state = {
    //       fontLoaded:false
    //     };
    //   }
    
      async componentDidMount(){
              
        await Font.loadAsync({
          "SFUIDi_bold" : require("../assets/font/SFUIDisplay-Bold.ttf")
        });
        this.setState({
          fontLoaded: true,
        });
    }
    //   async componentDidMount(){
          
    //       await Font.loadAsync({
    //         "SFUIDi_bold" : require("../assets/font/SFUIDisplay-Bold.ttf")
    //       });
    //   }
    render(){
        return(
        // <View flex middle>
        <KeyboardAvoidingView behavior="padding">
          {/* <ImageBackground source={Images.BackgroundImg} 
            style={{ width:'100%', height:'100%' }}> */}
            <View style={{ width:'100%', height:'100%' }}>
              <View style={[styles.container_no_bg,{backgroundColor:'#f7fafc'}]}>
                <View style={{flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-start',
                }}>
                <Image source={Images.app_logo_Img} style={{width:200,marginTop:50
                  }} resizeMode='contain'/>  
                </View>
                <View style={{flex: 2,
                alignItems: 'center',
                justifyContent: 'flex-start',
                marginTop:15}}>
              <Card 
                containerStyle={{borderRadius:5,borderWidth:0,backgroundColor:'#faf7eb',elevation:3,shadowColor:"gray",shadowOffset:{ height: 1, width: 0 }}}
                title="Login Information"
                titleStyle={{textAlign:'left'}} >
                <TextInput
                  style={styles.textInputBox}
                  // value={this.props.user.email}
                  // onChangeText={input => this.props.updateEmail(input)}
                  value={this.state.controls.email.value}
                  onChangeText={(val) => this.updateControlState('email',val)}
                  placeholder='Email'
                  placeholderTextColor='#262626'
                />
                <TextInput
                  style={styles.textInputBox}
                  // value={this.props.user.password}
                  // onChangeText={input => this.props.updatePassword(input)}
                  value={this.state.controls.password.value}
                  onChangeText={(val) => this.updateControlState('password',val)}
                  placeholder='Password'
                  placeholderTextColor='#262626'
                  secureTextEntry={true}
                />
                </Card>
              <TouchableOpacity 
                style={[styles.button,{backgroundColor:'#f47532',shadowColor: '#000000',shadowOffset: {width: 0,height: 3},shadowRadius: 10,shadowOpacity: 0.25,}]} 
                onPress={this.userloginhandler}>
                {/* // onPress={() => this.props.login()}> */}
                {this.state.fontLoaded?(
                    <Text style={{color:'white', fontFamily:'SFUIDi_bold'}}>Login</Text>
                ):(
                    <Text style={{color:'white'}}>Login</Text>
                )
                }
                
              </TouchableOpacity>
              
              <View style={{height:20,width:width * .8}}>
              <View style={{marginTop:20,flex: 1, flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    width:"35%",
                    height:2
                  }}></View>
                  <View style={{height:20,marginLeft:"3%",marginRight:"3%"}}>
                  <Text style={{color:"black"}}>
                    OR
                  </Text>
                  </View>
                  <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    width:"35%",
                    height:2
                  }}></View>
              </View>
              </View>
              <TouchableOpacity style={[styles.button,{backgroundColor:'#f47532',shadowColor: '#000000',shadowOffset: {width: 0,height: 3},shadowRadius: 10,shadowOpacity: 0.25,}]} onPress={() => this.props.navigation.navigate('SignupSelect')}>
                <Text style={{color:'#ffffff'}}>Signup</Text>
              </TouchableOpacity>
              </View>
            </View>
            </View>
          {/* </ImageBackground> */}
        </KeyboardAvoidingView>
      );
    }
      
}

// const mapStateToProps = (state) => {
//     return {
//       user: state.user
//     }
//   }
  
//   export default connect(mapStateToProps, null)(Login)
export default Login