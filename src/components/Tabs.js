import React from 'react'
import '../css/Tabs.css'
import Carousel from './Carousel'

const Tabs = () => {
    return (
        <table id="tabs">
            <thead>
                <tr>
                    <td>Recomendado</td>
                    <td>Passeios</td>
                    <td>Hospedagem</td>
                    <td>Passagens</td>
                    <td>Restaurantes</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan="6">
                        <Carousel />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
export default Tabs