//casos de uso do carrinho de compras
// -> adicionar item ao carrinho
async function addItemToCart(userCart, item) {
    userCart.push(item);

};
// -> remover item do carrinho
async function deleteItemFromCart(userCart, itemName) {
    const index = userCart.findIndex((item) => item.name === itemName);

    
    if (index !== -1) {
        userCart.splice(index, 1);
    
    };

};


// -> remover item do carrinho
async function removeItemFromCart(userCart, item) {

    // Verifica se o item existe no carrinho
    const indexFound = userCart.findIndex((p) => p.name === item.name);


    console.log(userCart, item, indexFound);
    

    // Se o item não for encontrado, exibe uma mensagem
   if (indexFound == -1) {
        console.log(`Item não encontrado: ${item.name}`);
    }

    // Se o item for encontrado, remove uma unidade ou o item inteiro
    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    };

    // Se a quantidade for 1, remove o item inteiro
    if (userCart[indexFound].quantity === 1) {
        userCart.splice(indexFound, 1);
        return;
    };
  


};

async function displayCart(userCart) {
    console.log("\nShopee Cart List: ");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. Item: ${item.name}, Price: R$ ${item.price.toFixed(2)}, Quantity: ${item.quantity}, Subtotal: R$ ${item.subtotal().toFixed(2)}`);
    });
    


};

// -> atualizar quantidade de item no carrinho
async function updateItemQuantity(userCart, index) {

};


// -> calcular total do carrinho
async function calculateCartTotal(userCart) {
    const result = userCart.reduce((total,item) => total + item.subtotal(), 0);
    console.log(`\n Total Cart: R$ ${result.toFixed(2)}`);
    

};


export { addItemToCart, removeItemFromCart, updateItemQuantity, calculateCartTotal, displayCart, deleteItemFromCart };