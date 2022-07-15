import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
