import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import PopularCauses from './components/PopularCauses';
import Header from './components/Header';
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-12">hi</div>
          <PopularCauses />
        </div>
        <Footer />
      </div>
    </div>
  );
}