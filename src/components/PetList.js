import React from "react";
import PetCard from "./PetCard";

const PetList = ({ allPets, search }) => {
  return (
    <ul className="pets">
      {allPets
        .filter((pet) => pet.name.toLowerCase().includes(search))
        .map((pet) => (
          <PetCard pet={pet} key={pet.id} />
        ))}
    </ul>
  );
};

export default PetList;
