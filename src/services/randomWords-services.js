import { getRandomNum } from "../helpers/helpers";

export const getRandomWords = async (num) => {
  const baseUrl = `https://random-word-api.herokuapp.com/word`;
  const length = getRandomNum(num);
  const response = await fetch(`${baseUrl}?number=${length}`);
  const data = await response.json();
  return data;
};
