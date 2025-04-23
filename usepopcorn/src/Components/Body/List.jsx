import React, { Children, useState } from 'react'
import MovieList from './Movie/MovieList';
// incase of component compostion we write children and incase of element method we can write anything like element 
const List = ({children}) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen((open) => !open)}
            >
                {isOpen ? "–" : "+"}
            </button>
            {isOpen && (
             children
            )}
        </div>
    )
}

export default List