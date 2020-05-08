// import {addGuitar, removeOneGuitar} from './auxFun'


// const INITIAL_STATE = {
//     guitars: [],
//     // guitarCost: []
// }

// const guitarReducer = (state = INITIAL_STATE, action) => {
//     switch(action.type){
//         case 'ADD_TO_CART':
//             return {
//                 guitars: addGuitar(state.guitars, action.payload),
//                 // guitarCost: [...state.guitarCost, action.payload]
//             }
//         case 'REMOVE_FROM_CART':
//             const newArr = [...state.guitars]
//             const removedElement = [newArr.splice(state.guitars.findIndex(el => el.id ===action.payload.id), 1)]
//             return {
//                 // guitars: [...state.guitars.filter((guitar) => (guitar !== action.payload))]
//                 guitars: newArr
//             }
//         case 'REMOVE_ONE_GUITAR':
//             return {
//                 guitars: removeOneGuitar(state.guitars, action.payload)
//             }    
//         default:
//             return state
//     }
// }

// export default guitarReducer


import {addGuitar, removeOneGuitar} from './auxFun'


const INITIAL_STATE = {
    guitars: [],
    guitarCost: [],
    total: ''
    // guitarCost: []
}



const guitarReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_TO_CART':
            if(state.guitarCost.length !== 0){
                return {
                    guitars: addGuitar(state.guitars, action.payload),
                    guitarCost: [...state.guitarCost, parseInt(action.payload.guitarCost.replace('$', ''))],
                    total: state.guitarCost.reduce((total, num) =>(total + num)) + parseInt(action.payload.guitarCost.replace('$', '')),   
                }
            } else {
                return {
                    guitars: addGuitar(state.guitars, action.payload),
                    guitarCost: [parseInt(action.payload.guitarCost.replace('$', ''))],
                    total: parseInt(action.payload.guitarCost.replace('$', ''))
                    // guitarCost: [...state.guitarCost, action.payload]
                    }
                }
            
        case 'REMOVE_FROM_CART':
            // console.log(action.payload.quantity)
            const newGuitarArr = [...state.guitars]
            const removedGuitarElement = [newGuitarArr.splice(state.guitars.findIndex(el => el.id ===action.payload.id), 1)]
            const newCostArr = [...state.guitarCost]
            const removedCostElement = [newCostArr.splice(state.guitarCost.findIndex(el => el === parseInt(action.payload.guitarCost.replace('$', ''))), action.payload.quantity)]
            return {
                // guitars: [...state.guitars.filter((guitar) => (guitar !== action.payload))]
                guitars: newGuitarArr,
                guitarCost: newCostArr,
                total: newCostArr.length !== 0 ? newCostArr.reduce((total, num) =>(total + num)) : null
            }
        case 'REMOVE_ONE_GUITAR':
            // const newGuitarArr = [...state.guitars]
            const newOneCostRemovedArr = [...state.guitarCost]
            const removedOneCostElement = [newOneCostRemovedArr.splice(state.guitarCost.findIndex(el => el === parseInt(action.payload.guitarCost.replace('$', ''))), 1)]
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

// const guitarCostReducer = (state = INITIAL_STATE, action) => {
//     switch(action.type){
//         case 'ADD_TO_CART':
//             if(state.guitarCost.length !== 0){
//                 return {
//                     guitarCost: [...state.guitarCost, parseInt(action.payload.guitarCost.replace('$', ''))],
//                     total: state.guitarCost.reduce((total, num) =>(total + num)) + parseInt(action.payload.guitarCost.replace('$', ''))   
//                 }
//             } else {
//             return {
//                 guitarCost: [...state.guitarCost, parseInt(action.payload.guitarCost.replace('$', ''))],
//                 total: parseInt(action.payload.guitarCost.replace('$', ''))    
//             }}
//         case 'REMOVE_ONE_GUITAR_PRICE':
//             const newCostArr = [...state.guitarCost]
//             const removedCostElement = [newArr.splice(state.guitarCost.findIndex(el => el === parseInt(action.payload.guitarCost.replace('$', ''))), 1)]
//             return {
//                 guitarCost: newArr,
//                 total: newArr.length !== 0 ? newArr.reduce((total, num) =>(total + num)) : null
//             }   
//             // removeOneGuitarPrice(state.guitarCost, action.payload)
//         default:
//             return state
//     }
// }