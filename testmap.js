// const numbers = [ 12, 34, 56, 65, 76, 99 ];

// numbers.map( (i) =>
// {
//     console.log( i );
//     if ( i % 2 === 0 )
//     {
//         console.log( 'ok' );
//         break;
//     }
//     else
//     {
//         return false
//     }

// }) 

const numbers = [12, 34, 56, 65, 76, 99];

try 
{
    numbers.map((i) => {
        console.log(i);
        if (i % 2 == 0) {
            console.log('ok');
            throw new Error( 'StopIteration' );
            console.log('stopped')
        }
    } );
}
catch ( err )
{
    if (err.message !== 'StopIteration') {
        throw err;
    }
}