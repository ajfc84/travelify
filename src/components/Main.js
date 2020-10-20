import React from 'react'
import star from '../images/star-solid.svg'
import dollar from '../images/dollar-sign-solid.svg'
import cloud from "../images/cloudy.png"
import '../css/Main.css'
import Tabs from './Tabs'

const Main = () => {
    return (
        <div id="main" className="container clearfix">
            <div id="container">
                <div id="content">
                    <div id="about">
                        <div id="description">
                            <h3>O que esperar</h3>
                            <p>
                            Conhecido como um dos mais famosos destinos turísticos do Brasil. Morro de São Paulo impressiona pelas suas paisagens exuberantes com praias de areia branca e água cristalina. Aqui a Natureza é preservada! E com ela todos os benefícios associados como a paz, a tranquilidade e a saúde. Mas não só! A aventura e a adrenalina também fazem as delícias do publico mais jovem. Para quem quiser experimentar tem na 1ª praia um dos cartões postais mais famosos do Brasil, a tiroleza de Morro. E não ficamos por aqui, Morro tem praias para todos os gostos! Sem incomodar quem procura a tranquilidade na 4ª ou 5ª praia, é na 2ª praia que vamos encontrar a espetacular badalação para gente festeira!
                            <a href="/">mais</a>
                            </p>
                        </div>
                        <div id="evaluation">
                            <h6>Avaliacao</h6>
                            <img id="star" src={star} alt="evaluation"/>
                            <img id="star" src={star} alt="evaluation"/>
                            <img id="star" src={star} alt="evaluation"/>
                            <img id="star" src={star} alt="evaluation"/>
                            <img id="star" src={star} alt="evaluation"/>
                            <h6>Estacao</h6>
                            <img id="season" src={cloud} alt="season" />
                            <span>Media</span>
                            <h6>Cambio</h6>
                            <img id="dollar" src={dollar} alt="exchange" />
                            <img id="dollar" src={dollar} alt="exchange" />
                            <img id="dollar" src={dollar} alt="exchange" />
                            <span>Caro</span>
                        </div>
                    </div>
                    <Tabs />
                </div>
            </div>
        </div>
    )
}
export default Main