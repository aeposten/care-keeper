const PetInfo = ({ pet }) => {
  return (
    <div className="pet-content">
      <li>
        {" "}
        <h4 className="name-info">{pet.name}</h4>
      </li>
      <li>
        <img src={pet.image} className="small-image" />
      </li>
      <li>Species: {pet.species}</li>
      <li>Food: {pet.feeding}</li>
      <li>{pet.medications}</li>
    </div>
  );
};

export default PetInfo;
