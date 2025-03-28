function validAnagram( stringOne, stringTwo )
{
    if ( stringOne.length !== stringTwo.length )
    {
        return false;
    }

    let lookUp = {};
    for ( let i = 0; i < stringOne.length; i++ )
    {
        lookUp[ stringOne[i] ] = ( lookUp[ stringOne[i] ] || 0 ) + 1;
    }
    console.log( lookUp );

    for ( let i = 0; i < stringTwo.length; i++ )
    {
        if ( !lookUp[ stringTwo[ i ] ] )
        {
            return false;
        }
        else
        {
            lookUp[ stringTwo[ i ] ] = lookUp[ stringTwo[ i ] ] - 1;
        }
    }
    console.log( lookUp );

    return true;
}

const result = validAnagram( 'anagramsas', 'nagaramsss' );
console.log( result );