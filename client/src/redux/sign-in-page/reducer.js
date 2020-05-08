const INITIAL_STATE = {
    hiddenPage: true,
};

const SignInPageReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'TOGGLE_SIGN_IN_PAGE_HIDDEN':
            return {
                ...state,
                hiddenPage: !state.hiddenPage
            }
        default:
            return state
        }
        
    }
    
export default SignInPageReducer;