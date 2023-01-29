import React from "react";
import arrowback from "../assets/arrowback.svg";
import { booksMenu } from "../utils/booksMenu.js";

const SideBarMenu = () => {
  return (
    <aside className="sidebar_menu">
      <p>
        <img src={arrowback} alt="back" />
        Any Department
      </p>
      <h3>Books</h3>
      <article>
        {booksMenu.map((book) => {
          return <p>{book}</p>;
        })}
      </article>
    </aside>
  );
};

export default SideBarMenu;
