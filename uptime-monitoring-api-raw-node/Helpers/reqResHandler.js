const url = require("url");
const routes = require("../route");
const notFoundHandler = require("../Handlers/RouteHandler/notFoundHandler");

function handler(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parsedUrl.query;
  const headersObject = req.headers;
  const requestProperties = {
    path,
    trimmedPath,
    method,
    queryStringObject,
    headersObject,
  };
  const choserHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;
  choserHandler(requestProperties, (_statusCode,_payload) => {
    const statusCode = typeof _statusCode === 'number' ? _statusCode : 500;
    const payload = typeof _payload === 'object' ? _payload : {};
    const payloadString = JSON.stringify(payload);
    res.writeHead(statusCode);
    res.end(payloadString);
  })
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end();
}
module.exports = handler;
