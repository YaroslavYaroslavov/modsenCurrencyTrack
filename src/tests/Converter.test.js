import calculateValue from '../helpers/calculateValue';

const data = {
  data: {
    lastUpdated: '2023-09-19T00:00:00Z',
    data: {
      USD: { value: 1 },
      EUR: { value: 0.85 },
      GBP: { value: 0.72 },
    },
  },
};

jest.mock('../helpers/getDataFromLocalStorage.js', () => ({
  __esModule: true,
  default: jest.fn(() => data),
}));

describe('calculateValue', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('вычисляет значение конвертации корректно', () => {
    const fromCurrencyCode = 'USD';
    const toCurrencyCode = 'EUR';
    const converterInput = 100;

    const result = calculateValue(fromCurrencyCode, toCurrencyCode, converterInput);

    expect(result).toBe(85);
  });
  test('Нет левой валюты', () => {
    const fromCurrencyCode = 'USD';
    const toCurrencyCode = 'BTC';
    const converterInput = 100;

    const result = calculateValue(fromCurrencyCode, toCurrencyCode, converterInput);

    expect(result).toBe(0);
  });
});
