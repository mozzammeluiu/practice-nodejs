
const quotes = require('./lib/quotes/index');
const math = require('./lib/math');
const app = {};
app.config = {
    timeBetweenQuotes : 3000
}

app.printAQuote = function printAQuote() {
    //getAll the quotes
    const allQuotes = quotes.allQuotes();
    const numberOfQuotes = allQuotes.length;
    const randomNumber = math.generateRandomNumber(1,numberOfQuotes);
    const quote = allQuotes[randomNumber - 1];
    console.log(quote);
}
// Function that loops indefinitely, calling the printAQuote function as it goes
app.indefiniteLoop = function indefiniteLoop() {
    // Create the interval, using the config variable defined above
    setInterval(app.printAQuote, app.config.timeBetweenQuotes);
};

app.indefiniteLoop();