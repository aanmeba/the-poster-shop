export const getRandomNum = (limit) => Math.floor(Math.random() * limit) + 1;

export const getRandomWords = async (num) => {
  const baseUrl = `https://random-word-api.herokuapp.com/word`;
  const length = getRandomNum(num);
  const response = await fetch(`${baseUrl}?number=${length}`);
  const data = await response.json();
  return data;
};

export const getNumberWithinRange = (minimum, range, unit = 10) => {
  let rand = 0;
  while (rand < minimum) {
    rand = getRandomNum(range) * unit;
  }
  return rand;
};

export const capitalise = (data) => {
  if (typeof data === "string") {
    return data.charAt(0).toUpperCase() + data.slice(1);
  }
  return data
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(" ");
};

export const cleanData = async (data, collection) => {
  const { alt_description, color, id, urls, user, height, width } = data;
  const image = urls
    ? urls.regular ?? urls.small ?? urls.thumb ?? urls.full ?? urls.raw
    : "";

  const name = user ? user.name ?? user.username : "unknown";
  const orientation = height > width ? "portrait" : "landscape";
  const wordsList = await getRandomWords(2);
  const title = capitalise(wordsList);
  const additionalDesc = await getRandomWords(50);
  const description =
    capitalise(alt_description) + ". " + capitalise(additionalDesc);

  return {
    title: title || null,
    id: id || null,
    artist: name || null,
    image: image || null,
    description,
    color,
    orientation: orientation,
    favourite: false,
    price: getNumberWithinRange(30, 7) || null,
    quantity: getNumberWithinRange(20, 9),
    sizes: { small: "30x40", medium: "50x70", large: "100x140" },
    collection,
  };
};

export const chunkArray = (array, size) => {
  return array.reduce((prev, _, i) => {
    if (i % size === 0) {
      prev.push(array.slice(i, i + size));
    }
    return prev;
  }, []);
};

export const checkAvailability = (num) => {
  return num === 0 ? "Not" : num > 1 ? num + " pieces" : num + " piece";
};

export const clearLocalStorage = (key) => {
  localStorage.removeItem(key);
  console.log(`Item with key "${key}" removed from localStorage.`);
};
