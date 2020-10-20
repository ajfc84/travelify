import React from 'react'
import '../css/Agenda.css'

const Agenda = () => {
    return (
        <table id="agenda">
            { /*
            <thead>
                <tr>
                    <td colSpan="6"><h2>Agenda</h2></td>
                    <td>October, 2020</td>
                </tr>
                <tr>
                    <td>S</td>
                    <td>M</td>
                    <td>T</td>
                    <td>W</td>
                    <td>T</td>
                    <td>F</td>
                    <td>S</td>
                </tr>
            </thead>
            */}
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <span title="01 October 2020">01</span>
                        <p>Volta a Ilha Tour</p>
                        <p>Ilha dos Frades Boat tour</p>
                        <p>Morro SP Boat Tour</p>
                        <p>Morro de São Paulo Day Trip</p>
                        <p></p>
                    </td>
                    <td>02</td>
                    <td>03</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Agenda