const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

const fetchData = async () => {
    try {
        const lastUpdated = JSON.parse(localStorage.getItem('data'))?.meta
            ?.last_updated_at;
        const currentTime = new Date();

        if (
            !lastUpdated ||
            currentTime - new Date(lastUpdated) >= TWENTY_FOUR_HOURS
        ) {
            const response = await fetch(process.env.REACT_APP_CONVERTER_URL);
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
