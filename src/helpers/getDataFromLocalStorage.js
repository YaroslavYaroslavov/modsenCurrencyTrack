const getDataFromLocalStorage = () => {
  const lastUpdated = localStorage.getItem('lastUpdated') || '2023-09-19T00:00:00Z';
  const data = JSON.parse(localStorage.getItem('data')) || null;
  return { lastUpdated, data };
};
export default getDataFromLocalStorage;
