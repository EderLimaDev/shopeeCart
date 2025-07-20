import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const cartList = document.getElementById("cart-list");
const submitButton = document.getElementById("submit-button");
const totalAmount = document.getElementById("total-amount");

const cart = [];
// const myWishList = [];


// Adiciona o evento de clique ao botão de envio
// Isso será executado quando o usuário clicar no botão "Adicionar ao Carrinho"
submitButton.addEventListener("click", async (event) => {
    event.preventDefault(); 
    const itemName = document.getElementById("item-name").value;
    const itemQuantity = parseInt(document.getElementById("item-quantity").value, 10);
    const itemPrice = parseFloat(document.getElementById("item-price").value);
    const newItem = await createItem(itemName, itemPrice, itemQuantity);
    await cartService.addItemToCart(cart, newItem);
    await cartService.displayCart(cart);

    //Limpa os campos do formulário após adicionar o item
    document.getElementById("item-name").value = "";
    document.getElementById("item-quantity").value = "";
    document.getElementById("item-price").value = "";
    // Atualiza a lista de itens no HTML
    updateCartList();
});


// Função para atualizar a lista de itens no HTML
function updateCartList() {
    cartList.innerHTML = ""; // Limpa a lista atual
    cart.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
                <span class="item-name">${index + 1}. ${item.name}</span>
                <span class="item-price">R$ ${item.price.toFixed(2)}</span>
                <div class="item-quantity-controls">
                    <button class="quantity-decrease">-</button>
                    <span class="item-quantity">${item.quantity}</span>
                    <button class="quantity-increase">+</button>
                </div>
                <span class="item-subtotal">${item.subtotal().toFixed(2)}</span>
        `;
        cartList.appendChild(listItem);
    
    });
     addDecreaseButtonListeners();
     addIncreaseButtonListeners();
     totalAmount.innerHTML = "R$ " + cart.reduce((total, item) => total + item.subtotal(), 0).toFixed(2);
}

// Função para adicionar o evento de clique aos botões de diminuição de quantidade
function addDecreaseButtonListeners() {
    const decreaseButtons = document.querySelectorAll(".quantity-decrease");
    decreaseButtons.forEach((button, index) => {
        button.addEventListener("click", async () => {
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1; 
                cart[index].subtotal = () => cart[index].price * cart[index].quantity; // Atualiza o subtotal         
            } else {
                cart.splice(index, 1);
            }
            updateCartList();

        });
    });
}

// Função para adicionar o evento de clique aos botões de aumento de quantidade
function addIncreaseButtonListeners() {
    const increaseButtons = document.querySelectorAll(".quantity-increase");
    increaseButtons.forEach((button, index) => {
        button.addEventListener("click", async () => {
            if (cart[index].quantity >= 1) {
                cart[index].quantity += 1; 
                cart[index].subtotal = () => cart[index].price * cart[index].quantity; // Atualiza o subtotal    
            } 
            updateCartList();
        });
    });
}




// const item1 = await createItem("Hotweels Ferrari", 10.00, 1);
// const item2 = await createItem("Hotweels Lamborgini", 39.99, 3);


// await cartService.addItemToCart(cart, item1);
// await cartService.addItemToCart(cart, item2); 



await cartService.removeItemFromCart(cart, item2);


await cartService.calculateCartTotal(cart);

