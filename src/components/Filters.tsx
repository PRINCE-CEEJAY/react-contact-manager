import { useState } from 'react';
import type { ContactType } from '../hooks/useContact';
import { useDebouncedSearch } from '../hooks/useDebouncedSearch';
export default function Filters() {
  const [searchInput, setSearchInput] = useState('');
  const debouncedValue = useDebouncedSearch(searchInput);

  return (
    <div className='card flex items-center mt-12'>
      <input
        placeholder='Search for Contact ...'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button
        className='btn btn-full'
        onClick={() => {}}
      >
        Search
      </button>
    </div>
  );
}
