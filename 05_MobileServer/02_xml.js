const http = require('http');
const xmlparser = require('fast-xml-parser');
const he = require('he');

// Convert options
var options = {
    attributeNamePrefix : "@_",
    attrNodeName: "attr", //default is 'false'
    textNodeName : "#text",
    ignoreAttributes : true,
    ignoreNameSpace : false,
    allowBooleanAttributes : false,
    parseNodeValue : true,
    parseAttributeValue : false,
    trimValues: true,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    parseTrueNumberOnly: false,
    arrayMode: false, //"strict"
    attrValueProcessor: (val, attrName) => he.decode(val, {isAttributeValue: true}),//default is a=>a
    tagValueProcessor : (val, tagName) => he.decode(val), //default is a=>a
    stopNodes: ["parse-me-as-string"]
};

var server = http.createServer(function(req, res){
    if(req.method.toLowerCase() == 'post' && req.headers["content-type"] == 'application/xml'){
        var buffer = '';
        req.on('data', function(data){
            buffer += data;
        });
        req.on('end', function(){
            if(xmlparser.validate(buffer)){
                var jsonData1 = xmlparser.parse(buffer, options);
            }
            var traversalObj = xmlparser.getTraversalObj(buffer, options);
            var jsonData2 = xmlparser.convertToJson(traversalObj, options);
            console.log("traversalObj : ", traversalObj);
            console.log("JsonData1 : " , jsonData1);
            console.log("JsonData2 : ", jsonData2);
            
            //See README.md file
            var foods = jsonData2.breakfast_menu.food;
            foods.forEach(function(food){
                console.log(food.name);
            });

            res.writeHead(200, {'Content-Type' : 'applicaton/json'});
            res.end(JSON.stringify({'Result' : 'Success'}));
        });
    }
});

server.listen(3000, function(){
    console.log('Server is running on 3000');
});
 


