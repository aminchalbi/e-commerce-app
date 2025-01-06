import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../Style/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    textarea: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crée l'objet messageData avec les bonnes informations
    const messageData = {
      to_name: 'Nom de la société',  // Nom du destinataire (personnalisable)
      from_name: formData.email,     // Email de l'utilisateur
      email: formData.email,         // Email de l'utilisateur
      message: formData.textarea     // Le message que l'utilisateur a écrit
    };

    // Envoie l'email avec EmailJS
    emailjs.send(
      'service_l2xvf1u',    // Remplace par ton service ID
      'template_d2wrbhz',   // Remplace par ton modèle ID
      messageData,          // Données envoyées à EmailJS
      'Wdoc9sF3uWkLLgRKs'   // Remplace par ton user ID
    )
    .then((result) => {
      console.log('Message envoyé', result.text);
      alert('Message envoyé avec succès!');
    })
    .catch((error) => {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      alert('Erreur lors de l\'envoi du message');
    });
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Company Email</label>
          <input
            required
            name="email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="textarea">How Can We Help You?</label>
          <textarea
            required
            cols={50}
            rows={10}
            id="textarea"
            name="textarea"
            value={formData.textarea}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="form-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
