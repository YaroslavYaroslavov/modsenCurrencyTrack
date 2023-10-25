import './styled.css';

import React, { PureComponent } from 'react';
import BanksCurrencyHave from 'src/constants/banksData.js';

import AutocompleteInput from './Autocomplete';

class BankCard extends PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.state = {
      ymaps: window.ymaps,
      map: null,
    };
  }

  componentDidMount() {
    this.state.ymaps.ready(() => {
      const myMap = new this.state.ymaps.Map(
        this.mapRef.current,
        {
          center: [55.485576, 28.768349],
          zoom: 14,
        },
        {
          searchControlProvider: 'yandex#search',
        },
      );

      BanksCurrencyHave.forEach((bank) => {
        const placemark = new this.state.ymaps.Placemark(
          bank.coord,
          {
            hintContent: bank.bankName,
            balloonContent: bank.balloonContent,
          },
          {
            iconLayout: 'default#imageWithContent',
            iconImageSize: [50, 50],
            iconImageOffset: [-25, -50],
            iconContentOffset: [15, 15],
          },
        );
        myMap.geoObjects.add(placemark);
      });
      this.setState({
        map: myMap,
      });
    });
  }

  handleZoomPoint = (coord) => {
    const { map } = this.state;
    map.panTo(coord);
    this.mapRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  render() {
    return (
      <div data-testid="Bankcard">
        <AutocompleteInput handleZoomPoint={this.handleZoomPoint} />
        <div ref={this.mapRef} id="map" className="yandexMap"></div>
      </div>
    );
  }
}

export default BankCard;
