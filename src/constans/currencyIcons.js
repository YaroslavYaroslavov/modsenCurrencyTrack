import australian_dollar from "../assets/images/card_icons/australian_dollar.png";
import bitcoin from "../assets/images/card_icons/bitcoin.png";
import bovespa from "../assets/images/card_icons/bovespa.png";
import canadian_dollar from "../assets/images/card_icons/canadian_dollar.png";
import dollar from "../assets/images/card_icons/dollar.png";
import euro from "../assets/images/card_icons/euro.png";
import ifix from "../assets/images/card_icons/ifix.png";
import libra from "../assets/images/card_icons/libra.png";
import peso from "../assets/images/card_icons/peso.png";
import won from "../assets/images/card_icons/won.png";
import yen from "../assets/images/card_icons/yen.png";

export const currencyIcons = {
  australian_dollar: {
    icon: australian_dollar,
    displayName: "Australian Dollar",
    currencyText: "A$",
    code: "AUD",
    isCurrency: true,
  },

  bitcoin: {
    icon: bitcoin,
    displayName: "Bitcoin",
    currencyText: "₿",
    code: "BTC",
    isCurrency: true,
  },
  bovespa: {
    icon: bovespa,
    displayName: "Bovespa Index",
    currencyText: null,
    code: "",
    isCurrency: false,
  },
  canadian_dollar: {
    icon: canadian_dollar,
    displayName: "Canadian Dollar",
    currencyText: "C$",
    code: "CAD",
    isCurrency: true,
  },
  dollar: {
    icon: dollar,
    displayName: "Commercial Dollar",
    currencyText: "$",
    code: "USD",
    isCurrency: true,
  },
  euro: {
    icon: euro,
    displayName: "Euro",
    currencyText: "€",
    code: "EUR",
    isCurrency: true,
  },
  ifix: {
    icon: ifix,
    displayName: "IFIX",
    currencyText: null,
    code: "",
    isCurrency: false,
  },
  libra: {
    icon: libra,
    displayName: "Libra",
    currencyText: "£",
    code: "TRY",
    isCurrency: true,
  },
  peso: {
    icon: peso,
    displayName: "Argentine Peso",
    currencyText: "₱",
    code: "ARS",
    isCurrency: true,
  },
  won: {
    icon: won,
    displayName: "Yuan",
    currencyText: "元",
    code: "CNY",
    isCurrency: true,
  },
  yen: {
    icon: yen,
    displayName: "Yen",
    currencyText: "¥",
    code: "JPY",
    isCurrency: true,
  },
};
