const initialState = {
    fontLoaded: false
}

const fontReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'FONT_LOADED':
            return {
                ...state,
                fontLoaded:true
            };
        default:
            return state;
    }
}
export default fontReducer;
