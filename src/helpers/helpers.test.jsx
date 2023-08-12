// import { vi } from "vitest";
import {
  calcPrice,
  capitalise,
  findVariant,
  // cleanData,
  getNumberWithinRange,
  getRandomNum,
  generateVariantInfo,
  // cartItemData,
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
  const unit = 10;
  const min = 30;
  const range = 10;
  const randPrice = getNumberWithinRange(min, range, unit);
  it("returns price value depending on the arguments", () => {
    expect(randPrice).toBeLessThan(range * unit + 1);
    expect(randPrice).toBeGreaterThan(min - 1);
  });

  it("returns price in the increments of unit", () => {
    expect(randPrice % unit).toBe(0);
  });
});

describe("testing calcPrice()", () => {
  it("returns correct value depending on the case", () => {
    const price = 50;
    const small = calcPrice("small", price);
    const medium = calcPrice("medium", price);
    const large = calcPrice("large", price);

    expect(small).toBe(price);
    expect(medium).toBe(price + 10);
    expect(large).toBe(price + 20);
  });
});

describe("testing capitalise()", () => {
  it("returns capitalised string", () => {
    const arr = ["hello", "world"];
    expect(capitalise(arr)).toBe("Hello World");
  });
});

const variants = [
  { id: "abc+small", size: "10x10", option: "small" },
  { id: "abc+medium", size: "50x70", option: "medium" },
  { id: "abc+large", size: "100x140", option: "large" },
];

describe("testing findVariant() ", () => {
  it("returns an item that matches with passed size", () => {
    const variantObj = findVariant(variants, "small");
    expect(variantObj).toHaveProperty("size", "10x10");
    expect(variantObj).toHaveProperty("id", "abc+small");
    expect(variantObj).toHaveProperty("option", "small");
  });
});

// vi.mock("./helpers", () => ({
//   findVariant: vi.fn(),
//   calcPrice: vi.fn(),
//   capitalise: vi.fn(),
//   getNumberWithinRange: vi.fn(),
// }));

// let apples = 0
// const cart = {
//   getApples: () => 13,
// }

// const spy = vi.spyOn(cart, 'getApples').mockImplementation(() => apples)
// apples = 1

// expect(cart.getApples()).toBe(1)

// expect(spy).toHaveBeenCalled()
// expect(spy).toHaveReturnedWith(1)

// https://vitest.dev/api/vi.html#vi-spyon

// 🚨 TypeError: findVariant2.mockReturnValue is not a function
// describe("testing generateVariantInfo", () => {
//   it("returns an object with certain format", () => {
//     const findVariant = {
//       getVariant: () => ({
//         id: "123+medium",
//         option: "medium",
//         size: "50x70",
//       }),
//     };
//     // const spy = vi.spyOn(findVariant, 'getVariant').mockImplementation(() => );
//     const size = "medium";

//     findVariant.mockReturnValue({
//       id: "123+medium",
//       option: "medium",
//       size: "50x70",
//     });

//     const variantInfo = generateVariantInfo(variants, size);

//     const expectedResult = {
//       variantId: "123+medium",
//       variantOption: "medium",
//       variantSize: "50x70",
//     };

//     expect(variantInfo).toEqual(expectedResult);
//     // expect(result).toHaveProperty(variantId);
//   });
// });

// const dummyData = [
//   {
//     id: "abc123",
//     image: "regular_url",
//     title: "random words",
//     artist: "Alice Brown",
//     variants: [
//       { id: "abc123+small", option: "small", size: "30x40" },
//       { id: "abc123+medium", option: "medium", size: "50x70" },
//     ],
//     price: 50,
//   },
// ];

// describe("testing cartItemData()", () => {
//   it("returns an object with certain calculated properties", () => {
//     const findVariant = vi.fn();
//     const updatedPrice = vi.fn();

//     const result = cartItemData(dummyData, "small");
//     expect(result).toHaveProperty(id);
//   });
// });

// describe("testing cleanData()", () => {
//   /// ReferenceError: jest is not defined 🚨
//   vi.mock("./helper", () => ({
//     getRandomWords: vi.fn(),
//     capitalise: vi.fn(),
//     getNumberWithinRange: vi.fn(),
//   }));

//   getRandomWords.mockResolvedValue(["random", "words"]);
//   capitalise.mockImplementation((str) => `Capitalised: ${str}`);
//   getNumberWithinRange.mockReturnValue(50);

//   it("returns an object with certain properties", async () => {
//     const dummyData = [
//       {
//         alt_description: "sample description",
//         color: "#fff",
//         id: "abc123",
//         urls: {
//           regular: "regular_url",
//           small: "small_url",
//         },
//         user: {
//           name: "Alice Brown",
//         },
//         height: 1200,
//         width: 800,
//       },
//     ];
//     const collection = "urban";
//     const cleanedData = await cleanData(dummyData, collection);

//     expect(cleanedData).toHaveProperty("id", "abc123");

//     // expect(getRandomWords).toHaveBeenCalledWith(2);
//     // expect(capitalise).toHaveBeenCalledTimes(2);
//     // expect(getNumberWithinRange).toHaveBeenCalledTimes(2);
//   });
// });
