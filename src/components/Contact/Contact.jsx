import { FaPhone, FaUser } from "react-icons/fa";
import css from "./Contact.module.css";
const Contact = ({ contact, onDelete }) => {
  return (
    <li className={css.wrapper}>
      <div className={css.contactContainer}>
        <span className={css.contactSpan}>
          <FaUser />
          <p>{contact.name}</p>
        </span>
        <span className={css.contactSpan}>
          <FaPhone />
          <p>{contact.number}</p>
        </span>
      </div>
      <button onClick={() => onDelete(contact.id)} className={css.contactBtn}>
        Delete
      </button>
    </li>
  );
};

export default Contact;