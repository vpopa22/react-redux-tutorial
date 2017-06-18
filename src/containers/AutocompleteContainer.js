import { connect } from 'react-redux'
import {updateInputValue, loadSuggestions, clearSuggestions, searchYoutubeApiForIds} from '../actions'
import Autocomplete from '../components/Autocomplete'

const mapStateToProps = state => {
  const { value, suggestions, isLoading } = state.autocomplete;
  return {
    value,
    suggestions,
    isLoading
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onChange(event, { newValue }) {
      dispatch(updateInputValue(newValue));
    },
    onSuggestionsFetchRequested({ value }) {
      dispatch(loadSuggestions(value));
    },
    onSuggestionsClearRequested() {
      dispatch(clearSuggestions());
    },
    onSubmit(value ,event) {
      event.preventDefault();
      dispatch(searchYoutubeApiForIds(value));
    },
    onSuggestionSelected(event, {suggestionValue}){
      dispatch(searchYoutubeApiForIds(suggestionValue));
    }
  };
}

const AutocompleteContainer = connect(mapStateToProps, mapDispatchToProps)(Autocomplete);
export default AutocompleteContainer;
