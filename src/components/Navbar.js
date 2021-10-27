import Search from "./Search";
import PetForm from "./PetForm";
import { useState } from "react";

const NavBar = ({ search, handleSearch, addPet }) => {
  const [formVisible, setFormVisible] = useState(false);
  const toggleVisibleForm = () => {
    setFormVisible(!formVisible);
  };

  return (
    <nav>
      <ul className="nav">
        <li className="title">Care Keeper</li>
        <li onClick={toggleVisibleForm}>Add a Pet </li>

        {formVisible && (
          <>
            <div className="overlay" onClick={toggleVisibleForm}>
              {" "}
            </div>
            <PetForm className="pet-info-modal" addPet={addPet} />
          </>
        )}

        <li>
          <Search search={search} handleSearch={handleSearch} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
