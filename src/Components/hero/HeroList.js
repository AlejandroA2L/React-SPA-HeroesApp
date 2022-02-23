import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../../helpers/getHeroByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {//Obtiene por props el publisher de los heroes(marvel o dc)

    const heroes = useMemo(()=>getHeroByPublisher(publisher),[publisher]);//Variable que almacena la informacion del los heroes dependiendo la compa;ia
    return (
        <div className='row rows-cols-1 row-cols-md-5 g-3 animate__animated animate__fadeIn'>
                {
                    heroes.map(hero => (
                         <HeroCard 
                         key={hero.id} {...hero}>
                            
                        </HeroCard>
                    ))
                    //{...hero}: Envia las props(atributos) del heroe al componente HeroCard para ser utilizadas 
                    //y dar formato a las cartas de cada uno
                }
        </div>
    )
}
