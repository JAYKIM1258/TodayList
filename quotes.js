const quotes = [{
    quote: "He whom you cannot teach to fly, teach to fall faster!",
    author: "Friedrich Nietzsche",
},{
    quote: "Education's purpose is to replace an empty mind with an open one.",
    author: "Malcolm Forbes",
},{
    quote: "A little sincerity is a dangerous thing, and a great deal of it is absolutely fatal.",
    author: "Oscar Wilde",
},{
    quote: "What is written without effort is in general read without pleasure.",
    author: "Samuel Johnson",
},{
    quote: "A genius is just a talented person who does his homework.",
    author: "Thomas A. Edison",
},{
    quote: "Ability is of little account without opportunity.",
    author: "Napoleon Bonaparte",
},{
    quote: "Man's feelings are always purest and most glowing in the hour of meeting and of farewell.",
    author: "Jean Paul Richter",
},{
    quote: "Employ thy time well, if thou meanest to get leisure.",
    author: "Benjamin Franklin",
},{
    quote: "Punctuality is the soul of business.",
    author: "Thomas Halyburton",
},{
    quote: "Let no one ever come to you without leaving better and happier.",
    author: "Mother Teresa",
}]

const $quote = document.querySelector("#quote span:first-child");
const $author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

$quote.innerHTML = todayQuote.quote;
$author.innerHTML = todayQuote.author;