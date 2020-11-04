import React, { useEffect, useState } from 'react'
import '../css/Carousel.css'
import agenda from '../images/calendar-plus-solid.svg'

const Carousel = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://j2k7xg2i16.execute-api.sa-east-1.amazonaws.com/dev/product')
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
