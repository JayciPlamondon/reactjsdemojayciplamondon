import {useState} from 'react';
import {ContactContext} from './ContactContext.js';
import {useContext} from 'react';


/**
 * Composant ContactForm
 * @return {jsx} Formulaire d'ajout de contact
 */
export default function ContactForm() {
  const {setContact} = useContext(ContactContext);
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  /**
   * @param {Event} évènement onchange
   */
  function handleChange({name, value}) {
    setData((prev) => ({...prev, [name]: value}));
  }

  /**
   * gestionnaire d'évènement submit du formulaire
   * @param {Event} event évènement onsubmit
   */
  function handleSubmit(event) {
    event.preventDefault();
    setContact((prev)=>[...prev, data]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        placeholder='nom'
        name="name"
        value={data.name}
        onChange={(e)=> handleChange(e.target)}
      />
      <input type="email"
        placeholder='courriel'
        name="email"
        value={data.email}
        onChange={(e)=> handleChange(e.target)}
      />
      <input type="phone"
        placeholder='téléphone'
        name="phone"
        value={data.phone}
        onChange={(e)=> handleChange(e.target)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}
