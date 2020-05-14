import React from "react";
import "./App.css";
import BookList from "./BookList";
import Nav from "./Nav";
import { BooksProvider } from "./BooksContext";

function App() {
  return (
    <BooksProvider>
      <div className="App">
        {/* <Nav /> */}
        <BookList />
      </div>
    </BooksProvider>
  );
}

export default App;
