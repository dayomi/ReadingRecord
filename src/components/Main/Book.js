import React from "react";
import "./Book.css";

const Book = (book) => {
  console.log(book.book);
  return (
    <div key={book.book.bid} class="booklist">
      <img src={book.book.image} height="160" width="120" />
      <div class="info">
        <p class="title">{book.book.Title}</p>
        <p class="author">{book.book.Author}</p>
      </div>
    </div>
  );
};

export default Book;
