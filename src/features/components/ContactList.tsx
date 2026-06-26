import { useSelector } from 'react-redux';
import Contact from './Contact';

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts);

  console.log(contacts);

  return (
    <div className='container'>
      <h1 className='fancy-text'>LIST OF ALL CONTACTS </h1>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
        />
      ))}
    </div>
  );
}
