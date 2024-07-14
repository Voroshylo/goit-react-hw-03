import css from './ContactList/ContactList.module.css'
import Contacts from './Contacts.json'

export default function ContactList({ contacts }) {
  return (
    <ul className={css.ul}>
      {contacts.map((contact) =>(
        <li
        className={css.li}
      key={Contacts.id}>
          <Contacts data={contacts} />
          </li>
      ))}
    </ul>
  );
}