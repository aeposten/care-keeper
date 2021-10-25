import React, {useState, useEffect} from "react"
import Header from "./Header";
import Navbar from "./Navbar";
import PetList from "./PetList";
import "./App.css";

function App() {

  useEffect(() => {
    fetch("http://localhost:3001/")
    .then(response => response.json())
    .then(data => console.log(data))
  })
  return (
    <div className="App">
      < Header />
      < Navbar />
      < PetList />

    </div>
  );
}

export default App;
