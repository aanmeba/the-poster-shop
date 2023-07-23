const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const baseUrl = `https://api.unsplash.com/search`;

// photos or collections
export const setQuery = (category, query) => `/${category}?query=${query}`;

export const getImagesByQuery = async (category, searchTerm) => {
  const query = setQuery(category, searchTerm);
  const response = await fetch(baseUrl + query, {
    headers: {
      Authorization: `Client-ID ${UNSPLASH_KEY}`,
    },
  });

  if (!response.ok) throw new Error("Something went wrong with the server");

  const data = await response.json();

  return data.results;
};
