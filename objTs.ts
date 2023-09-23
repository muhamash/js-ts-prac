interface User
{
    id: number;
    name: string;
}

class UserInfo
{
    id: number;
    name: string;

    constructor ( id: number, name: string )
    {
        this.name = name;
        this.id = id;
    }
};

const user: User = new UserInfo( 1, 'name' );

console.log( `${user.id} and ${user.name} and the class has constructed as >> ${user}` );