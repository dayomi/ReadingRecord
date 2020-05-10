import React, { useState, useCallback, useRef } from "react";
import Book from "./Book";
/* import Button from "@material-ui/core/Button"; */
import Input from "@material-ui/core/Input";
import InputBook from "./InputBook";
import RecordList from "../Record/RecordList";
import "./Book.css";

const BookList = () => {
  const [books, setBooks] = useState([
    {
      bid: 1,
      Title: "페스트",
      Author: "알베르 카뮈",
      Create_date: "2020/04/24",
      image:
        "http://image.yes24.com/goods/4827619/800x0",
    },
    {
      bid: 2,
      Title: "앵무새죽이기",
      Author: "하퍼 리",
      Create_date: "2020/04/24",
      image:
        "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99B992365A45FBCE29",
    },
    {
      bid: 3,
      Title: "강다혜 바보",
      Author: "이겨레 올림",
      Create_date: "2020/04/24",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Gull_portrait_ca_usa.jpg/300px-Gull_portrait_ca_usa.jpg",
    },
  ]);
  const [flag, setFlag] = useState(true);
  const [bookClickFlag, setBookClickFlag] = useState({
    flag: false,
    bid: "",
    name: "",
  });

  const nextId = useRef(books.length + 1);
  const inputBook = useCallback(
    (book) => {
      console.log(books.concat(book));
      setBooks(books.concat(book));
      nextId.current += 1;
      setFlag(true);
      console.log(books);
    },
    [setBooks, books]
  );
  const onFlagTrue = useCallback(() => {
    setFlag(true);
  }, []);

  const onFlagFalse = useCallback(() => {
    setFlag(false);
  }, []);

  const onBookClickEvent = useCallback((e) => {
    setBookClickFlag(true);
  });

  const bookList = books.map((book, i) => (
    <li
      key={i}
      onClick={() =>
        setBookClickFlag({ flag: true, bid: book.bid, title: book.Title })
      }
    >
      <Book book={book} />
    </li>
  ));

  return bookClickFlag.flag ? (
    <RecordList bid={bookClickFlag.bid} title={bookClickFlag.title} />
  ) : (
    <div>
      {flag ? (
        <ul>
          {bookList}
          <br></br>
          <Input type="button" class="inputBook" onClick={onFlagFalse} value="+ Add New"></Input>
        </ul>
      ) : (
        <InputBook
          bid={nextId.current}
          onFlag={onFlagTrue}
          inputBook={inputBook}
        />
      )}
    </div>
  );
};

export default BookList;
