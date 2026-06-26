import { type ContactType } from '../hooks/useContact';
import Contact from './Contact';
interface ContactListProps {
  contacts: ContactType[];
  deleteContact: (id: string) => void;
  updateContact: (id: string, data: Partial<ContactType>) => void;
}

export default function ContactList({
  contacts,
  deleteContact,
  updateContact,
}: ContactListProps) {
  return (
    <div className='container'>
      {contacts.length > 0 ? (
        contacts.map((c) => (
          <Contact
            key={c.id}
            contact={c}
            deleteContact={deleteContact}
            updateContact={updateContact}
          />
        ))
      ) : (
        <p className='animate-pulse mt-6'>No Contact yet ...</p>
      )}
    </div>
  );
}
