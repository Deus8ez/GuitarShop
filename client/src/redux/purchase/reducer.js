const INITIAL_STATE = {
    hiddenPurchase: true
}

const purchaseWindow = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'TOGGLE_PURCHASE_HIDDEN':
            return {
                ...state,
                hiddenPurchase: !state.hiddenPurchase
            }
            
        default:
            return state
        }
        
    }
    
export default purchaseWindow;