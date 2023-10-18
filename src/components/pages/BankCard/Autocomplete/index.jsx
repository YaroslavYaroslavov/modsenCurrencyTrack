import './styled.css';

import PropTypes from 'prop-types';
import React from 'react';
import BanksCurrencyHave from 'src/constants/banksData.js';
import findCoordinatesByCurrency from 'src/helpers/findCoordByCur.js';

import autocompleteConfig from './config.js';

const { notFoundMessage } = autocompleteConfig;
class AutocompleteInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      suggestions: [],
    };
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({ inputValue: value });
    if (value) {
      const mockSuggestions = Array.from(
        new Set(BanksCurrencyHave.flatMap((bank) => bank.haveCurrency)),
      );
      const filteredSuggestions = mockSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(value.toLowerCase()),
      );

      this.setState({ suggestions: filteredSuggestions });
    } else {
      this.setState({ suggestions: [] });
    }
  };

  handleSuggestionClick = (suggestion) => {
    const coord = findCoordinatesByCurrency(BanksCurrencyHave, suggestion);
    if (coord) {
      this.props.handleZoomPoint(coord);
    }
    this.setState({ inputValue: '', suggestions: [] });
  };

  render() {
    const { inputValue, suggestions } = this.state;
    return (
      <div className="autocompleteInputWrapper">
        <input
          className="autocompleteInput"
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
          placeholder="Type currency code"
        />
        <div className="suggestionWrapper">
          {inputValue && !suggestions.length ? (
            <div className="suggestion">{notFoundMessage}</div>
          ) : (
            suggestions.map((suggestion) => (
              <div
                key={suggestion}
                className="suggestion"
                onClick={this.handleSuggestionClick.bind(this, suggestion)}
              >
                {suggestion}
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}
AutocompleteInput.propTypes = {
  handleZoomPoint: PropTypes.func,
};
export default AutocompleteInput;
