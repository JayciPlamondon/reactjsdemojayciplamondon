import SearchBar from './SearchBar.js';
import ContactTable from './ContactTable.js';

/**
 * Blablab
 * @return {jsx}
 */
export default function App() {
  // return du (jsx)
  // tout doit être englobé dans une seule balise parent
  // peut mettre des balises vides pour que ça marche, même si tout englobé dans une div est utile (<> </>)
  // On appelle d'autres composant comme ceci (<SearchBar />)
  return (
    <>
      <h1>Filterable React List</h1>
      <SearchBar />
      <ContactTable />
    </>
  );
}
