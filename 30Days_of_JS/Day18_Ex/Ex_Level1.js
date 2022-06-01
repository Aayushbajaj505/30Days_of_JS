/*jshint esversion: 8 */
const countriesAPI = 'https://restcountries.com/v2/all?fields=name,capital,languages,population,area';

const fetchContri = async () => {
    try{
        const response = await fetch(countriesAPI);
        const countries = await response.json();
        console.log(countries);
    }
    catch(err) {
        console.error(err);
    }
};
fetchContri();