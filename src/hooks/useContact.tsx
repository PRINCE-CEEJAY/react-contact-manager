import { useEffect, useState } from 'react';

export interface ContactType {
  id: string;
  name: string;
  number: string;
  imgSrc?: string;
}

export function useContact() {
  const [contacts, setContacts] = useState<ContactType[]>(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  useEffect(() => {
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (error) {
      console.log('error while saving to local storage', error);
    }
  }, [contacts]);

  function addContact(contact: Omit<ContactType, 'id'>) {
    const newContact = {
      id: crypto.randomUUID(),
      ...contact,
    };
    setContacts((prev) => [...prev, newContact]);
  }

  function deleteContact(id: string) {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  }

  function updateContact(id: string, data: Partial<Omit<ContactType, 'id'>>) {
    setContacts((prev) =>
      prev.map((contact) =>
        contact.id === id ? { ...contact, ...data } : contact,
      ),
    );
  }

  // function filterContacts(search: string) {
  //   if (!search.trim()) return contacts;
  //   else {
  //     setContacts((prev) =>
  //       prev.filter((contact) => {
  //         return (
  //           contact.name.toLowerCase().includes(search.toLowerCase()) &&
  //           contact.number.toLowerCase().includes(search.toLowerCase())
  //         );
  //       }),
  //     );
  //   }
  // }

  return { contacts, addContact, deleteContact, updateContact };
}
