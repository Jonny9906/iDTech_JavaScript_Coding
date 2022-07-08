/*function Greet(name = 'there') {
    if (name == name.toUpperCase()){
        return "HELLO, " + name.toUpperCase();
    } else if (name.){
        name.split(' ');
        return "Hello " + name[0] + ", " + name[1];
    } else {
    return "Hello, " + name;
    }
}

*/

function Greet(name = 'there') {
    if (typeof(name) == "string"){
        if (name == name.toUpperCase()) {
            return "HELLO " + name.toUpperCase() + "!";
        } else {
            return "Hello, " + name;
        }
    } else if (Array.isArray(name)){
        let names = "Hello"
        for (let i = 0; i < name.length; i++) {
            names += ", " + name[i];
        }
        return (names);

    }
}
console.log(Greet(['s', 's']));