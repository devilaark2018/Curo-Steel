import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default styles = StyleSheet.create({
  container_no_bg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_cust_bg:{
    backgroundColor:'#ece8e3'
  },
  container_no_bg_flex_2: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_no_bg_end: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom:15
  },
  container_no_bg_start: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom:15
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row'
  },
  column:{
    flexDirection: 'column'
  },
  // button: {
  //   backgroundColor:'#d3d3d3',
  //   marginTop: 20,
  //   paddingVertical: 10,
  //   alignItems: 'center',
  //   borderColor: '#d3d3d3',
  //   borderWidth: 1,
  //   borderRadius: 5,
  //   width: 200
  // },
  facebookButton: {
    backgroundColor: '#3b5998',
    marginTop: 20,
    paddingVertical: 10,
    alignItems: 'center',
    borderColor: '#3b5998',
    borderWidth: 1,
    borderRadius: 5,
    width: width * .85
  },
  border: {
    // width: '75%',
    backgroundColor:'#ffffff',
    width: width * .8,
    margin: 10,
    padding: 15,
    fontSize: 16,
    // color:'#d3d3d3',
    borderRadius:5,
    color:'#262626',
    borderColor: '#d3d3d3',
    borderBottomWidth: 1,
    // textAlign: 'center'
    textAlign:'left'
  },
  textInputBox:{
    
    backgroundColor:'#ffffff',
    width: width * .8,
    margin: 10,
    marginBottom:5,
    padding: 10,
    fontSize: 14,
    borderRadius:5,
    color:'#262626',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    // textAlign: 'center'
    textAlign:'left',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2
    
  },
  postPhoto: {
    height: 250,
    width: width,
  },
  roundImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 5,
    backgroundColor: '#adadad'
  },
  roundImage_60px: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 5,
    backgroundColor: '#adadad'
  },
  cameraButton: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: '#fff',
    marginBottom: 50
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor:'#d3d3d3',
    borderColor: '#d3d3d3',
    
    // width: 250
    width: width * .85
  },
  buttonPrimary:{
    backgroundColor:'#f47532',
    borderColor: '#f47532',
    borderWidth: 1,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0,height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.55
  },
  buttonSecondary:{
    backgroundColor:'#212529',
    borderColor: '#212529',
    borderWidth: 1,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0,height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.55
  },
  buttonSmall: {
    margin: 10,
    marginBottom: 0,
    padding: 5,
    alignItems: 'center',
    borderColor: '#d3d3d3',
    borderWidth: 1,
    borderRadius: 5,
    width: 125
  },
  btnview: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  home_btn:{
    backgroundColor: '#2E9298',
    // borderRadius: 10,
    padding: 10,

    // marginVertical: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  btnview_action: {
    backgroundColor: '#0691ce',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    width:width * .9
  },
  LocationBox:{
    padding: 10,
    backgroundColor: '#ffffff',
    padding: 10,
    width:width,
    
  },
  switch: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  btnmargin: {
    margin: 10
  },
  LinearGradientStyle: {
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginBottom: 20
  }
});
