import React from 'react'
import Autosuggest from 'react-autosuggest'
import '../css/Autocomplete.css'

const getSuggestionValue = suggestion => {
  return suggestion.name;
}

const renderSuggestion = suggestion => {
  return (
    <span>{suggestion.name}</span>
  );
}

const Autocomplete = ({ value, suggestions, isLoading, onChange, onSuggestionsFetchRequested, onSuggestionsClearRequested, onSubmit, onSuggestionSelected }) => {
  const inputProps = {
    placeholder: "Search...",
    value,
    onChange
  };
  const status = (isLoading ? 'Loading...' : 'Type to load suggestions');

  return (
    <div>
      <form onSubmit={onSubmit.bind(null,value)}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionSelected={onSuggestionSelected}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps} />
      </form>
    </div>
  );
}

export default Autocomplete
