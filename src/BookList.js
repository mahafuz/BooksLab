import React, { useContext } from 'react';
import Movie from './Movie';
import { BooksContext } from './BooksContext';

const BookList = () => {
    
    const books = useContext(BooksContext);

    return(
        <ul>
            { console.log(books) }
        </ul>
    )
}

export default BookList;