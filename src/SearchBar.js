import {useContext, useState} from 'react';
import {data} from './data.js';
import {ContactContext} from './ContactContext.js';

/**
 *
 * @return {jsx}
 */
export default function SearchBar() {
  const [input, setInput] = useState('');
  // Étape 4 utiliser le context, ici c'est le setContact
  const {setContact} = useContext(ContactContext);
  /**
   * Blabla
   * @param {Event} event sert à rien
   */
  function handleChange(event) {
    setInput(event.target.value);
  }

  /**
   * Gesionnaire d'évènement de click sur le bouton filtrer.
   * Filtre la liste de contact.
   * Envoi la valeur filtrée dans le state.
   */
  function handleClickFilter() {
    const filteredList = data.filter((elt) => elt.name.includes(input));
    setContact(filteredList);
  }

  return (
    <form>
      <input type="text" value={input} onChange={handleChange} placeholder="search..."/>
      <button type="button" onClick={handleClickFilter} >Filtrer</button>
    </form>
  );
}
