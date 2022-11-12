import { useEffect } from "react"
import { useState } from "react"





const ItemDetailContainer = () => {
    const {productID} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() =>{
        gFetch2(productID)
        .then(resp => setProduct(resp))
        .catch(err => console.log(err))
        .finally(() => console.log('Siempre'))
    }, [])


    console.log(product)
    return(
        <div>
            <ItemDetail/>
        </div>
    )
}

export default ItemDetailContainer