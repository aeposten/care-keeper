import { useState } from "react";
import PetCard from "./PetCard";

const PetList = ({ allPets, search, handleDelete }) => {
// const [petArray, setPetArray] = useState(pet)
//   const handleDelete = (deletedPet) => {
//     fetch(`http://localhost:5000/pets/${deletedPet.id}`, {
//       method: "Delete",
//       headers: { "Content-Type": "application/json" },
//     }).then(() => {
//       const newPetArray = petArray.filter((pet) => pet.id !== deletedPet.id);
//       setPetArray(newPetArray);
//     });
//   };

  return (
    <ul className="pets">
      {allPets
        .filter((pet) => pet.name.toLowerCase().includes(search))
        .map((pet) => (
          <PetCard pet={pet} key={pet.id} handleDelete={handleDelete}/>
        ))}
    </ul>
  );
};

export default PetList;
