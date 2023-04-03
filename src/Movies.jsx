import React from 'react'
import { useGlobalContext } from './context';
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const { movie, isError,loading } = useGlobalContext();
  
  if(loading){
    return (
      <div className="movie-section">
        <div className="loading-message">Loading...</div>
      </div>
    )
  }
  return (
    <>
      <section id='movie-page'>
       {
        isError.show === 'true' ?
        <>
        <div className="card-error">
          <p>{isError.show && isError.msg}</p>
        </div>
        </>
        :
       <>
        <div className="container">
        {movie.map((i) => {
          const { Title, Poster, imdbID } = i;
          const Moviename = Title.substring(0, 15);
          return (
            <NavLink key={imdbID} to={`movie/${imdbID}`} >
              <div className="card">
                <div className="card-info">
                  <h2 className='card-title'>{Moviename.length > 15 ? `${Moviename}...` : Moviename}</h2>
                  <img src={Poster} alt={`${imdbID}`} />
                </div>
              </div>
            </NavLink>
          )
        })
        }
      </div>
       </>
}
      </section>

    </>
  )
}

export default Movies