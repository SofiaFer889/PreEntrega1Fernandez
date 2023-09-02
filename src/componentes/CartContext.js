import { createContext, useState } from "react"

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}]) 
        } else {
            console.error('el producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const total = () => {
        let precio = 0
        if (cart.length > 0){
            for (const Item of cart){
                precio += Item.precio*Item.quantity
            }
        }
        return precio
    }

    const totalQuantity = () => {
        let quantity = 0 

        for (const Item of cart){
            quantity += Item.quantity
        }

        return quantity
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, total, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}