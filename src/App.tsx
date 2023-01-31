import React from "react";
import { BooksContainer, SideBarMenu, Title } from "./components/index";

function App() {
  return (
    <>
      <Title />
      <div className="hero">
        <SideBarMenu />
        <BooksContainer />
      </div>
    </>
  );
}

export default App;
