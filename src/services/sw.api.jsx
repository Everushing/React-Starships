

const baseUrl = 'https://swapi.dev/api';

export async function getAllStarships() {
  const response = await fetch(`${baseUrl}/starships/`);
  const data = await response.json();
  return data.results; 
}
