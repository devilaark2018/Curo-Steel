const initialState = {
    clients: [],
    clientLoaded: false
}
const clientReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'LOAD_CLIENTLIST':
            return {
                ...state,
                clients:action.clients,
                clientLoaded:true
            };
        case 'CLEAR_CLIENTLIST':
            return {
                ...state,
                clients:[],
                clientLoaded:false
            };
        default:
            return state;
    }
}
export default clientReducer;