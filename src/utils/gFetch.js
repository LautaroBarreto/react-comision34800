let arrayList =[{
    ID: '1',
    nombre: 'Grabar Canción',
    categoria: 'Producción musical',
    stock: 50,
    precio: 20000,
    foto: '/assets/grabar.png'
},{
    ID: '2',
    nombre: 'Producir tu Canción',
    categoria: ' Producción musical',
    stock: 50,
    precio: 30000,
    foto: '/assets/produccion.png'
},{
    ID: '3',
    nombre: 'Clases',
    categoria: 'Clases',
    stock: '50',
    precio: 3000,
    foto: '/assets/clases.png',
},{
    ID: '4',
    nombre: 'Instrumental',
    categoria: 'Producción musical',
    stock: 100,
    precio: 15000,
    foto: '/assets/instrumentales.png',
}]
export const gFetch = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(arrayList)
    }, 2000);
})
export const gFetch2 = (ID) => {
    return new Promise((resuelto, rechazado) =>{
        setTimeout(() => {
            resuelto(ID ? product.find(item === ID) : product)
        }, 2000)
    })
}