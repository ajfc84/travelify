import React from 'react'
import '../css/Agenda.css'

const Agenda = () => {
    return (
        <table id="agenda">
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
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        01
                        <p>something</p>
                        <p>something else</p>
                        <p>another thing</p>
                        <p>and another</p>
                    </td>
                    <td>02</td>
                    <td>03</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Agenda