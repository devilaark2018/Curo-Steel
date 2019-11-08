import { combineReducers } from 'redux'

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
    progressDlgReducer
})
export default rootReducer