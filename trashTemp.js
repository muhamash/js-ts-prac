class Human
{
    constructor( name )
    {
        this.name = name;
        this.age = 20;
        this.head = 1;
    }
}

class Baby extends Human{
    constructor( name )
    {
        super(name)
        this.cute = true;
        this.hairs = false;
    }
}

const testOne = new Human("testOne");
const testTwo = new Human("John");
console.log( testOne );
console.log(testTwo)

const babyTest = new Baby("Baby John");
console.log(babyTest);