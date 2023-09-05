import { getRandomWords } from "../services/randomWords-services";

export const getRandomNum = (limit) => Math.floor(Math.random() * limit) + 1;

// export const getRandomWords = async (num) => {
//   const baseUrl = `https://random-word-api.herokuapp.com/word`;
//   const length = getRandomNum(num);
//   const response = await fetch(`${baseUrl}?number=${length}`);
//   const data = await response.json();
//   return data;
// };

export const getNumberWithinRange = (minimum, range, unit = 10) => {
  let rand = 0;
  while (rand < minimum) {
    rand = getRandomNum(range) * unit;
  }
  return rand;
};

export const calcPrice = (variant, price) => {
  switch (variant) {
    case "medium":
      return price + 10;
    case "large":
      return price + 20;
    default:
      return price;
  }
};

export const capitalise = (data) => {
  if (typeof data === "string") {
    return data.charAt(0).toUpperCase() + data.slice(1);
  }
  return data
    .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
    .join(" ");
};

export const findVariant = (variants, size) =>
  variants?.find((va) => va.option === size);

export const generateVariantInfo = (variants, size) => {
  const result = findVariant(variants, size);
  const { size: variantSize, id: variantId, option: variantOption } = result;
  return { variantId, variantOption, variantSize };
};

export const cartItemData = (item, size) => {
  const { id, image, title, artist, price, variants } = item;

  const variantsInfo = generateVariantInfo(variants, size);
  const updatedPrice = calcPrice(size, price);

  return {
    id: id,
    image,
    title,
    artist,
    ...variantsInfo,
    priceInVariant: updatedPrice,
    quantity: 1,
  };
};

export const getUserName = (user) =>
  user ? user.name ?? user.username : "unknown";

export const getOrientation = (width, height) =>
  height > width ? "portrait" : "landscape";

export const getDescription = async (alt_description) => {
  const additionalDesc = await getRandomWords(50);
  return capitalise(alt_description) + ". " + capitalise(additionalDesc);
};

export const getTitle = async () => {
  const wordsList = await getRandomWords(2);
  return capitalise(wordsList);
};

export const generateVariants = (id) => {
  return [
    { id: id + "+" + "small", option: "small", size: "30x40" },
    { id: id + "+" + "medium", option: "medium", size: "50x70" },
    { id: id + "+" + "large", option: "large", size: "100x140" },
  ];
};

export const getImageUrl = (urls) =>
  urls ? urls.regular ?? urls.small ?? urls.thumb ?? urls.full ?? urls.raw : "";

export const cleanData = async (data, collection) => {
  const { alt_description, color, id, urls, user, height, width } = data;

  const image = getImageUrl(urls);
  const artist = getUserName(user);
  const orientation = getOrientation(width, height);
  const title = await getTitle();
  const description = await getDescription(alt_description);

  return {
    title,
    id,
    artist,
    image,
    description,
    color,
    orientation,
    price: getNumberWithinRange(30, 7),
    quantity: getNumberWithinRange(20, 9),
    variants: generateVariants(id),
    collection,
    cart: [],
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
