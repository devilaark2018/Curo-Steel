import env from '../config/env';
import NavigationService from '../utils/NavigationService';
import { AsyncStorage } from 'react-native';



export const getClientList = (data) =>{
    return (dispatch) => {
        dispatch({type:'CLEAR_CLIENTLIST'});
        var inputdata = {
			inputObj:{
				u_id:data.u_id
			}
        };
        fetch(env.rest_url+'client/list',{
			method: "POST",
            body: JSON.stringify(inputdata),
            headers: {
                'Content-Type': 'application/json',
                'arya-token': data.u_token
            }
        })
        .catch(e=>{
			console.log(e);
			alert(e);
        })
        .then(res => res.json())
        .then((parsedRes)=>{
            console.log(parsedRes);
            if(parsedRes.error){
				alert(parsedRes.error['message']);
			}else{
                dispatch(setupClientList(parsedRes.outputObj['list']))
            }
        });
    }
}


export const updateClientList = (clistData)=>{
    console.log("UPDATE_CLIENTLIST");
    console.log(clistData);
    return{type:'UPDATE_CLIENTLIST',clients:clistData};
}

export const setupClientList= (clistData) =>{
    console.log(clistData);
    var items = [];
    clistData.forEach(currentItem => {
        items.push({
            id: currentItem['c_id'],
            clientname: currentItem['c_name'],
            clientgst: currentItem['c_gst'],
            clientBills: currentItem['num_bill'],
            clientSts: currentItem['c_enable'],
            Address:{
                line1:currentItem['c_addr']['line1'],
                line2:currentItem['c_addr']['line2'],
                state:currentItem['c_addr']['state'],
                city:currentItem['c_addr']['city'],
                postal:currentItem['c_addr']['zip'],
                state_code:currentItem['c_addr']['state_code']
            }
        });
    })
    return{type:'LOAD_CLIENTLIST',clients:items};
}
export const authSignIn =  (logindata) =>{
	return (dispatch) => {
		var inputdata = {
			inputObj:{
				email:logindata.email,
				passwd:logindata.password
			}
		};
		fetch(ENV.restDomain+'aja/auth/login',{
			method: "POST",
            body: JSON.stringify(inputdata),
            headers: {
                'Content-Type': 'application/json'
            }
		}).catch(e=>{
			console.log(e);
			alert(e);
		})
		.then(res => res.json())
		.then(async(parsedRes)=>{
			console.log(parsedRes);
			if(parsedRes.errorDTO){
				alert(parsedRes.errorDTO['msg']);
			}else{
			//	NavigationService.navigate('Home');
				if(parsedRes.outputObj.data['login_for'] === 'USER'){
					await AsyncStorage.setItem('Bouncerstore_uid',parsedRes.outputObj.data['id']);
					await AsyncStorage.setItem('Bouncerstore_token',parsedRes.outputObj.data['token']);
					await AsyncStorage.setItem('Bouncerstore_jtoken',parsedRes.outputObj.data['tokenJ']);
					NavigationService.navigate('Home',{user_id:parsedRes.outputObj.data['id'],token:parsedRes.outputObj.data['token']});
				}else{
					await AsyncStorage.setItem('Bouncerstore_uid',parsedRes.outputObj.data['id']);
					await AsyncStorage.setItem('Bouncerstore_token',parsedRes.outputObj.data['token']);
					await AsyncStorage.setItem('Bouncerstore_jtoken',parsedRes.outputObj.data['tokenJ']);
					NavigationService.navigate('VendorHome',{user_id:parsedRes.outputObj.data['id'],token:parsedRes.outputObj.data['token']});
				}
			}
			//dispatch({type:'',payload:parsedRes});
			
		});
	}
}