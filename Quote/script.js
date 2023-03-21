var quotes = [
  {
    text: "Be yourself; everyone is already taken.",
    author: "Oscar Wilde"
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein" 
  },
  {
    text: "So many books, so little time.",
    author: "Frank Zappa"
  }
];
function getRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};
function generateQuote(){
  var quote = getRandomQuote();
  var quoteText = document.getElementById("quote");
  quoteText.innerHTML = quote.text + "<br>" + " " + quote.author;
}
var generateBtn =document.getElementById("btn");
generateBtn.addEventListener("click", generateQuote);