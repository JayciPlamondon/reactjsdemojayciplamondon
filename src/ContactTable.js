import ContactRow from './ContactRow.js';
/** <
 * Table de contact
 * @return {jsx}
 */
export default function ContactTable({contact}) {
  // pour chaque element du tableau, on crée un élément ContactRow en jsx en prop le name, phone, email
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {contact.map((alt, idx) => (
          <ContactRow
            key={idx} // si éléments on un id utiliser alt.id MAIS ici on utilise idx alternativement
            name = {alt.name}
            phone = {alt.phone}
            email = {alt.email}
          />
        ))}
      </tbody>
    </table>
  );
}
