const fs = require('fs');

const directoryName = `${__dirname}/data.txt`;
fs.readFile(
    directoryName,
    {
        encoding: 'utf8',
    },
    // eslint-disable-next-line comma-dangle
    (err, data) => console.log(data, err)
);
