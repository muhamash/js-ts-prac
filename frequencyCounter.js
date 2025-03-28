function frequencyCounter ( inputOne, inputTwo )
{
    if ( inputOne.length !== inputTwo.length )
    {
        return false;
    }
    
    let inputOneObj = {};
    let inputTwoObj = {};
    for ( let i of inputOne )
    {
        inputOneObj[ i ] = ( inputOneObj[ i ] || 0 ) + 1;
    }

    for ( let i of inputTwo )
    {
        inputTwoObj[ i ] = ( inputTwoObj[ i ] || 0 ) + 1;
    }
    console.log( inputOneObj, inputTwoObj );

    for ( let key in inputOneObj )
    {
        if ( !( key ** 2 in inputTwoObj ) )
        {
            return false;
        }

        if ( inputTwoObj[ key ** 2 ] !== inputOneObj[ key ] )
        {
            return false;
        }
    }

    return true;
}

const result = frequencyCounter( [ 1, 2, 3, 4 ], [ 4, 1, 9, 16 ] );
console.log(result)
