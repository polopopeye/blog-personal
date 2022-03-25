import React, { useRef } from 'react';
import twFormater from '../../utils/twFormater';

const SearchIcon = () => {
  return (
    <>
      <div className="inline-flex items-center justify-center absolute left-0 top-1 h-full w-10 text-gray-400">
        <svg
          className="h-6 w-6"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </>
  );
};

function displayResults(searchInput) {
  let idContainer = 'sectionPost';
  let classElement = 'filteredSearch';

  if (document.getElementById(idContainer)) {
    var filter, container, element, i, txtValue;

    filter = searchInput.value.toUpperCase();
    container = document.getElementById(idContainer);
    element = container.getElementsByClassName(classElement);

    let counter = 0;
    for (i = 0; i < element.length; i++) {
      txtValue = element[i].id || element[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        element[i].style.display = '';
      } else {
        element[i].style.display = 'none';
        counter++;
      }
      if (i === element.length - 1) {
        if (counter - 1 === i) {
          document.getElementById('noresultsIndex').style.display = 'block';
        } else {
          document.getElementById('noresultsIndex').style.display = 'none';
        }
      }
    }
  }
}

const SearchInput = () => {
  const searchInputRef = useRef();

  return (
    <div className={twFormater({ base: 'w-full relative pt-3', md: 'flex' })}>
      <SearchIcon />

      <input
        ref={searchInputRef}
        onKeyUp={() => {
          displayResults(searchInputRef.current);
        }}
        onFocus={() => {
          displayResults(searchInputRef.current);
        }}
        type="text"
        className={twFormater({
          base:
            'placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-300 w-full h-10 text-sm',
          sm: 'text-base',
          focus: 'border-indigo-400 outline-none',
        })}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchInput;
