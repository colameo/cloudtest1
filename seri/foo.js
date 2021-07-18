var response = require("http/v4/response");
var templateEngines = require("platform/v4/template-engines");

var template =
    "Dear ${name},\n\n"
    + "You have the following bills:\n"
    + "#foreach($b in $bills)"
    + "- ${b.name}: ${b.currencySymbol}${b.value}\n"
    + "#end";

var parameters = {
    name: "Assa Sas",
    bills: [{
        name: "Aa", 
        currencySymbol: "$",
        value: 150
    }, {
        name: "Internet",
        currencySymbol: "$",
        value: 80
    }, {
        name: "Phone2",
        currencySymbol: "$",
        value: 31
    }]
};

var result = templateEngines.generate(template, parameters);

response.println(result);