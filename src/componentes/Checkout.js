import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { Timestamp, collection, documentId, getDocs, query, where, writeBatch, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
    const [loading,setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)

    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async ({name, phone, email, email2}) => {
        setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    name, phone, email, email2
                },
                items:cart,
                total:total(),
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)

            const outOfStock= []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const {docs} = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb= dataDoc.stock

                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error('Hay productos que están fuera de stock')
            } 
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h1>Se está generando su orden...</h1>
    }
    if(orderId !== null){
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return (
        <div>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout