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
                clients_searchlist:action.clients,
                clientLoaded:true
            };
        case 'UPDATE_CLIENTLIST':
            return{
                ...state,
                clients_searchlist:action.clients,
            };
        case 'CLEAR_CLIENTLIST':
            return {
                ...state,
                clients:[],
                clients_searchlist:[],
                clientLoaded:false
            };
        default:
            return state;
    }
}
export default clientReducer;