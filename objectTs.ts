interface bottle
{
    color: string;
    quantity: number;
    capacity: number; 
}

const bottle = {
    color: 'yellow',
    quantity: 3,
    brand: 'myBrand',
    capacity: 250,
};

const pair = Object.entries( bottle );
console.log( pair )

for (const [ key, value ] of Object.entries(bottle) )
{
    console.log( `got a product >> it's key: ${ key } and value: ${ value }` );
    console.log(key, value)
}