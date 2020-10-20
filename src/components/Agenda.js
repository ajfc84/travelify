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
                    <td>07</td>
                    <td>08</td>
                    <td>09</td>
                    <td>10</td>
                    <td>
                        <span title="11 October 2020">11</span>
                        <p>Volta a Ilha Tour</p>
                        <p>Ilha dos Frades Boat tour</p>
                        <p>Morro SP Boat Tour</p>
                        <p>Morro de São Paulo Day Trip</p>
                        <p></p>
                    </td>
                    <td>12</td>
                    <td>13</td>
                    <td>Filter</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Agenda