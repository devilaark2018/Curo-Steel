const initialState = {
    orders: [],
    orderLoaded: false
}
const orderReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'LOAD_ORDERLIST':
            return {
                ...state,
                orders:action.orders,
                orderLoaded:true
            };
        case 'CLEAR_ORDERLIST':
            return {
                ...state,
                orders:[],
                orderLoaded:false
            };
        default:
            return state;
    }
}
export default orderReducer;