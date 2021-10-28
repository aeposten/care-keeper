import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import PetList from "./PetList";
import Resources from "./Resources";
import About from "./About";

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
        <Route path="/" exact>
          <PetList allPets={allPets} search={search} />
        </Route>
        <p>
          <Route path="/resources" component={Resources} />
        </p>
        <p>
          <Route path="/about" component={About} />
        </p>
      </main>
    </div>
  );
}

export default App;
