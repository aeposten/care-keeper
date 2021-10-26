import React, { useState } from "react";
import PetInfo from "./PetInfo";

export default function PetCard({ pet }) {
  const [infoHidden, setInfoVisible] = useState(false);

  return (
    <li className="pet-list">
      <img src={pet.image} alt={pet.name} className="pet-pic" />
      <h4 className="pet-name">{pet.name}</h4>
      <PetInfo className="pet-info" pet={pet} />
    </li>
  );
}
