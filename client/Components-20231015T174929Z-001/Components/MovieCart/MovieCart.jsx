import React from 'react'
import './MovieCart.css'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';
import { client } from '../../Client';

const MovieCart = ({title, year, poster, imdb, favorite, submitHandler}) => {
  const navigate = useNavigate();

  const favHandler = () => {
    client.get(`/movie/favorite?imdb=${imdb}`).then((resp) =>{ 
     console.log("tesspppvpsdpv", resp)
      submitHandler()
    });



  }

  return (
    <div className='cart'>
          {console.log("TTTTT", typeof favorite.fav)}
          <img className="img" src={poster} alt="img" />
          <div className='title'>Title : {title}</div>
          <div className='year'>Year : {year}</div>
          <button onClick={()=> favHandler()}>{favorite.fav ? "Remove From Favorite" : "Add To Favorite"}</button>
          <button onClick={()=>{navigate(`/movies/${imdb}`)}}>Know More</button> 
          
    </div>
  )
}
export default MovieCart