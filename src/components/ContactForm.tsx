import { useState, type FormEvent } from 'react';
import type { ContactType } from '../hooks/useContact';

interface ContactFormProps {
  addContact: (contact: Omit<ContactType, 'id'>) => void;
}
export default function ContactForm({ addContact }: ContactFormProps) {
  const [contactInput, setContactInput] = useState({ name: '', number: '' });

  function handleAddContact(e: FormEvent) {
    e.preventDefault();
    if (!contactInput.name && !contactInput.number) {
      alert('please fill the input filleds');
      return;
    }
    addContact(contactInput);
    setContactInput({ name: '', number: '' });
  }

  return (
    <div className='container mt-6'>
      <form className='flex items-center gap-2'>
        <input
          placeholder='Enter contact fullname'
          value={contactInput.name}
          onChange={(e) =>
            setContactInput((prev) => ({ ...prev, name: e.target.value }))
          }
        />

        <input
          placeholder='Enter contact number'
          value={contactInput.number}
          onChange={(e) =>
            setContactInput((prev) => ({
              ...prev,
              number: e.target.value,
            }))
          }
        />
        <button
          className='btn'
          onClick={handleAddContact}
        >
          Add
        </button>
      </form>
    </div>
  );
}
