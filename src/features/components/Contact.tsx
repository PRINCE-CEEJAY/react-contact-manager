import { Edit, Trash } from 'lucide-react';
import type { ContactType } from '../../hooks/useContact';

interface ContactProps {
  contact: ContactType;
}

export default function Contact({ contact }: ContactProps) {
  function handleUpdate(id: string) {
    const newName = prompt('What is the new name');
    const newNumber = prompt('What is the new number');

    if (newName === null || newNumber === null) return; // Handle cancel

    const data = {
      name: newName.trim(),
      number: newNumber.trim(),
    };

    // handle update
  }
  return (
    <div className='card m-2'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex flex-col items-center flex-1'>
          <h1>{contact.name}</h1>
          <h3>{contact.number}</h3>
        </div>
        <div className='flex items-center gap-2'>
          <button
            className='btn btn-full'
            onClick={() => handleUpdate(contact.id)}
          >
            {' '}
            <Edit />
          </button>
          <button
            className='btn btn-full btn-danger'
            onClick={() => deleteContact(contact.id)}
          >
            {' '}
            <Trash />
          </button>
        </div>
      </div>
    </div>
  );
}
