interface personData
{
    name: string;
    age: number;
    status: boolean;
    demands: string[];
}

const personData = {
    name: 'do not know the name',
    age: 20,
    status: true,
    demands: [
        'happiness', '4', '$B'
    ],
    success: [
        2, 6, 10
    ],
    onLine: function()
    {
        const { name, age, status, demands, success } = this;
        if ( status === false )
        {
            return `she/he ${ name } and wants ${ demands[ 0 ] + demands[ 1 ] + demands[ 2 ] } upss you have ${ status } status`;
        }
        else
        {
            return `good news ${name} has no name, you can have ${success[1]} $B!!! :v`
        }
    }
};

console.log( personData.onLine() );