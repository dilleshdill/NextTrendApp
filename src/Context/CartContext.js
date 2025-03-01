import react from "react";

const CartContext = react.createContext({
    cartList:[
        {
            id: 1,
            title: "The Alchemist",
            imageUrl: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
            price: 499,
            count: 1
        },
        {
            id: 2,
            title: "Atomic Habits",
            imageUrl: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
            price: 599,
            count: 2
        },
        {
            id: 3,
            title: "Rich Dad Poor Dad",
            imageUrl: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
            price: 399,
            count: 1
        },
        {
            id: 4,
            title: "Deep Work",
            imageUrl: "https://m.media-amazon.com/images/I/81pT3dk1-2L.jpg",
            price: 699,
            count: 3
        }
    ],
    addCartItem:()=>{},
    deleteCartItem:()=>{},
})
export default CartContext;