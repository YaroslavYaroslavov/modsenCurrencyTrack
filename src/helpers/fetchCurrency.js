const fetchData = async () => {
    try {
        const lastUpdated = JSON.parse(localStorage.getItem('data'))?.meta
            ?.last_updated_at;
        const currentTime = new Date();
        const twentyFourHours = 24 * 60 * 60 * 1000;

        if (
            !lastUpdated ||
            currentTime - new Date(lastUpdated) >= twentyFourHours
        ) {
            const response = await fetch(
                `https://api.currencyapi.com/v3/latest?apikey=${process.env.REACT_APP_API_KEY}&currencies=EUR%2CUSD%2CCAD%2CARS%2CJPY%2CAUD%2CCNY%2CBTC%2CTRY`,
            );
            const data = await response.json();
            localStorage.setItem('lastUpdated', data.meta.last_updated_at);
            localStorage.setItem('data', JSON.stringify(data));
            return data;
        } else return JSON.parse(localStorage.getItem('data'));
    } catch (error) {
        throw new Error('Failed to fetch data from the server');
    }
};
export default fetchData;
