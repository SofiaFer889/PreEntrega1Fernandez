const products =[
    {
        id: '1',
        nombre: 'Remera azul',
        precio: '1000',
        categoria: 'ropa',
        stock: 25,
        descripcion: 'remera 100% algodon color azul'
    },
    {
        id: '2',
        nombre: 'zapatilla deportiva',
        precio: '10000',
        categoria: 'zapatos',
        stock: 25,
        descripcion: 'zapatilla deportiva talle 38'
    },
    {
        id: '3',
        nombre: 'Collar Infinito',
        precio: '800',
        categoria: 'accesorios',
        stock: 25,
        descripcion: 'Collar de acero quirurjico con dije de infinito'
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