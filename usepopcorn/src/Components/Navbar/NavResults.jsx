import React from 'react'

const NavResults = ({movies}) => {
    if (!movies) return 0;
    return (
        <p className="num-results">
            Found <strong>{movies.length}</strong> results
        </p>
    )
}

export default NavResults