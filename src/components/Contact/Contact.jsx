import { FaPhone, FaUser } from "react-icons/fa";
import css from "./Contact.module.css";
const Contact = ({ contact, onDelete }) => {
  return (
    <li className={css.li}>
      <div className={css.div}>
        <span className={css.span}>
          <FaUser />
          <p>{contact.name}</p>
        </span>
        <span className={css.span}>
          <FaPhone />
          <p>{contact.number}</p>
        </span>
      </div>
      <button onClick={() => onDelete(contact.id)} className={css.btn}>
        Delete
      </button>
    </li>
  );
};

export default Contact;