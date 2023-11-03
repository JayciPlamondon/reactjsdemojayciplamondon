/**
 * @param {*} props
 * @return {jsx}
 */
export default function ContactRow({name, phone, email}) { // déconstruction de props (si on connait le nombre de props)
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
      </tr>
    </>
  );
}
