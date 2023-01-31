import React from "react";
import arrowback from "../assets/arrowback.svg";
import { amazonCatalog } from "../utils/amazonCatalog.js";

const SideBarMenu = () => {
  return (
    <aside className="sidebar_menu">
      <p>
        <img src={arrowback} alt="back" />
        Any Department
      </p>
      <h3>Books</h3>
      <article>
        {amazonCatalog.map((category, index) => {
          return (
            <p onClick={() => console.log(category)} key={index}>
              {category}
            </p>
          );
        })}
      </article>
    </aside>
  );
};

export default SideBarMenu;
