const INITIAL_STATE = {
    currentUser: null,
    
}

const userReducer = (state = INITIAL_STATE, action) =>  {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            // console.log(currentUser)
            return {
                ...state,
                currentUser: action.payload,
                
            }
        case 'LOG_OUT':
            // console.log(currentUser)
            return {
                ...state,
                currentUser: action.payload, 
            }
        default:
            return state;    
    }
}

export default userReducer;