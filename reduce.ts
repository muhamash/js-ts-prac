const number: any[] = [ 'erew', '5436', '348', 78, 97, 100, 'sjhdf', 78 ];

const reducedNumber = number.reduce( ( prev:any, curr:any ) =>
{   
    // console.log(typeof prev, 'and', typeof curr)
    // return prev + curr 
    if ( !NaN )
    {
        return prev + curr 
    }
    else
    {
        return 'nothing'
    }
}, 'sjhdf' );

console.log(reducedNumber)