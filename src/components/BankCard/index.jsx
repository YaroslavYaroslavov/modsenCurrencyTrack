import React, { Component } from "react";
import AutocompleteInput from "../Autocomplete";
import "./styled.css";

class BankCard extends Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.state = {
      map: null,
    };
  }

  componentDidMount() {
    ymaps.ready(() => {
      const myMap = new ymaps.Map(
        this.mapRef.current,
        {
          center: [55.485576, 28.768349],
          zoom: 14,
        },
        {
          searchControlProvider: "yandex#search",
        }
      );

      const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      );
      const myPlacemarkWithContent_1 = new ymaps.Placemark(
        [55.486708, 28.766903],
        {
          hintContent: "Приорбанк",
          balloonContent: "улица Евфросиньи Полоцкой, 1А",
        },
        {
          iconLayout: "default#imageWithContent",
          iconImageSize: [50, 50],
          iconImageOffset: [-25, -50],
          iconContentOffset: [15, 15],
          iconContentLayout: MyIconContentLayout,
        }
      );
      const myPlacemarkWithContent_2 = new ymaps.Placemark(
        [55.490309, 28.780989],
        {
          hintContent: "Беларусбанк",
          balloonContent: "Октябрьская улица, 39, Полоцк, Витебская область",
        },
        {
          iconLayout: "default#imageWithContent",
          iconImageSize: [50, 50],
          iconImageOffset: [-25, -50],
          iconContentOffset: [15, 15],
          iconContentLayout: MyIconContentLayout,
        }
      );
      const myPlacemarkWithContent_3 = new ymaps.Placemark(
        [55.484639, 28.772916],
        {
          hintContent: "Белинвестбанк",
          balloonContent:
            "проспект Франциска Скорины, 24, Полоцк, Витебская область",
        },
        {
          iconLayout: "default#imageWithContent",
          iconImageSize: [50, 50],
          iconImageOffset: [-25, -50],
          iconContentOffset: [15, 15],
          iconContentLayout: MyIconContentLayout,
        }
      );

      // Добавляем маркеры на карту
      myMap.geoObjects
        .add(myPlacemarkWithContent_1)
        .add(myPlacemarkWithContent_2)
        .add(myPlacemarkWithContent_3);

      this.setState({
        map: myMap,
      });
    });
  }

  handleZoomPoint = (coord) => {
    const { map } = this.state;
    map.panTo(coord);
    this.mapRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  render() {
    return (
      <>
        <AutocompleteInput handleZoomPoint={this.handleZoomPoint} />
        <div
          ref={this.mapRef}
          id="map"
          style={{ width: 100 + "%", height: 400 + "px" }}
        ></div>
      </>
    );
  }
}

export default BankCard;
