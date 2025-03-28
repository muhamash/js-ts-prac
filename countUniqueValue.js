function countUniqueValues(arr) {
    // return Array.isArray( arr );
    if ( arr.length === 0 ) return `array has no elements!!!`;
    
    let initialValue = 0;
    
    for ( let i = 1; i < arr.length; i++ )
    {
        console.log( initialValue, arr[ initialValue ], arr[ i ] );
        if ( arr[ i ] !== arr[ initialValue ] )
        {
            initialValue++;
            arr[initialValue] = arr[i]
        }
    }

    return initialValue + 1;

}

const result = countUniqueValues( [ 1, 2, 2, 5, 7, 7, 99 ] );
console.log(result)