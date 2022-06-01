/*jshint esversion: 8 */
const catsAPI = 'https://api.thecatapi.com/v1/breeds';
const fetchCat = async () => {
    try{
    const res = await fetch(catsAPI);
    const cat = await res.json();
    console.log(cat);
    }
    catch(err){
      console.error(err);
    }
  };
  fetchCat();