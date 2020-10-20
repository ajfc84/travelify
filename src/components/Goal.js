import React from 'react'
import '../css/Goal.css'
import mypackage from '../images/mypackage.jpg'
import mycomplexity from '../images/mycomplexity.jpg'
import myagenda from '../images/myagenda.jpg'

const Goal = () => {
    return (
        <div id="sitegoalsobjectives">
            <div className="goals">
                <img src={myagenda} alt="agenda" />
                <h4>A sua Agenda</h4>
                <p>Nao perca tempo de lazer com burocracia, organize sua viagem com facilidade em sua agenda travelify e aproveite seu tempo de ferias ao maximo!</p>
            </div>
            <div className="goals">
                <img src={mypackage} alt="pacote" />
                <h4>O seu Pacote de Ferias</h4>
                <p>Nao fique dependente de terceiros para decidir, na travelify voce a encontra as suas ferias!</p>
            </div>
            <div className="goals">
                <img src={mycomplexity} alt="complexidade" />
                <h4>Toda a Informacao ao seu alcance</h4>
                <p>Planear uma viagem pode ser bem complexo, na travelify simplificamos todo o processo num so lugar!</p>
            </div>
        </div>
    )
}

export default Goal