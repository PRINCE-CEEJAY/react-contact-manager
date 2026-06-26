import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../contactSlice';
export default function ContactForm() {
  const [contactInput, setContactInput] = useState({ name: '', number: '' });

  const dispatch = useDispatch()

  function handleAddContact(e: FormEvent) {
    e.preventDefault();
    if (!contactInput.name.trim() && !contactInput.number.trim()) return;

    dispatch(addContact(contactInput));
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
