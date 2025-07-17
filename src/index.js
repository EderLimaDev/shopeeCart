import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";


const cart = [];
const myWishList = [];


console.log("Welcome to your Shopee Cart!");



const item1 = await createItem("Hotweels Ferrari", 10.00, 1);
const item2 = await createItem("Hotweels Lamborgini", 39.99, 3);


await cartService.addItemToCart(cart, item1);
await cartService.addItemToCart(cart, item2); 



await cartService.removeItemFromCart(cart, item2);

await cartService.displayCart(cart);


await cartService.calculateCartTotal(cart);
