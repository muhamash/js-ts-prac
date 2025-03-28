// string: 'hello';
// {h:1, e:1, ll:2, o:1};
function isAlphanumeric ( string )
{
    return /^[a-zA-Z0-9]+$/.test( string );
}

function stringLibrary (string)
{
    const objectLibrary = {}
    const lowerCase = string.toLowerCase();

    for ( let i = 0; i < string.length; i++ )
    {
        if ( isAlphanumeric(lowerCase[i]) )
        {
            // if ( objectLibrary[ lowerCase[i] ] )
            // {
            //     objectLibrary[ lowerCase[i] ]++;
            // }
            // else
            // {
            //     objectLibrary[ lowerCase[i] ] = 1;
            // }
            objectLibrary[ lowerCase[ i ] ] = ( objectLibrary[ lowerCase[ i ] ] || 0 ) + 1;
        }
    }
    

    return objectLibrary
};

const result = stringLibrary( 'tor name ki ?' )
console.log( result );