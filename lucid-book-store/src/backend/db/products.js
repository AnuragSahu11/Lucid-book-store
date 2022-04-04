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
    originalPrice: "730",
    categoryName: "Stocks",
    rating: 5,
    badge: "Best seller",
    description:
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
    originalPrice: "780",
    rating: 3,
    categoryName: "Stocks",
    badge: "Newly Added",
    description:
      "Written by the acclaimed entrepreneur, William J O'Neil, How to Make Money in Stocks: A Winning System in Good Times and Bad, Fourth Edition is a handy guide that that deals with the stock market and its intricacies. The author of this book has written down the hard-earned knowledge he gained from his own experiences as an investor.",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376992/Lucid%20book%20store/bookstock2_vl9ysq.jpg",
  },
  {
    _id: uuid(),
    id: "stock3",
    title: "The Beginner's Stock",
    author: "Akash Patel ",
    price: "99",
    originalPrice: "140",
    rating: 2,
    categoryName: "Stocks",
    description:
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
    originalPrice: "300",
    rating: 4,
    categoryName: "Stocks",
    description:
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
    originalPrice: "599",
    rating: 4,
    categoryName: "Stocks",
    badge: "Lucid Exclusive",
    description:
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
    originalPrice: "799",
    rating: 1,
    categoryName: "Forex",
    badge: "Best Seller",
    description: `"While I don't know a lot about trading currencies, I believe this book is a good initiation for people who are looking to go into that. The authors talk about what Forex is, defining terms and giving a little history. They share the mindset that you need to have to successfully trade in this market, or at least be comfortable with it. They go over the practical ideas, like the different platforms you can trade on and analytical software that you can use to help you figure out your plan.`,
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376989/Lucid%20book%20store/bookforex1_bgdgvz.webp",
  },
  {
    _id: uuid(),
    title: "Forex Trading",
    id: "forex2",
    author: "Anderson Richard",
    price: "1516",
    originalPrice: "1999",
    rating: 5,
    categoryName: "Forex",
    description:
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
    originalPrice: "1499",
    rating: 3,
    categoryName: "Forex",
    description:
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
    originalPrice: "1500",
    rating: 4,
    categoryName: "Forex",
    badge: "Lucid Exclusive",
    description:
      "Forex Trading for Beginners: Proven Strategies to Succeed and Create Passive Income with Forex. Introduction to Forex Swing Trading, Day Trading, Options, Futures & ETFs",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376990/Lucid%20book%20store/bookforex4_cdoavb.webp",
  },
  {
    _id: uuid(),
    title: "Forex Trading",
    id: "forex5",
    author: "Anderson Richard",
    price: "1516",
    originalPrice: "1650",
    rating: 3,
    categoryName: "Forex",
    description:
      "Within the book you will find strategies and fundamentals based on my smcf method designed and studied to teach beginners who are starting from scratch and have little time to learn simple and effective strategies to be profitable immediately, avoid losing their money and thus achieve financial freedom.",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376990/Lucid%20book%20store/bookforex5_up193x.webp",
  },
  {
    _id: uuid(),
    id: "crypto1",
    title: "How to Make Money in Crypto",
    author: "Charles Sanger",
    price: "381",
    originalPrice: "499",
    rating: 1,
    categoryName: "Crypto",
    description:
      "This book is the simple solution to not knowing where to start. Rather than learning about Bitcoin and then going down a never-ending rabbit hole of terms to understand it, everything you need to know about Bitcoin, blockchains, altcoins, NFTs, and more is right here.",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376993/Lucid%20book%20store/bookcrypto1_bgv0v2.jpg",
  },
  {
    _id: uuid(),
    id: "crypto2",
    title: "Crypto Trading Strategies",
    author: "Scotty Ratford ",
    price: "223",
    originalPrice: "299",
    rating: 3,
    categoryName: "Crypto",
    badge: "Newly Added",
    description:
      "With this trading book as your guide, you’ll quickly master the ins-and-outs of crypto day trading like an expert trader without having to spend years learning from trial-and-error or losing money on expensive courses that don’t deliver results fast enough for today's demanding market conditions.",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376989/Lucid%20book%20store/bookcrypto2_fhxwxv.jpg",
  },
  {
    _id: uuid(),
    id: "crypto3",
    title: "The Crypto Trader",
    author: "Glen Goodman",
    price: "1633",
    originalPrice: "1700",
    rating: 5,
    categoryName: "Crypto",
    description:
      "Inside you'll see his multi-hundred-percent gains on a raft of cryptocurrencies and learn how he builds his profits and holds onto them. Glen reveals all his trading strategies, the proven methods and rules that make him one of the most followed traders in the world on social media. (He is also frequently interviewed by the BBC, Forbes and LBC, and is a contributing expert on cryptocurrency at the London School of Economics.)",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376989/Lucid%20book%20store/bookcrypto3_regrzb.jpg",
  },
  {
    _id: uuid(),
    id: "crypto4",
    title: "Bitcoin and Cryptocurrency Trading for Beginners 2021",
    author: "Nicholas Scott",
    price: "1859",
    originalPrice: "2299",
    rating: 1,
    categoryName: "Crypto",
    badge: "Best Seller",
    description:
      "Packed with handy beginner’s advice and simple cryptocurrency trading strategies, this complete collection outlines the fundamentals of Bitcoin investing, NFTs, and crypto in a practical way. Built on a solid foundation designed to give you a comprehensive overview of the essential cryptocurrency knowledge you’ll need to become a successful trader, this bundle provides the most up-to-date advice for this rapidly changing marketplace.",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376989/Lucid%20book%20store/bookcrypto4_dod9us.jpg",
  },
  {
    _id: uuid(),
    id: "crypto5",
    title: "CRYPTO TRADING",
    author: "Nicholas Scott",
    price: "1477",
    originalPrice: "1699",
    rating: 4,
    categoryName: "Crypto",
    description:
      "Written by successful cryptocurrency trader Nicholas Scott, who achieved financial freedom with these strategies, Bitcoin and Cryptocurrency Trading for Beginners 2021 details his approach to the world of cryptocurrency trading. From beginner trading advice to help you break into the market to advanced analysis and tons of tips and tricks, this bundle is your complete guidebook for navigating the cryptocurrency landscape.",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376989/Lucid%20book%20store/bookcrypto5_kmg78r.jpg",
  },
  {
    _id: uuid(),
    id: "investment1",
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    price: "479",
    originalPrice: "500",
    rating: 2,
    categoryName: "Investment",
    badge: "Lucid Exclusive",
    description:
      "Over the years, market developments have proven the wisdom of Graham's strategies. While preserving the integrity of Graham's original text, this revised edition includes updated commentary by noted financial journalist Jason Zweig, whose perspective incorporates the realities of today's market, draws parallels between Graham's examples and today's financial headlines, and gives readers a more thorough understanding of how to apply Graham's principles.",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376991/Lucid%20book%20store/bookinvest1_ssy2de.jpg",
  },
  {
    _id: uuid(),
    id: "investment2",
    title: "One Up On Wall Street",
    author: "Lynch",
    price: "360",
    originalPrice: "429",
    rating: 5,
    categoryName: "Investment",
    badge: "Lucid Exclusive",
    description:
      "How To Use What You Already Know To Make Money in The Market explains how your knowledge alone can assist you beat the pros of investing. From the viewpoint of America's most triumphant money manager, investment chances are extensively accessible. Whether supermarket or work place, you can find goods and services everywhere.",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648642379/Lucid%20book%20store/bookinvest2_kg3f23.webp",
  },
  {
    _id: uuid(),
    id: "investment3",
    title: "Rich Dad Poor Dad",
    author: "Kiyosaki Robert",
    price: "325",
    originalPrice: "399",
    rating: 3,
    categoryName: "Investment",
    badge: "Best Seller",
    description:
      "Rich Dad Poor Dad is Robert's story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you.",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648642663/Lucid%20book%20store/bookinvest3_zm0ua3.webp",
  },
  {
    _id: uuid(),
    id: "investment4",
    title: "Bulls, Bears and Other Beasts",
    author: "Nair Santosh",
    price: "481",
    originalPrice: "549",
    rating: 4,
    categoryName: "Investment",
    description:
      "Lalchand Gupta takes you on an exciting journey through Dalal Street in this brief history of the Indian stock market post liberalization.From tech booms and tax evasion to banks and money laundering; scams and crashes to fixers and investors, Lala has seen it all.",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648642783/Lucid%20book%20store/bulls-bears-and-other-beasts-original-imafy2x9my9ctahf_a0qkr3.webp",
  },
  {
    _id: uuid(),
    id: "investment5",
    title: "The Money Manual",
    author: "Rapley Tonya B",
    price: "1319",
    originalPrice: "1429",
    rating: 2,
    categoryName: "Investment",
    badge: "Newly Added",
    description:
      "You don't need fancy degrees or certifications to become a better manager of your money.All you need is information designed for you that empowers you to take action. The Money Manual was designed to help you cut through the clutter that often leads to feeling overwhelmed and anxious.",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648642947/Lucid%20book%20store/bookinvest5_v7syba.webp",
  },
  {
    _id: uuid(),
    id: "charting1",
    title: "Make Money With Price Action Trading",
    author: "Sunil Gurjar",
    price: "330",
    originalPrice: "410",
    rating: 4,
    categoryName: "Charting",
    description:
      "Price Action Trading is a trading technique in which traders make use of only 'Price' and 'Volume' to make trading decisions. This book by Sunil Gurjar, founder of Chartmojo, will guide you how to trade in securities and time entry and exit in a better way using price action, without relying much on technical indicators. ",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648643488/Lucid%20book%20store/bookcharting1_b2rf4u.webp",
  },
  {
    _id: uuid(),
    id: "charting2",
    title: "How to Make Money With Breakout Trading",
    author: "Indrazith Shantharaj",
    price: "289",
    originalPrice: "399",
    rating: 5,
    categoryName: "Charting",
    badge: "Lucid Exclusive",
    description:
      "Do you know every trader (be it intraday, swing, positional, or scalper) should know how to differentiate a genuine breakout and a false breakout?Do you know why?Because every 'Entry' and 'Exit' in any trade should come through a breakout or false breakout opportunity!It's important to understand two herds that exist in the market:1. Smart Money and2. Dumb Money'Smart Money' refers to institutional investors, big sharks who have money and information power who give direction and momentum to markets.'Dumb Money' refers to nonprofessional traders, retail traders who often try to make quick money.",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648643630/Lucid%20book%20store/bookcharting2_mbr1ch.webp",
  },
  {
    _id: uuid(),
    id: "charting3",
    title: "Technical Analysis Explained",
    author: "Pring Martin",
    price: "1322",
    originalPrice: "1419",
    rating: 3,
    categoryName: "Charting",
    description:
      "The guide technicians turn to for answers--tuned upto provide an advantage in today's global economy.The face of investing has significantly changed in the 30 years since this book's first publication, but one essential component of the markets has not--human behavior. Whether you're trading cornerstone commodities or innovative investment products, observing how investors responded to past events through technical analysis is your key to forecasting when to buy and sell in the future.",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648643789/Lucid%20book%20store/bookcharting3_kvzoc0.webp",
  },
  {
    _id: uuid(),
    id: "charting4",
    title: "Japanese Candlestick Charting Techniques",
    author: "Nison",
    price: "1999",
    originalPrice: "2199",
    rating: 4,
    categoryName: "Charting",
    description:
      "A form of technical analysis, Japanese candlestick charts are a versatile tool that can be fused with any other technical tool, and will help improve any technician's market analysis.  They can be used for speculation and hedging, for futures, equities or anywhere technical analysis is applied. Seasoned technicians will discover how joining Japanese candlesticks with other technical tools can create a powerful synergy of techniques;",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648644020/Lucid%20book%20store/bookcharting4_i02xis.webp",
  },
  {
    _id: uuid(),
    id: "charting5",
    title: "Encyclopedia of Chart Patterns",
    author: "Bulkowski Thomas",
    price: "1999",
    originalPrice: "2099",
    rating: 2,
    categoryName: "Charting",
    badge: "Best Seller",
    description:
      "In this revised and expanded second edition of the bestselling Encyclopedia of Chart Patterns, Thomas Bulkowski updates the classic with new performance statistics for both bull and bear markets and 23 new patterns, including a second section devoted to ten event patterns. ",
    image:
      "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648644107/Lucid%20book%20store/bookcharting5_r2xc1q.webp",
  },
];
