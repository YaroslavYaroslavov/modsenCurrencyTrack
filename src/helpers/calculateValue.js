import getDataFromLocalStorage from '../helpers/getDataFromLocalStorage.js';
const { data } = getDataFromLocalStorage();

const calculateValue = (fromCurrencyCode, toCurrencyCode, converterInput) => {
  if (data?.data[fromCurrencyCode]?.value && data?.data[toCurrencyCode]?.value) {
    return (
      (Number(converterInput) / data.data[fromCurrencyCode].value) * data.data[toCurrencyCode].value
    );
  } else return 0;
};
export default calculateValue;
