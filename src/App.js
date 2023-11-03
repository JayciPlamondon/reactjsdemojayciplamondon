import {useState} from 'react';
import SearchBar from './SearchBar.js';
import ContactTable from './ContactTable.js';
import {data} from './data.js';


/**
 * Blablab
 * @return {jsx}
 */
export default function App() {
  const [contact, setContact] = useState(data); // state contact initialisé à data

  // return du (jsx)
  // tout doit être englobé dans une seule balise parent
  // peut mettre des balises vides pour que ça marche, même si tout englobé dans une div est utile (<> </>)
  // On appelle d'autres composant comme ceci (<SearchBar />)


  return (
    <>
      <h1>Filterable React List</h1>
      <SearchBar setContact={setContact} />
      <ContactTable contact={contact}/>
    </>
  );
}
