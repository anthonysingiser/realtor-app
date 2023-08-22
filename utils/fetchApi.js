// import axios from "axios";

// export const baseUrl = 'https://bayut.p.rapidapi.com/auto-complete'

// export const fetchApi = async (url) => {
//     const { data } = await axios.get((url), {
//         headers : {
//             'x-rapidapi-host': 'bayut.p.rapid.api.com',
//             'x-rapidapi-key': '280decefc9msh6351b84dfa69897p1f25b2jsnece4de295cb3'
//         },
//     })
//     return data
// }

import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com/auto-complete'

const options = {
  method: 'GET',
  url: baseUrl,
  headers: {
    'X-RapidAPI-Key': '280decefc9msh6351b84dfa69897p1f25b2jsnece4de295cb3',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
};

export const fetchApi = async(url) => {
    try {
        const { data } = await axios.get((url), options);
	    console.log(url)
        console.log(data);

        return data

    } catch (error) {
	    console.error(error);
    }
 
}