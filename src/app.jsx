import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/product/:id' element={<Product />} />
          </Routes>
        </Container>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
