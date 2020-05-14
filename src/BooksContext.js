import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const BooksContext = createContext();

export const BooksProvider = (props) => {
  const [books, setBooks] = useState();

  const fetchBooks = () => {
    let books;
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=intitle&startIndex=0&maxResults=20")
      .then((response) => {
        setBooks(response.data.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <BooksContext.Provider value={books}>
      {props.children}
    </BooksContext.Provider>
  );
};
