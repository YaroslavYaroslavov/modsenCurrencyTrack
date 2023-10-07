import './styled.css';

import React, { Component } from 'react';

const BanksCurrencyHave = [
    {
        bankName: 'Приорбанк',
        haveCurrency: ['USD', 'EUR'],
        coord: [55.485576, 28.768349],
    },
    {
        bankName: 'Беларусбанк',
        haveCurrency: ['TRY', 'JPY'],
        coord: [55.490309, 28.780989],
    },
    {
        bankName: 'Белинвестбанк',
        haveCurrency: ['BTC'],
        coord: [55.484639, 28.772916],
    },
];

class AutocompleteInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            suggestions: [],
        };
    }

    findCoordinatesByCurrency = (banks, suggestion) => {
        const bank = banks.find((bank) =>
            bank.haveCurrency.includes(suggestion),
        );
        if (bank) {
            return bank.coord;
        }
        return null;
    };

    handleInputChange = (event) => {
        console.log(this.state.suggestions);
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
        const coord = this.findCoordinatesByCurrency(
            BanksCurrencyHave,
            suggestion,
        );
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
                    placeholder="Currency search..."
                />
                <div className="suggestionWrapper">
                    {inputValue && !suggestions.length ? (
                        <div className="suggestion">Not found</div>
                    ) : (
                        suggestions.map((suggestion) => (
                            <div
                                key={suggestion}
                                className="suggestion"
                                onClick={() =>
                                    this.handleSuggestionClick(suggestion)
                                }
                                onKeyDown={() =>
                                    this.handleSuggestionClick(suggestion)
                                }
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

export default AutocompleteInput;
