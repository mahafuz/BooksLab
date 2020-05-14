import React, { useContext } from 'react';
import styled from '@emotion/styled'
import Book from './components/Book';
import { BooksContext } from './BooksContext';


const BooksWrapper = styled.ul`
    background: red;
`;

const BookList = () => {
    
    const books = useContext(BooksContext);

    return(
        <BooksWrapper>
            <h2>Hello World</h2>
        </BooksWrapper>
    )
}

export default BookList;