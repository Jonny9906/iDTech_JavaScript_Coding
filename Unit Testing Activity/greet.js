function Greet([name]) {
    if (name == null) {

    } else if (name == name.toUpperCase()){
        return "HELLO " + name.toUpperCase();
    } else if (name.includes(',')){
        return name[0] + name[1];
    }
    //return "Hello " + name;
}

console.log(Greet("Jonathan", ",hello"));