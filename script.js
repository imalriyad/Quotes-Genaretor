const quotesArray = [
    {
      quote: "Be yourself; everyone else is already taken.",
      name: "Oscar Wilde"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      name: "Steve Jobs"
    },
    {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      name: "Robert Frost"
    },
    {
      quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      name: "Albert Einstein"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      name: "Eleanor Roosevelt"
    },
    {
      quote: "The only true wisdom is in knowing you know nothing.",
      name: "Socrates"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      name: "John Lennon"
    },
   
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      name: "Winston Churchill"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      name: "Confucius"
    },
    {
      quote: "The best revenge is massive success.",
      name: "Frank Sinatra"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      name: "Franklin D. Roosevelt"
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      name: "Thomas A. Edison"
    },
    {
      quote: "Strive not to be a success, but rather to be of value.",
      name: "Albert Einstein"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      name: "Walt Disney"
    },
    {
      quote: "I attribute my success to this: I never gave or took any excuse.",
      name: "Florence Nightingale"
    },
    {
      quote: "The future depends on what you do today.",
      name: "Mahatma Gandhi"
    },
    {
      quote: "Do what you can, with what you have, where you are.",
      name: "Theodore Roosevelt"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      name: "Wayne Gretzky"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      name: "Steve Jobs"
    }
  ];
  
  const backgroundColorsArray = [
    "#1f618d", // Blue
    "#27ae60", // Green
    "#8e44ad", // Purple
    "#f39c12", // Orange
    "#c0392b", // Maroon
    "#2ecc71", // Emerald Green
    "#2980b9", // Sapphire Blue
    "#e67e22", // Burnt Orange
    "#bdc3c7", // Silver
    "#2c3e50", // Dark Blue
    "#1abc9c", // Turquoise
    "#f39c12", // Orange
    "#e74c3c", // Red
    "#16a085", // Green
    "#9b59b6", // Lavender
    "#ff6b6b", // Pink
  ];

document.getElementById('btn').addEventListener('click',function(){
    const quotesText = document.getElementById('quotes-text')
    const saidBy = document.getElementById('said-by')

    let GetQuoterandomly = Math.floor(Math.random()* quotesArray.length)

    let quoteTexttt = quotesArray.values(GetQuoterandomly)
    quotesText.innerText = quoteTexttt
 
    quotesText.innerText = quotesArray[GetQuoterandomly].quote
    saidBy.innerText = quotesArray[GetQuoterandomly].name

   let card = document.getElementById('card')
   let cardSytle = card.style.backgroundColor = backgroundColorsArray[GetQuoterandomly]



})