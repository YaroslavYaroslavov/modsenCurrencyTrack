const findCoordinatesByCurrency = (banks, suggestion) => {
    const bank = banks.find((bank) => bank.haveCurrency.includes(suggestion));
    if (bank) {
        return bank.coord;
    }
    return null;
};

export default findCoordinatesByCurrency;
