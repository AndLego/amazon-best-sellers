import React from "react";

interface Book {
  id: number;
  author: string;
  title: string;
  cover: string;
  material: string;
  price: number;
  review: number;
}

const Book = ({ book }: { book: Book }) => {
  const { id, cover, title, author, review, material, price } = book;
  const [alert, setAlert] = React.useState(false);

  const handleClick = (item: string, value: string | number) => {
    console.log(`${item}: ${value}`);
    setAlert(true);
  };

  React.useEffect(() => {
    const timeCount = setTimeout(() => {
      setAlert(false);
    }, 1000);
    return () => clearTimeout(timeCount);
  }, [alert]);

  return (
    <article className="book">
      <div>
        <span>#{id}</span>
      </div>
      <img
        onClick={() => handleClick("cover", cover)}
        src={cover}
        alt={title}
      />
      <div className="book_info">
        <p onClick={() => handleClick("title", title)}>{title}</p>
        <p onClick={() => handleClick("author", author)}>{author}</p>
        <div>
          ⭐⭐⭐⭐⭐
          <span>{review}</span>
        </div>
        <p onClick={() => handleClick("material", material)}>{material}</p>
        <p onClick={() => handleClick("price", price)}>${price}</p>
      </div>
      {alert && <p>Check the console</p>}
    </article>
  );
};

export default Book;
