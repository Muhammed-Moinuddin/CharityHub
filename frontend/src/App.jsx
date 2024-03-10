import { useState } from "react";
import "./App.css";
import PopularCauses from "./components/PopularCauses";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        {/* Your content goes here */}
        <Home/>
      </main>
      <Footer />
    </div>
  );
}
