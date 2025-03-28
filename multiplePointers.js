function multiplePointer (inputs)
{
    let left = 0;
    let right = inputs.length - 1;

    while ( left < right )
    {
        let sum = inputs[ left ] + inputs[ right ];
        console.log( left, right, inputs[ left ], inputs[ right ]  );

        if ( sum === 0 )
        {
            return [ inputs[ left ], inputs[ right ] ];
        }
        else if ( sum > 0 )
        {
            right--;
        }
        else
        {
            left++
        }
    }

    return `no pair found in ${inputs}`
}

const result = multiplePointer([-4,-3,-2,-1,0,1,2,40]);
console.log( result );