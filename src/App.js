import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import "./styles.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
