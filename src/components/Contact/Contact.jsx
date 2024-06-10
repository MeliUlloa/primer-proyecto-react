import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contactame! </h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
