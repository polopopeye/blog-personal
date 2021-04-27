import React from "react"
const SearchIcon = () => {
  return (
    <>
      <div class="inline-flex items-center justify-center absolute left-0 top-1 h-full w-10 text-gray-400">
        <svg
          class="h-6 w-6"
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
  )
}

const SearchInput = () => {
  return (
    <>
      <div class="w-full md:flex relative pt-3">
        <SearchIcon />

        <input
          id="search"
          type="text"
          name="search"
          class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-300 w-full h-10 focus:outline-none focus:border-indigo-400"
          placeholder="Search..."
        />
      </div>
    </>
  )
}

export default SearchInput
