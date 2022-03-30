import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    id: "stock1",
    title: "Stock Market Investing for Beginners",
    author: "Tycho Press",
    price: "670",
    categoryName: "Stocks",
    rating: 5,
    badge: "Best seller",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376991/Lucid%20book%20store/bookstock1_cbi9lg.webp",
  },
  {
    _id: uuid(),
    id: "stock2",
    title: "How to Make Money in Stocks",
    author: "William J. O'Neil ",
    price: "700",
    rating: 3,
    categoryName: "Stocks",
    badge: "Newly Added",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376992/Lucid%20book%20store/bookstock2_vl9ysq.jpg",
  },
  {
    _id: uuid(),
    id: "stock3",
    title: "Think and Grow Rich",
    author: "Akash Patel ",
    price: "99",
    rating: 2,
    categoryName: "Stocks",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376991/Lucid%20book%20store/bookstock3_de3jig.jpg",
  },
  {
    _id: uuid(),
    id: "stock4",
    title: "First Step In Stock Market ",
    author: "Sunil Phule & Sandip Phule ",
    price: "243",
    rating: 4,
    categoryName: "Stocks",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376992/Lucid%20book%20store/bookstock4_gkad3o.webp",
  },
  {
    _id: uuid(),
    id: "stock5",
    title: "Basics of Indian Stock Market",
    author: "ANGSHUMAN ADHIKARI",
    price: "560",
    rating: 4,
    categoryName: "Stocks",
    badge: "Lucid Exclusive",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376993/Lucid%20book%20store/bookstock5_owjdo7.jpg",
  },
  {
    _id: uuid(),
    title: "Forex Trading for Beginners",
    id: "forex1",
    author: "Sykes Bill",
    price: "748",
    rating: 1,
    categoryName: "Forex",
    badge: "Best Seller",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376989/Lucid%20book%20store/bookforex1_bgdgvz.webp",
  },
  {
    _id: uuid(),
    title: "Forex Trading",
    id: "forex2",
    author: "Anderson Richard",
    price: "1516",
    rating: 5,
    categoryName: "Forex",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376989/Lucid%20book%20store/bookforex2_jgdaj1.webp",
  },
  {
    _id: uuid(),
    title: "The Sensible Guide to Forex",
    id: "forex3",
    author: "Wachtel Cliff",
    price: "1200",
    rating: 3,
    categoryName: "Forex",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376989/Lucid%20book%20store/bookforex3_jokyu1.webp",
  },
  {
    _id: uuid(),
    title: "Forex Trading for Beginners",
    id: "forex4",
    author: "Lowe Mark",
    price: "1298",
    rating: 4,
    categoryName: "Forex",
    badge: "Lucid Exclusive",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376990/Lucid%20book%20store/bookforex4_cdoavb.webp",
  },
  {
    _id: uuid(),
    title: "Forex Trading",
    id: "forex5",
    author: "Anderson Richard",
    price: "1516",
    rating: 3,
    categoryName: "Forex",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376990/Lucid%20book%20store/bookforex5_up193x.webp",
  },
  {
    _id: uuid(),
    id: "crypto1",
    title: "How to Make Money in Crypto",
    author: "Charles Sanger",
    price: "381",
    rating: 1,
    categoryName: "Crypto",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376993/Lucid%20book%20store/bookcrypto1_bgv0v2.jpg",
  },
  {
    _id: uuid(),
    id: "crypto2",
    title: "Crypto Trading Strategies",
    author: "Scotty Ratford ",
    price: "223",
    rating: 3,
    categoryName: "Crypto",
    badge: "Newly Added",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376989/Lucid%20book%20store/bookcrypto2_fhxwxv.jpg",
  },
  {
    _id: uuid(),
    id: "crypto3",
    title: "The Crypto Trader",
    author: "The Crypto Trader",
    price: "1633",
    rating: 5,
    categoryName: "Crypto",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376989/Lucid%20book%20store/bookcrypto3_regrzb.jpg",
  },
  {
    _id: uuid(),
    id: "crypto4",
    title: "Bitcoin and Cryptocurrency Trading for Beginners 2021",
    author: "Nicholas Scott",
    price: "1859",
    rating: 1,
    categoryName: "Crypto",
    badge: "Best Seller",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376989/Lucid%20book%20store/bookcrypto4_dod9us.jpg",
  },
  {
    _id: uuid(),
    id: "crypto5",
    title: "CRYPTO TRADING",
    author: "Nicholas Scott",
    price: "1477",
    rating: 4,
    categoryName: "Crypto",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376989/Lucid%20book%20store/bookcrypto5_kmg78r.jpg",
  },
  {
    _id: uuid(),
    id: "investment1",
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    price: "479",
    rating: 2,
    categoryName: "Investment",
    badge: "Lucid Exclusive",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376991/Lucid%20book%20store/bookinvest1_ssy2de.jpg",
  },
  {
    _id: uuid(),
    id: "investment2",
    title: "One Up On Wall Street",
    author: "Lynch",
    price: "360",
    rating: 5,
    categoryName: "Investment",
    badge: "Lucid Exclusive",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648642379/Lucid%20book%20store/bookinvest2_kg3f23.webp",
  },
  {
    _id: uuid(),
    id: "investment3",
    title: "Rich Dad Poor Dad",
    author: "Kiyosaki Robert",
    price: "325",
    rating: 3,
    categoryName: "Investment",
    badge: "Best Seller",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648642663/Lucid%20book%20store/bookinvest3_zm0ua3.webp",
  },
  {
    _id: uuid(),
    id: "investment4",
    title: "Bulls, Bears and Other Beasts",
    author: "Nair Santosh",
    price: "481",
    rating: 4,
    categoryName: "Investment",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648642783/Lucid%20book%20store/bulls-bears-and-other-beasts-original-imafy2x9my9ctahf_a0qkr3.webp",
  },
  {
    _id: uuid(),
    id: "investment5",
    title: "The Money Manual",
    author: "Rapley Tonya B",
    price: "1319",
    rating: 2,
    categoryName: "Investment",
    badge: "Newly Added",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648642947/Lucid%20book%20store/bookinvest5_v7syba.webp",
  },
  {
    _id: uuid(),
    id: "charting1",
    title: "Make Money With Price Action Trading",
    author: "Sunil Gurjar",
    price: "330",
    rating: 4,
    categoryName: "Charting",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648643488/Lucid%20book%20store/bookcharting1_b2rf4u.webp",
  },
  {
    _id: uuid(),
    id: "charting2",
    title: "How to Make Money With Breakout Trading",
    author: "Indrazith Shantharaj",
    price: "289",
    rating: 5,
    categoryName: "Charting",
    badge: "Lucid Exclusive",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648643630/Lucid%20book%20store/bookcharting2_mbr1ch.webp",
  },
  {
    _id: uuid(),
    id: "charting3",
    title: "Technical Analysis Explained",
    author: "Pring Martin",
    price: "1322",
    rating: 3,
    categoryName: "Charting",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648643789/Lucid%20book%20store/bookcharting3_kvzoc0.webp",
  },
  {
    _id: uuid(),
    id: "charting4",
    title: "Japanese Candlestick Charting Techniques ",
    author: "Nison",
    price: "1999",
    rating: 4,
    categoryName: "Charting",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648644020/Lucid%20book%20store/bookcharting4_i02xis.webp",
  },
  {
    _id: uuid(),
    id: "charting5",
    title: "Encyclopedia of Chart Patterns",
    author: "Bulkowski Thomas",
    price: "1999",
    rating: 2,
    categoryName: "Charting",
    badge: "Best Seller",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648644107/Lucid%20book%20store/bookcharting5_r2xc1q.webp",
  },
];
