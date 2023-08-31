import './css/Checkout.css'
import { useState } from 'react'

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const[email2, setEmail2] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email, email2
        }

        onConfirm(userData)
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
          <form onSubmit={handleConfirm} className='Form'>
            <div className='text-center mb-4'>
             <h2 className='mb-3'>Checkout</h2>
            </div>
            <label className='Label'>
              Nombre
              <input
                className='Input form-control'
                type='text'
                value={name}
                required
                onChange={({ target }) => setName(target.value)}
                placeholder='Ingrese su nombre completo'
              />
            </label>
            <label className='Label'>
              Telefono
              <input
                className='Input form-control'
                type='text'
                value={phone}
                required
                onChange={({ target }) => setPhone(target.value)}
                placeholder='Ingrese su numero de telefono'
              />
            </label>
            <label className='Label'>
              Email
              <input
                className='Input form-control'
                type='email'
                value={email}
                required
                onChange={({ target }) => setEmail(target.value)}
                placeholder='Ingrese su email'
              />
            </label>
            <label className='Label'>
              Confirmar Email
              <input
                className='Input form-control'
                type='email'
                value={email2}
                required
                onChange={({ target }) => setEmail2(target.value)}
                placeholder='confirme su email'
              />
            </label>
            <div className='Lebel'>
            <button type='submit' className='Button btn btn-primary'>
              Crear Orden
            </button>
            </div>
          </form>
        </div>
    );    
};
    

export default CheckoutForm