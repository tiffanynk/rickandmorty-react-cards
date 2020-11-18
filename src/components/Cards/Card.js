import React from 'react' 
import './Cards.css'

function Card({character, setActiveCard, activeCard}) {
    const {image, name, species, gender} = character

    const regular = () => (
        <div className='card' onClick={() => setActiveCard(character)}>
            <h3>{name}</h3>
            <img src={image}/>
        </div>
    )

    const active = () => (
        <div className='active-card' onClick={() => setActiveCard(character)}>
            <h3>{name}</h3>
            <img src={image}/>
            <section className='details'>
                <p>{gender}</p>
                <p>{species}</p>
            </section>
        </div>
    )

    return (
        <div>
            {activeCard ? active() : regular()}
        </div>
    )
}

export default Card;