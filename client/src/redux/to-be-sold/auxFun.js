export const addGuitar = (cartGuitars, guitarToAdd) => {
    const existGuitar = cartGuitars.find(
        guitar => guitar.id === guitarToAdd.id
    );

    if(existGuitar){
        return cartGuitars.map(guitar => 
            guitar.id === guitarToAdd.id
            ? {...guitar, quantity: guitar.quantity + 1}
            : guitar
            )
    }

    return [...cartGuitars, {...guitarToAdd}]
}

export const removeOneGuitar = (cartGuitars, guitarToRemove) => {
    const existGuitar = cartGuitars.find(
        guitar => guitar.id === guitarToRemove.id
    );

    if (existGuitar.quantity === 1){
        return cartGuitars.filter(guitar=> guitar.id !== guitarToRemove.id); 
    }    

    return cartGuitars.map(guitar => 
            guitar.id === guitarToRemove.id
            ? {...guitar, quantity: guitar.quantity - 1}
            : guitar
        )
       
}

