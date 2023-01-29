import React from "react";
import { books } from "../utils/book";

const BookList = () => {
  return (
    <section className="booklist">
      <h2>Best Sellers in Books</h2>
      <section>
        {books.map((book) => {
          return (
            <article key={book.id} className="book">
              <div>
                <span>#{book.id}</span>
              </div>
              <img src={book.cover} alt={book.title} />
              <div className="book_info">
                <p>{book.title}</p>
                <p>{book.author}</p>
                <div>
                  ⭐⭐⭐⭐⭐
                  <span>{book.review}</span>
                </div>
                <p>{book.material}</p>
                <p>${book.price}</p>
              </div>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default BookList;
