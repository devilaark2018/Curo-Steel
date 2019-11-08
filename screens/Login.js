import React from 'react'
import styles from '../app_styles/styles'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Text, Image, View, TextInput, TouchableOpacity, Dimensions, ImageBackground, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView,ActivityIndicator} from 'react-native';
import { Card } from 'react-native-elements';
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import Images from "../app_imgs/Images";
//import { Font } from "expo";
import { loadCustomFont } from '../actions/fontloader'

import * as Font from "expo-font";
const { width, height } = Dimensions.get("screen");
const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress = {()=>{Keyboard.dismiss();}}>
        {children}
    </TouchableWithoutFeedback>
);
class Login extends React.Component {
    state = {
        fontLoaded: false,
        controls: {
            email: {
                value: ""
            },
            password: {
                value: ""
            }
        }
    }

    updateControlState = (key, value) => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    [key]: {
                        ...prevState.controls[key],
                        value: value
                    }
                }
            };
        });
    }

    async componentDidMount() {

        await Font.loadAsync({
            "SFUIDi_bold": require("../assets/font/SFUIDisplay-Bold.ttf"),
            "SFUIDi_thin": require("../assets/font/SFUIDisplay_thin.ttf"),
            "SFUIDi_light": require("../assets/font/SFUIDisplay-Light.ttf"),
            "SFUIDi_medium": require("../assets/font/SFUIDisplay-Medium.ttf"),
            "SFUIDi_regular": require("../assets/font/SFUIDisplay-Regular.ttf"),
            "SFUIDi_semibold": require("../assets/font/SFUIDisplay-Semibold.ttf"),
            "SFPro_bold": require("../assets/font/SFProText-Bold.ttf"),
            "SFPro_medium": require("../assets/font/SFProText-Medium.ttf"),
            "SFPro_semibold": require("../assets/font/SFProText-Semibold.ttf"),
            "SFPro_regular": require("../assets/font/SFProText-Regular.ttf"),
            "Raleway_bold": require("../assets/font/Raleway-Bold.ttf")
        });
        // this.setState({
        //     fontLoaded: true,
        // });
        this.props.loadCustomFont();
    }
    
    render(){
        return(
        // <View flex middle>
        <DismissKeyboard>
            <KeyboardAvoidingView behavior="padding">
                
            <ImageBackground source={Images.BackgroundImg} 
                style={{ width:'100%', height:'100%' }}>
                {this.props.fontLoaded?(
                    
                <View style={[styles.container_no_bg]}>
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
                            containerStyle={{borderRadius:5,borderWidth:0,backgroundColor:'#f7fafc',elevation:3,shadowColor:"gray",shadowOffset:{ height: 1, width: 0 }}}
                            title="Login Information"
                            titleStyle={{textAlign:'left',fontFamily:'Raleway_bold'}} >
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
                            <TouchableOpacity 
                                style={[styles.button,styles.buttonPrimary]} 
                                onPress={this.userloginhandler}>
                                <Text style={{color:'white', fontFamily:'Raleway_bold'}}>LOGIN</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={[styles.button,styles.buttonSecondary]} 
                                onPress={this.userloginhandler}>
                                <Text style={{color:'white', fontFamily:'Raleway_bold'}}>CANCEL</Text>
                            </TouchableOpacity>
                        </Card>
                    </View>
                </View> ) : (
                    <ActivityIndicator size="large"/>
                )}
                
            </ImageBackground>
            
            </KeyboardAvoidingView>
        </DismissKeyboard>
      );
    }
      
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadCustomFont }, dispatch)
}
const mapStateToProps = (state) => {
    return {
        fontLoaded: state.fontReducer.fontLoaded
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Login)
//export default Login