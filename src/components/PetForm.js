import { useState } from "react";

const PetForm = ({ addPet }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    species: "",
    sex: "",
    feeding: "",
    medications: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPet = {
      name: formData.name,
      image: formData.image,
      species: formData.species,
      sex: formData.sex,
      feeding: formData.feeding,
      medications: formData.medications,
    };

    fetch("http://localhost:5000/pets", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPet),
    })
      .then((response) => response.json())
      .then(addPet);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pet-content">
      <h4>Add New Pet</h4>
      <form onSubmit={handleSubmit} className="pet-form">
        <input
          type="text"
          name="name"
          placeholder="Pet Name"
        //   value={FormData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
        //   value={FormData.image}
          onChange={handleChange}
        />

        <input
          type="text"
          name="species"
          placeholder="Pet Species"
        //   value={FormData.species}
          onChange={handleChange}
        />

        <input
          type="text"
          name="sex"
          placeholder="Pet Sex"
        //   value={FormData.sex}
          onChange={handleChange}
        />

        <input
          type="text"
          name="feeding"
          placeholder="Diet Information"
        //   value={FormData.feeding}
          onChange={handleChange}
        />

        <input
          type="text"
          name="medications"
          placeholder="Medications"
        //   value={FormData.medications}
          onChange={handleChange}
        />
      </form>
      <button onClick={handleSubmit}>Submit</button>
      <div>Click to close</div>
    </div>
  );
};

export default PetForm;
