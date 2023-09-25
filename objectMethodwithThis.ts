interface michelInfo
{
    firstName: string;
    lastName: string;
    status: boolean;
    salary: number;
    age: number;
    details: string[];
    cost: number;
    personFunction: () => void;
    acceptedOrNot: ( age: number ) => string;
    calculationFunction: () => string;
}

interface IssacInfo
{
    firstName: string;
    lastName: string;
    status: boolean;
    salary: number;
    age: number;
    details: string[];
    cost: number;
}

const michelInfo = {
    firstName: "Michel",
    lastName: 'Jackson',
    status: false,
    salary: 1500000,
    age: 25,
    details: [ 'demo', 'oga', 'abcd', 'true' ],
    cost: 31000,
    personFunction: function ()
    {
        const { status, firstName } = this;
        return status
            ? `status:${ status } true person: ${ firstName }`
            : `status: ${ status } shala false person: ${ firstName }`;
        
    },
    acceptedOrNot: function ()
    {
        const { age } = this;
        if ( age >= 20 )
        {
            return `above twenty`;
        }
        else
        {
            return `accepted!`
        }
    },
    calculationFunction: function () {
        const { salary, cost} = this;
        const savings = salary - cost;
        return `you have ${ savings }`;
    },
};

console.log( michelInfo.calculationFunction() );
console.log( michelInfo.acceptedOrNot() );
console.log(michelInfo.personFunction());

const IssacInfo = {
    firstName: 'Issac',
    lastName: 'Newton',
    status: true,
    salary: 250000,
    age: 18,
    details: ['abf', 'jhk', 'hfk','fhg'],
    cost: 39300,
};

console.log( michelInfo.calculationFunction.call( IssacInfo ) );
console.log( michelInfo.acceptedOrNot.apply( IssacInfo ) );
console.log( michelInfo.personFunction.call( IssacInfo ) );