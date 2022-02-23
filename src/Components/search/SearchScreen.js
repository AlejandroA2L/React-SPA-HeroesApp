import React, { useDebugValue, useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { heroes } from '../../data/heroes';
import { getHeroByName } from '../../helpers/getHeroByName';
import { useForm } from '../../Hooks/useForm'
import { HeroCard } from '../hero/HeroCard';
import queryString from 'query-string';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();


  const {q = ''} = queryString.parse(location.search);
  


  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;
  const heroeBuscado = useMemo(()=>getHeroByName(q),[q]);


  const handleSearch = (e) => {
    e.preventDefault();
    //console.log(searchText);
    navigate(`?q=${searchText}`);
  }
  return (
    <div>

      <h1>Busquedas</h1>
      <hr></hr>
      <div className='row'>
      <div className='col-5'>
        <h3>Buscar</h3>

        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder='Buscar un heroe'
            className='form-control'
            name='searchText'
            autoComplete='off'
            value={searchText}
            onChange={handleInputChange}>

          </input>

          <button className='btn btn-outline-primary mt-1 btn-block'
            type='submit'>
            Buscar
          </button>
        </form>


      </div>

      <div className='col-3'>
        <h4>Heroes</h4>
        <hr></hr>
        {
          (q==='') 
          ? <div className='alert alert-info'>Buscar un heroe</div>
          : (heroeBuscado.length === 0) && <div className='alert alert-danger'>No se encontro un heroe</div>
        }
        {

          heroeBuscado.map(hero => (
            <HeroCard
              key={hero.id}
              {...hero}
            ></HeroCard>
          ))
        }
      </div>
      </div>
      
    </div>
  )
}
