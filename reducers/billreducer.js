const initialState = {
    bills: [],
    billLoaded: false
}
const billReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'LOAD_BILLLIST':
            return {
                ...state,
                bills:action.bills,
                billLoaded:true
            };
        case 'CLEAR_BILLLIST':
            return {
                ...state,
                bills:[],
                billLoaded:false
            };
        default:
            return state;
    }
}
export default billReducer;