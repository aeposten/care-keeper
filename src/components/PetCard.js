import React, { useState } from "react";
import PetInfo from "./PetInfo";

export default function PetCard({ pet, handleDelete }) {
  const [infoVisible, setInfoVisible] = useState(false);
  // const [petArray, setPetArray] = useState(pet);

  const toggleVisibleModal = () => {
    setInfoVisible(!infoVisible);
  };

  // const handleDelete = (deletedPet) => {
  //   fetch(`http://localhost:5000/pets/${deletedPet.id}`, {
  //     method: "Delete",
  //     headers: { "Content-Type": "application/json" },
  //   }).then(() => {
  //     const newPetArray = petArray.filter((pet) => pet.id !== deletedPet.id);
  //     setPetArray(newPetArray);
  //   });
  // };

  return (
    <div className="pet-list">
      <li onClick={toggleVisibleModal}>
        <img src={pet.image} alt={pet.name} className="pet-pic" />
        <h4 className="pet-name">{pet.name}</h4>
      </li>

      {infoVisible && (
        <>
          <div className="overlay" onClick={toggleVisibleModal}></div>
          <PetInfo
            className="pet-info-modal"
            pet={pet}
            handleDelete={handleDelete}
            toggleVisibleModal={toggleVisibleModal}
          />
        </>
      )}
    </div>
  );
}
