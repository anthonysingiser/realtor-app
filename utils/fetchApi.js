import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
  const options = {
    headers: {
      'X-RapidAPI-Key': '280decefc9msh6351b84dfa69897p1f25b2jsnece4de295cb3',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  }
  const { data } = await axios.get((url), options);
  
  return data
}