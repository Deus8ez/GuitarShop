export const addGuitar = (guitarDetails) => ({
    type: 'ADD_TO_CART',
    payload: guitarDetails
})

export const removeGuitar = (guitarDetails) => ({
    type: 'REMOVE_FROM_CART',
    payload: guitarDetails
})

export const removeOneGuitar = (guitarDetails) => ({
    type: 'REMOVE_ONE_GUITAR',
    payload: guitarDetails
})

export const addOneGuitar = (guitarDetails) => ({
    type: 'ADD_ONE_GUITAR',
    payload: guitarDetails
})

export const removeOneGuitarPrice = (guitarDetails) => ({
    type: 'REMOVE_ONE_GUITAR_PRICE',
    payload: guitarDetails
})

