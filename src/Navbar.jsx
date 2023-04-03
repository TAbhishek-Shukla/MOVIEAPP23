import React from 'react'
import { useGlobalContext } from './context'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { query, setquery, isError } = useGlobalContext();

  return (
    <nav className='navbar'>
      <NavLink to='/' className='logo' >
        MOVIETOPIA
      </NavLink>
      <input type="text" placeholder='search here...'
        name='search'
        value={query}
        onChange={(e) => setquery(e.target.value)}
        onSubmit={(e) => e.preventDefault()}
        autoComplete='off' />
    </nav>
  )
}

export default Navbar