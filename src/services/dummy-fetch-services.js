export const getData = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};

const dummyData = [
  {
    id: "aaaaa",
    alt_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    color: "#fff",
    urls: { regular: "https://regular_img" },
    user: { name: "photographerA" },
  },
  {
    id: "bbbbb",
    alt_description: "amet consectetur adipisicing. ",
    color: "#000",
    urls: { regular: "https://regular_img_1234" },
    user: { name: "photographer_B" },
  },
];

const promiseData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(dummyData);
    }, 1000);
  });
};
