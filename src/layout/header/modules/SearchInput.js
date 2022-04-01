import { SearchIcon } from '@heroicons/react/solid';
import React, { useRef } from 'react';
import twFormater from '../../../components/utils/twFormater';

function displayResults(searchInput) {
  function searchNormalize(text) {
    const accVocalNormalization = {
      á: 'a',
      é: 'e',
      í: 'i',
      ó: 'o',
      ú: 'u',
      ü: 'u',
      à: 'a',
      è: 'e',
      ì: 'i',
      ò: 'o',
      ù: 'u',
      â: 'a',
      ê: 'e',
      î: 'i',
      ô: 'o',
      û: 'u',
      ä: 'a',
      ë: 'e',
      ï: 'i',
      ö: 'o',
      ç: 'c',
      ñ: 'n',
      z: 's',
      c: 's',
      ß: 's',
    };

    const nextText = text.toLowerCase().replace(/[^\s\d]/g, (x) => {
      let response = x;
      for (let i = 0; i < Object.keys(accVocalNormalization).length; i++) {
        const key = Object.keys(accVocalNormalization)[i];
        if (key === x) {
          response = accVocalNormalization[key];
          break;
        }
      }
      return response;
    });

    return nextText.replace(/\W/gm, '');
  }

  let classElement = 'filteredSearch';
  const elements = document.getElementsByClassName(classElement);

  if (elements.length > 0) {
    const filter = searchNormalize(searchInput.value);

    if (filter.length === 0 && window.location.pathname !== '/') {
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.style.display = 'none';
      }
      return;
    }

    let numberOfMatches = 0;
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const txtValue = element.innerText;
      if (searchNormalize(txtValue).indexOf(filter) > -1) {
        element.style.display = '';
        numberOfMatches++;
      } else {
        element.style.display = 'none';
      }
    }

    if (numberOfMatches > 0) {
      document.getElementById('noresultsIndex').style.display = 'none';
    } else {
      if (filter.length !== 0)
        document.getElementById('noresultsIndex').style.display = 'block';
    }
  }
}

const SearchInput = () => {
  const searchInputRef = useRef();

  return (
    <>
      <div className={twFormater({ base: 'w-full relative pt-3', md: 'flex' })}>
        <div className="inline-flex items-center justify-center absolute left-1 top-1 h-full w-8 text-primary">
          <SearchIcon />
        </div>
        <input
          ref={searchInputRef}
          onKeyUp={() => {
            displayResults(searchInputRef.current);
          }}
          onFocus={() => {
            displayResults(searchInputRef.current);
          }}
          onBlur={() => {
            if (window.location.pathname !== '/') {
              setTimeout(() => {
                document.getElementById('noresultsIndex').style.display =
                  'none';
                for (
                  let i = 0;
                  i < document.getElementsByClassName('filteredSearch').length;
                  i++
                ) {
                  const itemSearch = document.getElementsByClassName(
                    'filteredSearch'
                  )[i];
                  itemSearch.style.display = 'none';
                }
              }, 500);
            }
          }}
          type="text"
          className={twFormater({
            base:
              'placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-300 w-full h-10 text-sm bg-quaternary text-primary',
            sm: 'text-base',
            focus: 'border-indigo-400 outline-none',
          })}
          placeholder="Search..."
        />
      </div>
    </>
  );
};

export default SearchInput;
