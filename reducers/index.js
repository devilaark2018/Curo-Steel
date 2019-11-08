import { combineReducers } from 'redux';
import fontReducer from './fontreducer';
const initialState = {
    dlgDetails:{
      showdlg:false,
      msg:"Please wait...."
    }
}

const progressDlgReducer = (state = initialState, action) =>{
    switch (action.type) {
      case 'SHOW_P_DLG':
        return {
          ...state,
          dlgDetails:action.dlgdetails
        }
      case 'HIDE_P_DLG':
        return {
          ...state,
          dlgDetails:{
            showdlg:false,
            msg:"Please wait...."
          }
        }
      default:
        return state
    }
  }

const rootReducer = combineReducers({
    progressDlgReducer,
    fontReducer
})
export default rootReducer