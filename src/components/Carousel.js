import React, { useEffect, useState } from 'react'
import '../css/Carousel.css'
import agenda from '../images/calendar-plus-solid.svg'

// const products = ['product1', 'product2', 'product3', 'product4', 'product5', 'product6', 'product7', 'product8', 'product9', 'product10', 'product11', 'product12i']

const Carousel = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/api/v1/')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => window.alert(error))
    }, [])

    return (
        <div className="carousel">
                {
                    products.map( p => (
                        <div style={{backgroundImage: `url(${p['img_url']})`}} className="image" key={p['id']}>
                            <img src={agenda} id="icon-agenda" title="add to agenda" alt="add to agenda" />
                            <div className="description">
                                <span>{p['name']}</span>
                            </div>        
                        </div>
                    ))
                }
        </div>
    )
}
export default Carousel;
