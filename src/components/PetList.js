import React from "react";
import PetCard from "./PetCard";

const PetList = ({allPets}) => {
  return (
    <ul className="pets">
      {allPets.map((pet) => (
        <PetCard pet={pet} key={pet.id} />
      ))}
    </ul>
  );
};

export default PetList;
