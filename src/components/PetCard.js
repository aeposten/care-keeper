import React, { useState } from "react";
import PetInfo from "./PetInfo";

export default function PetCard({ pet }) {
  const [infoVisible, setInfoVisible] = useState(false);
  const toggleVisibleModal = () => {
    setInfoVisible(!infoVisible);
  };
  return (
    <li className="pet-list" onClick={toggleVisibleModal}>
      <img src={pet.image} alt={pet.name} className="pet-pic" />
      <h4 className="pet-name">{pet.name}</h4>
      {infoVisible && <div className="overlay"><PetInfo className="pet-info-modal" pet={pet} /></div>}
    </li>
  );
}
