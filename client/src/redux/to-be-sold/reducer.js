import {addGuitar, removeOneGuitar} from './auxFun'

const INITIAL_STATE = {
    guitars: [],
    guitarCost: [],
    total: ''
}


const guitarReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            if(state.guitarCost.length !== 0){
                return {
                    guitars: addGuitar(state.guitars, action.payload),
                    guitarCost: [...state.guitarCost, parseInt(action.payload.guitarCost)],
                    total: state.guitarCost.reduce((total, num) =>(total + num)) + parseInt(action.payload.guitarCost),   
                }
            } else {
                return {
                    guitars: addGuitar(state.guitars, action.payload),
                    guitarCost: [parseInt(action.payload.guitarCost)],
                    total: parseInt(action.payload.guitarCost)
                    }
                }
            
        case 'REMOVE_FROM_CART':
            const newGuitarArr = [...state.guitars]
            const removedGuitarElement = [newGuitarArr.splice(state.guitars.findIndex(el => el.id ===action.payload.id), 1)]
            const newCostArr = [...state.guitarCost]
            const removedCostElement = [newCostArr.splice(state.guitarCost.findIndex(el => el === parseInt(action.payload.guitarCost)), action.payload.quantity)]
            return {
                guitars: newGuitarArr,
                guitarCost: newCostArr,
                total: newCostArr.length !== 0 ? newCostArr.reduce((total, num) =>(total + num)) : null
            }
        case 'REMOVE_ONE_GUITAR':
            const newOneCostRemovedArr = [...state.guitarCost]
            const removedOneCostElement = [newOneCostRemovedArr.splice(state.guitarCost.findIndex(el => el === parseInt(action.payload.guitarCost)), 1)]
            return {
                guitars: removeOneGuitar(state.guitars, action.payload),
                guitarCost: newOneCostRemovedArr,
                total: newOneCostRemovedArr.length !== 0 ? newOneCostRemovedArr.reduce((total, num) =>(total + num)) : null
            }    
        default:
            return state
    }
}

export default guitarReducer

