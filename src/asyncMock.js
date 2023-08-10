const products =[
    {
        id: '1',
        nombre: 'Remera azul',
        precio: '1000',
        categoria: 'ropa',
        stock: 25,
        imag: 'remeraAzul.jpg',
        descripcion: 'remera 100% algodon color azul'
    },
    {
        id: '2',
        nombre: 'zapatilla deportiva',
        precio: '10000',
        categoria: 'zapatos',
        stock: 25,
        imag: 'zapatillaDeportiva.jpg',
        descripcion: 'zapatilla deportiva talle 38'
    },
    {
        id: '3',
        nombre: 'Collar Infinito',
        precio: '800',
        categoria: 'accesorios',
        stock: 25,
        imag: 'collarInfinito.jpg',
        descripcion: 'Collar de acero quirurjico con dije de infinito'
    },
    {
        id: '4',
        nombre: 'Pulsera Corazon',
        precio: '2000',
        categoria: 'accesorios',
        stock: 25,
        imag: 'pulceraCorazonPurpura.jpg',
        descripcion: 'Collar de plata con dije de corazon en color morado'
    },{
        id: '5',
        nombre: 'Remera D-Day',
        precio: '700',
        categoria: 'ropa',
        stock: 25,
        imag: 'remeraDDay.jpg',
        descripcion: 'Remera con estampado "D-Day" 100% algodon'
    },{
        id: '6',
        nombre: 'Zapatilla Nike',
        precio: '6500',
        categoria: 'zapatos',
        stock: 25,
        imag: 'zapatillaNike.jpg',
        descripcion: 'Zapatillas Nike Air Max Goadone color negro talle 37'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(prod => prod.categoria.toLowerCase() === categoryId.toLowerCase()))
      }, 500)
    })
};