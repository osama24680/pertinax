export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': 'da50e867dfmsh62c7b3341bd1710p101c9fjsna24de86db22e',
        // 720ca90955msh45ccc9145a7cc43p146711jsn6a3e9b6c059f
        // 61a27d73eamshf392311691fd7e4p1980a4jsn1673d04294e0
    },
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': '15b423e5c1msh4ed27c6139bfa94p1ee7d4jsnfda6bb6c2fa6',
    },
};

export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};
