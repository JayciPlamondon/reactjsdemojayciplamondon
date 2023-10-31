import ContactRow from './ContactRow.js';
/** <
 * Table de contact
 * @return {jsx}
 */
export default function ContactTable() {
  // donnée hardcodé pour l'exemple
  const data = [
    {
      name: 'Tom Jackson',
      phone: '444-555-6666',
      email: 'tom@gmail.com',
    },
    {
      name: 'Deuxième Nom',
      phone: '666-555-4444',
      email: 'deuxieme@gmail.ca',
    },
  ];

  // pour chaque element du tableau, on crée un élément ContactRow en jsx en prop le name, phone, email
  const jsxData = data.map((alt) => (
    <ContactRow
      name = {alt.name}
      phone = {alt.phone}
      email = {alt.email}
    />
  ));

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>email</th>
      </tr>
      {jsxData}
    </table>
  );
}
