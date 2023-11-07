import {ContactContext} from './ContactContext.js';
import {useContext} from 'react';

/**
 * @param {*} props
 * @return {jsx}
 */
export default function ContactRow({name, phone, email}) { // déconstruction de props (si on connait le nombre de props)
  const {setContact} = useContext(ContactContext);
  /**
 * gestionnaire d'évènement de suppresssion de contact
 */
  function handleClickDelete() {
    setContact((prev) => prev.filter((elt)=>elt.name !== name));
  }

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td><button type="button" onClick={handleClickDelete}>X</button></td>
      </tr>
    </>
  );
}
