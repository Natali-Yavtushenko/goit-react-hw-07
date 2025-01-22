import s from "./List.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContact } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContact);
  const filter = useSelector(selectFilter);
  const filteredData = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(filteredData);

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {filteredData.map((item) => (
          <Contact {...item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
