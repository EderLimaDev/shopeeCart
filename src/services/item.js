//CASOS DE USO

// => CRIAR ITEM COM SUBTOTAL CERTO
async function createItem(name, price, quantity) {
    return {
        name: name,
        price: price,
        quantity: quantity,
        subtotal: () => price * quantity,
    };
};


export default createItem