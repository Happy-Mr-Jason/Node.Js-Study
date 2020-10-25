# MobileServer
Using JSON / XML

## JSON
### Module for JSON
don't need module.

#### Methods
1. JSON.parse() : Parses a JSON string and returns a JavaScript object
2. JSON.stringify() : Convert a JavaScript object to a JSON string

### JSON Object
refer to [w3schools.com JSON](https://www.w3schools.com/js/js_json_intro.asp)

#### Valid Data Types
In JSON, values must be one of the following data types:
* a string
* a number
* an object (containing valid JSON values)
* an array
* a boolean
* null

JSON values cannot be one of the following data types:
* a function
* a date
* undefined

#### Example
```JSON
{
    "intVal": 3,
    "floatVal": 3.14,
    "boolVal": true,
    "strVal": "Hello JSON",
    "nullVal": null,
    "arrayVal": [1, 2, 3],
    "nestedObj":{
        "validJSON":true,
    },
    "arrayObj": [
        {
            "type": "json", 
            "descript":"javascript Object Notation"
        },
        {
            "type": "xml",
            "descript": "Extensible Markup Language"
        }
    ]
}
```
## XML
### Module for XML
* fast-xml-parser (refer to [npm fast-xml-parser](https://www.npmjs.com/package/fast-xml-parser )

(There are many parsers on npmjs.com)

#### Parsers
* DOM Parser
* SAX Parser
* PULL Parser

### XML Object 
refer to [w3schools.com XML Tutorial](https://www.w3schools.com/xml/)

#### Example
```XML
<?xml version="1.0" encoding="UTF-8"?>
<breakfast_menu>
<food>
    <name>Belgian Waffles</name>
    <price>$5.95</price>
    <description>
   Two of our famous Belgian Waffles with plenty of real maple syrup
   </description>
    <calories>650</calories>
</food>
<food>
    <name>Strawberry Belgian Waffles</name>
    <price>$7.95</price>
    <description>
    Light Belgian waffles covered with strawberries and whipped cream
    </description>
    <calories>900</calories>
</food>
<food>
    <name>Berry-Berry Belgian Waffles</name>
    <price>$8.95</price>
    <description>
    Belgian waffles covered with assorted fresh berries and whipped cream
    </description>
    <calories>900</calories>
</food>
</breakfast_menu>
```