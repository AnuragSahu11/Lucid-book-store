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
    discription:
      "This book provides a good foundation for the beginning investor who is setting out to venture in the stock market. It tells you in plain English about the fundamentals of stock market and investment strategies to deepen your investing literacy. If you're looking for good advice on which stock to buy and when to sell it, you can find it in this book.",
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
    discription:
      "Written by the acclaimed entrepreneur, William J O'Neil, How to Make Money in Stocks: A Winning System in Good Times and Bad, Fourth Edition is a handy guide that that deals with the stock market and its intricacies. The author of this book has written down the hard-earned knowledge he gained from his own experiences as an investor.",
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
    discription:
      "If you are a beginner with little or no idea about the stock markets then this is the book for you.This book will help those who are looking to start investing in stock market.In this Book we have simplified all the basic knowledge needed to be a smart Investor,even if you don’t have any knowledge earlier.when we first step in stock market and if we don`t have proper knowledge, then there are maximum changes of having loss.",
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
    discription:
      "The main purpose of this book is creating awareness about investing in stock market and to provide all basic knowledge of stock market. It’s really important to understand the basics regarding stocks before entering the market because as a lack of knowledge in this field almost always leads to a huge financial loss. Further, many times, loss of capital also leads to a decline in the morale of the investor",
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
    discription:
      "Basics of Indian Stock Market is for people who are looking to enter the Indian stock markets. This book is written in a simple manner for readers to understand the various terminologies and working process of the financial markets. If you are looking to understand and enter the stock markets but don't know from where to start, then this book is for you. ",
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
    discription: `"While I don't know a lot about trading currencies, I believe this book is a good initiation for people who are looking to go into that. The authors talk about what Forex is, defining terms and giving a little history. They share the mindset that you need to have to successfully trade in this market, or at least be comfortable with it. They go over the practical ideas, like the different platforms you can trade on and analytical software that you can use to help you figure out your plan.`,
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
    discription:
      "Forex is actually a complex market to deal with where the majority of new traders having virtually no expertise may suffer serious failures before they can turn to trade successfully. Even the greatest of the traders are known to take major losses from time to time.",
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
    discription:
      "The Sensible Guide to Forex: Safer, Smarter Ways to Survive and Prosper from the Start is written for the risk averse, mainstream retail investor or trader seeking a more effective way to tap forex markets to improve returns and hedge currency risk. As the most widely held currencies are being devalued, they're taking your portfolio down with them—unless you're prepared.",
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
    discription: " ",
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
    discription: " ",
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
    discription: " ",
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
    discription: " ",
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
    discription: " ",
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
    discription: " ",
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
    discription: " ",
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
    discription: " ",
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
    discription: " ",
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
    discription: " ",
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
    discription: " ",
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
    discription: " ",
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
    discription: " ",
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
    discription: " ",
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
    discription: " ",
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
    discription: " ",
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
    discription: " ",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648644107/Lucid%20book%20store/bookcharting5_r2xc1q.webp",
  },
];
