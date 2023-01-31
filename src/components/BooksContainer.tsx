import React from "react";
import { books } from "../utils/book";
import Book from "./Book";

const BooksContainer = () => {
  return (
    <section className="booklist">
      <h2>Best Sellers in Books</h2>
      <section>
        {books.map((book) => {
          return <Book book={book} key={book.id}/>;
        })}
      </section>
    </section>
  );
};

export default BooksContainer;
