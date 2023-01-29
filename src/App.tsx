import React from "react";
import { BookList, SideBarMenu, Title } from "./components/index";

function App() {
  return (
    <>
      <Title />
      <div className="hero">
        <SideBarMenu />
        <BookList />
      </div>
    </>
  );
}

export default App;
