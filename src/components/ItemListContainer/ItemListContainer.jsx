import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch, gFetch2 } from '../../utils/gFetch'
import CardWidget from '../CardWidget/CardWidget'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const {categoriaID} = useParams()

    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/ability/?limit=20&offset=20';
    fetch(url)
        .then((respu) => respu.json())
        .then((data) => {
        setLoading(false)
        setResult(data.results)
        })
        .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        if (categoriaID) {
        gFetch
        .then(resp => setProducts(resp.filter(prod => prod.categoria === categoriaID)))
        .catch(err => console.log(err))
        .finally(() => console.log('Siempre'))
    
    } else (

        gFetch
        .then(resp => setProducts(resp))
        .catch(err => console.log(err))
        .finally(() => console.log('Siempre'))
    )


    }, [categoriaID])

}

function ItemListContainer() {
    return (
        <div>
            <h2 className='Titulo'>CHORDSLAND</h2>
            <h3 className='Subtitulo'>Hacemos realidad tu música</h3>
        </div>
    )
}

export default ItemListContainer