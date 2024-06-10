import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Добавление товара в корзину
    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    // Удаление одного экземпляра товара из корзины
    const removeFromCart = (itemToRemove) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(cartItem => cartItem.id === itemToRemove.id);
            if (existingItem && existingItem.quantity > 1) {
                return prevCart.map(cartItem =>
                    cartItem.id === itemToRemove.id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                );
            } else {
                return prevCart.filter(cartItem => cartItem.id !== itemToRemove.id);
            }
        });
    };

    // Получение общей суммы товаров в корзине
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};

