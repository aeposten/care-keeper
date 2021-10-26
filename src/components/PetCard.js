import React from "react";

export default function PetCard({ pet }) {
  return (
    <li className="pet-list">
      <img src={pet.image} alt={pet.name} className="pet-pic" />
      <h4 className="pet-name">{pet.name}</h4>
    </li>
  );
}
