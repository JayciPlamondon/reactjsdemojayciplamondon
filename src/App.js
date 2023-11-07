import SearchBar from './SearchBar.js';
import ContactTable from './ContactTable.js';
import ContactForm from './ContactForm.js';
import ContactContextProvider from './ContactContext.js';


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
    // Peut mettre balise fermante et on peut envoyer des childrens en props
    // Étape 3 wrapper dans le provider
    <>
      <div>
        <h1>Filterable React List</h1>
        <ContactContextProvider>
          <SearchBar />
          <ContactTable />
          <ContactForm />
        </ContactContextProvider>
      </div>
    </>
  );
}
