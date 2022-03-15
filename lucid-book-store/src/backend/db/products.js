import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Stock Market Investing for Beginners",
    author: "Tycho Press",
    price: "670",
    categoryName: "Stocks",
    image: "./images/product-images/bookstock1.webp",
  },
  {
    _id: uuid(),
    title: "How to Make Money in Stocks",
    author: "William J. O'Neil ",
    price: "700",
    categoryName: "Stocks",
    image: "./images/product-images/bookstock2.jpg",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Akash Patel ",
    price: "99",
    categoryName: "Stocks",
    image: "./images/product-images/bookstock3.jpg",
  },
  {
    _id: uuid(),
    title: "First Step In Stock Market ",
    author: "Sunil Phule & Sandip Phule ",
    price: "243",
    categoryName: "Stocks",
    image: "./images/product-images/bookstock4.webp",
  },
  {
    _id: uuid(),
    title: "Basics of Indian Stock Market",
    author: "ANGSHUMAN ADHIKARI",
    price: "560",
    categoryName: "Stocks",
    image: "./images/product-images/bookstock5.jpg",
  },
  {
    _id: uuid(),
    title: "Forex Trading for Beginners",
    author: "Sykes Bill",
    price: "748",
    categoryName: "Forex",
    image: "./images/product-images/bookforex1.webp",
  },
  {
    _id: uuid(),
    title: "Forex Trading",
    author: "Anderson Richard",
    price: "1516",
    categoryName: "Forex",
    image: "./images/product-images/bookforex2.webp",
  },
  {
    _id: uuid(),
    title: "The Sensible Guide to Forex",
    author: "Wachtel Cliff",
    price: "1200",
    categoryName: "Forex",
    image: "./images/product-images/bookforex3.webp",
  },
  {
    _id: uuid(),
    title: "Forex Trading for Beginners",
    author: "Lowe Mark",
    price: "1298",
    categoryName: "Forex",
    image: "./images/product-images/bookforex4.webp",
  },
  {
    _id: uuid(),
    title: "Forex Trading",
    author: "Anderson Richard",
    price: "1516",
    categoryName: "Forex",
    image: "./images/product-images/bookforex5.webp",
  },
  {
    _id: uuid(),
    title: "The Sensible Guide to Forex",
    author: "Wachtel Cliff",
    price: "1200",
    categoryName: "Crypto",
    image: "./images/product-images/bookcrypto1.webp",
  },
];
