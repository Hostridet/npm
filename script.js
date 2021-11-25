const _ = require('underscore')
main();

function main() {
    let names = ['Egor', 'Elisey', 'Leonid', 'Alexey', 'Andrey'];
    let CurName = "Elisey"
    let found = _.find(names, function(name) {return name === CurName});
    console.log("Current name in array: " + found);
    console.log("size: " + _.size(names));
    console.log("Without current name: " + _.without(names, CurName));
    console.log(_.range(0,-10,-1));
}