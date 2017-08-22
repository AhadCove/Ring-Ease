const userReducer = (state={
    name:null,
    email:null,
    phone:null,
    budget:null,
    so_name:null,
    so_email:null,
    so_phone:null,
    link:null,
}, action) => {
    switch(action.type){
        case 'FRESH_LOGIN':
        console.log("FRESH_LOGIN");
        state={
            ...state,
              
        }
        break;
        default:
            break;
    }
    return state;
};

export default userReducer;