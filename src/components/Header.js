import React from "react";
import "../styles/components/Header.scss";

function Header() {
  return (
    <React.Fragment>
      <header className="app__header">
        <h1 className="app__title">Where to Beer?</h1>
      </header>
    </React.Fragment>
  );
}

export default Header;
