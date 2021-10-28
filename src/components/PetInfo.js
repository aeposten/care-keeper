const PetInfo = ({ pet, handleDelete }) => {
  return (
    <div className="pet-content">
      <li>
        <h4 className="name-info">{pet.name}</h4>
      </li>
      <li>
        <img src={pet.image} className="small-image" alt={pet.name} />
      </li>
      <li>Species: {pet.species}</li>
      <li>Food: {pet.feeding}</li>
      {pet.medications ? <li>Medications: {pet.medications}</li> : null}
      <li>
        <button onClick={() => handleDelete(pet)}>Delete Pet</button>
      </li>
    </div>
  );
};

export default PetInfo;
