import "./App.css";
import PetList from "./PetList";
import Header from "./Header"

function App() {
  return (
    <div className="App">
      <header className="App-header"><Header /></header>
      <PetList />
    </div>
  );
}

export default App;
