export const getRandomNum = (limit) => Math.floor(Math.random() * limit) + 1;

export const getRandomTitle = async () => {
  const baseUrl = `https://random-word-api.herokuapp.com/word`;
  const length = getRandomNum(3);
  const response = await fetch(`${baseUrl}?number=${length}`);
  const data = await response.json();
  return data;
};

export const getPrice = () => {
  let rand = 0;
  while (rand < 30) {
    rand = getRandomNum(7) * 10;
  }
  return rand;
};

export const capitalise = (strArr) => {
  return strArr
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(" ");
};

export const cleanData = async (data) => {
  const { alt_description, color, id, urls, user, height, width } = data;
  const image = urls
    ? urls.regular ?? urls.small ?? urls.thumb ?? urls.full ?? urls.raw
    : "";

  const name = user ? user.name ?? user.username : "unknown";
  const orientation = height > width ? "portrait" : "landscape";
  const wordsList = await getRandomTitle();
  const title = capitalise(wordsList);

  return {
    title: title || null,
    id: id || null,
    artist: name || null,
    image: image || null,
    description: alt_description || null,
    color: color,
    orientation: orientation,
    favourite: false,
    price: getPrice() || null,
    sizes: { small: "30x40", medium: "50x70", large: "100x140" },
  };
};
