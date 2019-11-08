const initialState = {
    userDetail: {
        id: "",
        email: "",
        profile_img: "",
        authority: "",
        name: ""
    }
}

const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'INIT_USER':
            return {
                ...state,
                userDetail:action.userInfo
            };
        case 'CLEAR_USER':
            return {
                ...state,
                userDetail:{
                    id: "",
                    email: "",
                    profile_img: "",
                    authority: "",
                    name: ""
                }
            };
        default:
            return state;
    }
}
export default userReducer;