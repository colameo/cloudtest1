var response = require("http/v4/response");

var name1 = "Serano2";
var msg = `Hello ${name1}`;

response.println(msg);
response.flush();
response.close();

// foo