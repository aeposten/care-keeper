import { useState, useEffect } from "react";
import PetList from "./PetList";
import Header from "./Header";

function App() {
  const [allPets, setAllPets] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const addPet = (newPet) => {
    setAllPets([...allPets, newPet]);
  };

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
        <Header search={search} handleSearch={handleSearch} addPet={addPet} />
      </header>
      <main>
        <PetList allPets={allPets} search={search} />
      </main>
    </div>
  );
}

export default App;
