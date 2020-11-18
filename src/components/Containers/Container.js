import React, {useState} from 'react'
import CardContainer from './CardContainer'
import Card from '../Cards/Card'
import './Container.css'

function Container({characters}) {
    //hook
    const [activeCard, setActiveCard] = useState(null)

    return (
        <div className='container'>
            <CardContainer characters={characters} setActiveCard={setActiveCard}/>
            { activeCard ? <Card character={activeCard} activeCard={true}/> : null}
        </div>
    )
}

export default Container;