import * as Font from "expo-font";

export const loadCustomFont = () =>{
    return async(dispatch) => {
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
        //console.log("test");
        dispatch({type:'FONT_LOADED',payload:''});
    }
}