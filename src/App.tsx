import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { useContact } from './hooks/useContact';

export default function App() {
  const { contacts, addContact, deleteContact, updateContact } = useContact();
  return (
    <div className='container'>
      <h1 className='fancy-text uppercase'>Contact Manager</h1>
      <ContactForm addContact={addContact} />
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        updateContact={updateContact}
      />
    </div>
  );
}
