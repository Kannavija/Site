import { useState } from "react";
import "./NousContacter.css";

function NousContacter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Vous pouvez gérer l'envoi du formulaire ici
    // Reset du formulaire après soumission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-form-container">
      <h2>Contactez-nous</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Votre nom"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Votre email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message"
          required
        ></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default NousContacter;
