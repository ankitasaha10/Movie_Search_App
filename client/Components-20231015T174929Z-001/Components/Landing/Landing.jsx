import React, { useEffect } from 'react'
import { useState } from 'react'
import './Landing.css'
import {client} from '../../Client'
import MovieCart from '../MovieCart/MovieCart'
const Landing = () => {
    const [search, setSearch] = useState("");
    const [movieData, setMovieData] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const changeHandler = (e) => {
        console.log(search);
        setSearch(e.target.value);
    }
    useEffect(()=> {
        submitHandler()
    }, [search])
    const submitHandler = () => {
        setLoading(true);
        client.get(`/movie/search?query=${search}`).then((resp) =>{ 
            if(resp.data)
            console.log("DATAAAA", resp.data.data)
            setMovieData(resp.data.data)
            setLoading(false);
        });
        setIsSearched(true);
    }

    return (
        <div>
            <div className='landing-page'>
                <div>
                    Movies App
                </div>
                <hr/>
                    Search For Movies By Title<br/>
                    <input placeholder='search' value = {search} onChange={changeHandler}/><br/>
                    {/* <button onClick={()=>submitHandler()}>Search Now!</button> */}
            </div>
            {isSearched && movieData.length == 0 ? <div className='error'>{!isLoading && <>No results found for {search}</>}</div> : null}
            {movieData.length > 0 && <div className='posters'>
                {movieData.map((item)=> {
                    return (<div key= {item.imdbId}>
                        {console.log("EACHHHHH", item.Title, item.fav)}
                        <MovieCart title={item.Title} year = {item.Year} poster={item.Poster} imdb={item.imdbID} favorite={item} submitHandler={submitHandler}/>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

export default Landing



	
