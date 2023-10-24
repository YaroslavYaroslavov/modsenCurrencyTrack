import getDataFromLocalStorage from './getDataFromLocalStorage.js';
const { data } = getDataFromLocalStorage();

const calculateValue = (leftCurrencyCode, rightCurrencyCode, converterInput) => {
  if (data?.data[leftCurrencyCode]?.value && data?.data[rightCurrencyCode]?.value) {
    return (
      (Number(converterInput) / data.data[leftCurrencyCode].value) *
      data.data[rightCurrencyCode].value
    );
  } else return 0;
};
export default calculateValue;
