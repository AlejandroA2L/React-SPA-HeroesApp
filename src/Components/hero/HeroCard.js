import React from 'react'
import { Link } from 'react-router-dom';

//Componente que da formato a cada una de las tarjetas del heroe
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appareance,
    characters,
}) => //Desestructuracion de las props mandadas en en HeroList.js 

{
    const imagePath = `./assets/heroes/${id}.jpg`;//Extrae la imagen del path de los heroes
    return (
        <div className='col'>
            <div className='card'>

                <div className='row no-gutters'>
                    <div className='col-4'></div>
                    <img src={imagePath} className='card-img' alt={superhero}></img>
                </div>

                <div className='col-8'>
                    <div className='card-boddy'>
                        <h5 className='card-title'>{superhero}</h5>
                        <p className='card-text'>{alter_ego}</p>

                        {
                            (alter_ego !== characters) &&
                            <p className='text-muted'>{characters}</p>
                        }
                        <p className='card-text'>
                            <small className='text-muted'>{first_appareance}</small>
                        </p>
                        
                        <Link to={`/hero/${id}`}>Mas...</Link>

                    </div>

                </div>
            </div>
        </div>



    )
}
