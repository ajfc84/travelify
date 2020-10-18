import React from 'react'
import '../css/Carousel.css'

const products = ['product1', 'product2', 'product3', 'product4', 'product5', 'product6', 'product7', 'product8', 'product9', 'product10', 'product11', 'product12i']

const Carousel = () => {
    return (
        <div className="carousel">
                {
                    products.map( (p) => {
                        return (
                            <div className="image" key={p}>
                                <div className="description">
                                    <span>{p}</span>
                                </div>        
                            </div>
                        )
                    })
                }
        </div>
    )
}
export default Carousel;
