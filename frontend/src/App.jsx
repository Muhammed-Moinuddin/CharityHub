import { useState } from "react";
import "./App.css";
import PopularCauses from "./components/PopularCauses";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div >
      <div >
        <Header />
        <div>
          <div >
            <h2>Be the change you want to see in the world!</h2>
          </div>
          <PopularCauses />
        </div>
        <Footer />
      </div>
    </div>
  );
}
