import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: crypto.randomUUID(),
    name: 'Prince Ceejay NG',
    number: '09159404307',
    createdAt: new Date().toLocaleTimeString(),
  },
];

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      const newContact = {
        id: crypto.randomUUID(),
        ...action.payload,
      };
      state.push(newContact);
    },
    deleteContact: (state, action) => {
      const index = state.findIndex((contact) => contact.id == action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    updateContact: (state, action) => {
      const contact = state.find((item) => item.id === action.payload);
      if (contact) {
        contact.name = action.payload.name;
        contact.number = action.payload.number;
      }
    },
  },
});

export const { addContact, deleteContact, updateContact } =
  contactSlice.actions;
export default contactSlice.reducer;
