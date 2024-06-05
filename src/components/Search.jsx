import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Search() {
  const query = useQuery();
  const searchTerm = query.get('query');

  return <h2>Search Results for: {searchTerm}</h2>;
}

export default Search;
