interface personObj
{
    key: boolean;
    toDo: string;
    notToDo: string;
}

interface lifeRulesObj
{
    name: string;
    status: boolean;
    age: number;
    demands: string[];
    successArray: number[];
    personObj: personObj;
}


const lifeRulesObj = {
    name: 'do not know the name {sorry!!}',
    status: false,
    age: 20,
    demands: [
        'car', 'friend', '==>> $4B dollar'
    ],
    successArray: [
        2, 4, 5, 10
    ],

    personObj: {
        key: true,
        toDo: '',
        notToDo: '',
    },

    resultFunction: function ()
    {
        this.personObj.toDo = this.demands[ 2 ];
        this.personObj.notToDo = this.demands[ 1 ];

        const { name, status, age, demands, personObj } = this;

        if ( this.age <= 20 && this.status == false )
        {
            return `congo!!! ${ name } you can have ${ this.successArray[ 1 ] } $B!!! you should not waste your worthy ${personObj.toDo}`;
        }

        else
        {
            return `you ${ name }, you have so much demand you can't have these: ${ demands[ 1 ] } included ${demands[0]}`
        }
    }
};

console.log( lifeRulesObj.resultFunction() );




