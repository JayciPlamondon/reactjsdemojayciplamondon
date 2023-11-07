import {createContext} from 'react';
import {useState} from 'react';
import {data} from './data.js';


// Étape 1 Contexte
export const ContactContext = createContext();

// Étape 2 Provider (ne pas oublier le point entre Context et Provider)
/**
 * ContactContextProvider
 * @param {jsx} children JSX enfant du provider
 * @return {jsx}
 */
function ContactContextProvider({children}) {
  const [contact, setContact] = useState(data); // state contact initialisé à data

  return (
    <ContactContext.Provider value={{contact, setContact}}>
      {children}
    </ContactContext.Provider>);
}

export default ContactContextProvider;
