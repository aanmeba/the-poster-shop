import {
  capitalise,
  cleanData,
  getNumberWithinRange,
  getRandomNum,
} from "./helpers";

/* eslint-disable no-undef */
describe("testing getRandomNum()", () => {
  it("returns value depending on the param", () => {
    const betweenOneToThree = getRandomNum(3);
    expect(betweenOneToThree).toBeLessThan(4);
    expect(betweenOneToThree).toBeGreaterThan(0);
  });
});

describe("testing getNumberWithinRange()", () => {
  const randPrice = getNumberWithinRange();
  it("returns price value between 30 and 70", () => {
    expect(randPrice).toBeLessThan(80);
    expect(randPrice).toBeGreaterThan(29);
  });

  it("returns price in the increments of 10", () => {
    expect(randPrice % 10).toBe(0);
  });
});

describe("testing capitalise()", () => {
  it("returns capitalised string", () => {
    const arr = ["hello", "world"];
    expect(capitalise(arr)).toBe("Hello World");
  });
});

// describe("testing cleanData()", () => {
// it("has null value if the data is falsy value", async () => {
//   const dummyData = [
//     {
//       id: "aaaaa",
//       alt_description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
//       color: "#fff",
//       urls: { regular: "https://regular_img" },
//       user: { name: "photographerA" },
//     },
//     {
//       id: "bbbbb",
//       alt_description: "amet consectetur adipisicing. ",
//       color: "#000",
//       urls: { regular: "https://regular_img_1234" },
//       user: { name: "photographer_B" },
//     },
//   ];
//   expect(cleanData(dummyData)).toHaveProperty("id", "aaaaa");
// });
// });
