const quotes = [
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll"
  },
  {
    text: "Do not wait for leaders; do it alone, person to person.",
    author: "Mother Teresa"
  },
  {
    text: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington"
  },
  {
    text: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein"
  },
  {
    text: "Emollit Mores Nec Sinit Esse Feros – Learning humanizes character and does not permit it to be cruel.",
    author: "University of South Carolina Motto"
  }
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  document.getElementById('quote').innerText = `"${quote.text}"`;
  document.getElementById('author').innerText = `– ${quote.author}`;
}