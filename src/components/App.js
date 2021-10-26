import { useState, useEffect } from "react";
import PetList from "./PetList";
import Header from "./Header";

function App() {
  const [allPets, setAllPets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/pets")
      .then((response) => response.json())
      .then((allPets) => {
        setAllPets(allPets);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <PetList allPets={allPets} />
      </main>
    </div>
  );
}

export default App;
