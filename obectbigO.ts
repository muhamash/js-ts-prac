function isAlphanumeric(input: string): boolean {
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    return alphanumericRegex.test( input );
}

function countString ( string: string ):Object
{
    const eachString = string.toLowerCase().split( '' )
    
    return eachString.reduce( ( objectLibrary: { [ key: string ]: number }, char: string ) =>
    {
        if ( char !== ' ' && isAlphanumeric(char) )
        {
            objectLibrary[ char ] = ( objectLibrary[ char ] || 0 ) + 1;
        };
        return objectLibrary;
        // return Object.fromEntries(Object.entries(objectLibrary).sort())
    }, {} );
}

// const result:{[key:string]:number} = countString( 'tor name ki ?' )
console.log( countString( 'tor name ki janis na kno...??' ) );
console.log(performance.now().toFixed(30))
// const exampleString = 'Hello123';
// console.log(isAlphanumeric(exampleString));