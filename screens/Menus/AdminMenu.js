import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import Images from "../../app_imgs/Images";
import { DrawerItems, SafeAreaView } from 'react-navigation';


export default class AdminMenu extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={[{ backgroundColor: "#525f7f" }]}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={Images.app_logo_Img_alt} style={{width:100,marginTop:5}} resizeMode='contain'/>  
                    </View>
                </View>
                
                    <DrawerItems {...this.props}/>
                
            </SafeAreaView>
        )
    }
}
