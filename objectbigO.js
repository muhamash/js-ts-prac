// string: 'hello';
// {h:1, e:1, ll:2, o:1};

function stringLibrary (string)
{
    const objectLibrary = {}
    const eachString = string.toLowerCase().split( '' )
    eachString.map( ( char ) =>
    {
        if ( char !== ' ' )
        {
            if ( objectLibrary[ char ] )
            {
                objectLibrary[ char ]++;
            }
            else
            {
                objectLibrary[ char ] = 1;
            }
        }
    } );
    return objectLibrary
};

const result = stringLibrary( 'tor name ki ?' )
console.log( result );