import React,{useState,useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { url } from './context';

const Singlemovie = () => {
   const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(" ");
  //getting all ovies from url 
  const getMovies = async (uri) => {

      try {
          const res = await fetch(uri);
          const data = await res.json();
          if(data.Response === "True"){
            // console.log(data);
              setMovie(data);
              setLoading(false)
            
          }
      }
      catch (err) {
          console.log(err);
      }
  }

  useEffect(() => {
     let timer= setTimeout(() => {
          getMovies(`${url}&i=${id}`) 
      },800);
     return ()=>clearTimeout(timer);
  }, [id]);

  if(loading){
    return (
      <div className="movie-section">
        <div className="loading-message">Loading...</div>
      </div>
    )
  }
  return (
    <>
     <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt={movie.Title} />
        </figure>

        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating}</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to='/' >Go Back</NavLink>
        </div>
      </div>
     </section>
    </>
  )
}

export default Singlemovie