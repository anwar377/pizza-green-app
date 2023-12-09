import Header from "./components/header/Header";
import React from "react";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import Explore from "./components/explore/Explore";
import Review from "./components/review/Review";
import Footer from "./components/footer/Footer";



function App() {
  return (
    <div>
      <Header />
      <Home />
      <Menu />
      <About />
      <Explore />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
