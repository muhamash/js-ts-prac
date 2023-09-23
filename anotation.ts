interface User {
    id: number;
    name: string;
}

const userInfo: User[] = [
    { id: 1, name: 'michel' },
    { id: 2, name: 'hasan' },
    { id: 3, name: 'modhusudhon' },
];

function userFunction(userId: number) {
    const user = userInfo.find((user) => user.id === userId);

    if (user) {
        console.log(`user is: ${user.name}`);
    } else {
        console.log(`user id: ${userId} not found`);
    }
}

userFunction(3);
userFunction(-9);
userFunction(1);
userFunction(0);
userFunction(3);


// if ( index !== -1 )
    // {
    //     const deletedUser = userInfo.splice( index, 1 )[ 0 ] ;
    //     console.log( `user deleted ${ deletedUser.id }` );
    // }
    // else 
    //     console.log(`user no found ${userId}`)