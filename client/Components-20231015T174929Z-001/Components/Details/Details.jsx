import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { client, omdbClient } from '../../Client';
import './Details.css'

const Details = () => {

  const [data, setData] = useState({})
  const { imdb } = useParams();
  useEffect(() => {
    console.log("sdcsdcsdc");
    fetchMore();
  }, [])

  const navigate = useNavigate();
  
  const fetchMore = () => {
    omdbClient.get(`?apikey=53e46aae&i=${imdb}`)
      .then(resp => { console.log(resp.data); setData(resp.data) })
  }
  return (
      <div className="cart">
        <div className="main">
          <img className="img" src={data.Poster} alt="img" />
          <div className="sub-main">
            <div className="items">Title: {data.Title}</div>
            <div className="items">Year: {data.Year}</div>
            <div className="items">Rated: {data.Rated}</div>
            <button onClick={()=>{navigate(`/`)}}>Back</button>
          </div>
        </div>
        <div className="bottom-main">
          <div className="left">
            <div className="items">Released: {data.Released}</div>
            <div className="items">Runtime: {data.Runtime}</div>
            <div className="items">Genre: {data.Genre}</div>
            <div className="items">Director: {data.Director}</div>
            <div className="items">Writer: {data.Writer}</div>
            <div className="items">Actors: {data.Actors}</div>
            <div className="items">Plot: {data.Plot}</div>
            <div className="items">Language: {data.Language}</div>
          </div>
          <div className="right">
            <div className="items">Country: {data.Country}</div>
            <div className="items">Awards: {data.Awards}</div>
            <div className="items">Ratings: {data.Ratings && data.Ratings[0].Value}</div>
            <div className="items">Metascore: {data.Metascore}</div>
            <div className="items">imdbRating: {data.imdbRating}</div>
            <div className="items">imdbVotes: {data.imdbVotes}</div>
            <div className="items">imdbID: {data.imdbID}</div>
            <div className="items">Total Seasons: {data.totalSeasons}</div>
          </div>
        </div>        
      </div>
  )
}

export default Details