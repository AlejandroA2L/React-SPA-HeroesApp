
import React from 'react'
import {heroes} from '../data/heroes';
export const getHeroByName = (name = '') => {
  
    console.log('asasasas');
    if(name === ''){
        return [];
    }
    
    name = name.toLowerCase();
    return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));
  
}
