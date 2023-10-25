import getDataFromLocalStorage from './getDataFromLocalStorage.js';

const calculateValue = (leftCurrencyCode, rightCurrencyCode, converterInput) => {
  const { data } = getDataFromLocalStorage();
  if (data?.data[leftCurrencyCode]?.value && data?.data[rightCurrencyCode]?.value) {
    return (
      (Number(converterInput) / data.data[leftCurrencyCode].value) *
      data.data[rightCurrencyCode].value
    );
  } else return 0;
};
export default calculateValue;
