const fs = require('fs');

const directoryName = `${__dirname}/quotes.txt`;

const quotes = {};

quotes.allQuotes = () => {
    const fileContents = fs.readFileSync(directoryName, 'utf8');
    const arrayOfQuotes = fileContents.split(/\r?\n/);
    return arrayOfQuotes;
};
module.exports = quotes;