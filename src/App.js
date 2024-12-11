import React from "react";
import Header from "./components/Header";
import Product from "./components/Product";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Product />
      </main>
      <Footer />
    </div>
  );
};

export default App;
