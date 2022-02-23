import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../helpers/getHeroById';

export const HeroeScreen = () => {
  //const params = useParams(); //-->Obtiene las props obtenidas al cargar la pagina
  //console.log(params);
  const { heroeId } = useParams();//Desestructuracion y se obtiene el valor especifico de heroeid
  const navigate = useNavigate();//Declaracion del hook useNavigate
  const getHero = useMemo(()=>getHeroById(heroeId),[heroeId]);  

  if (!getHero) {//Validacion si se cambia la url en la pantalla del Heroe
    return <Navigate to='/' />//Si no existe el id, retornar a la pantalla de inicio
  }

  const { id,
    superhero,
    publisher,
    alter_ego,
    characters,
    first_appearance } = getHero;//Desestructuracion de las props

  const imagePath = `/assets/heroes/${id}.jpg`; //Variable que almacena la imagen del heroe seleccionado

  const handleRegresar = ()=>{//Boton para regresar
    navigate(-1); //Regresa a la pagina anterior
  }

  return (

    <div className='row mt-5 animate__animated animate__slideInLeft'>
      <div className='col-3'>
        <img src={imagePath}
          alt={superhero}
          className='img-thumbnail'></img>

      </div>
      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter Ego:</b>{alter_ego}</li>
          <li className='list-group-item'><b>Publisher:</b>{publisher}</li>
          <li className='list-group-item'><b>Characters:</b>{characters}</li>
          <li className='list-group-item'><b>First Appearance</b>{first_appearance}</li>

        </ul>
        <button className='btn btn-outline-info' onClick={handleRegresar}>Regresar</button>
      </div>
    </div>
  )
}
