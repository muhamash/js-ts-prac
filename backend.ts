// json
interface studentData
{
    name: string;
    age: number;
    onlinePlatform: string[];
}

const studentData = {
    name: 'sakib',
    age: 20,
    onlinePlatform: [
        'facebook', 'youtube', 'instagram'
    ],
};

console.log(Object.values(studentData))
console.log(Object.keys(studentData))

const StudentToJson = JSON.stringify( studentData );
console.log( StudentToJson );

const JsonToString = JSON.parse( StudentToJson );
console.log( JsonToString );

// fetch
// import fetch from 'node-fetch';

// fetch( 'https://restcountries.com/v3.1/alll' );
//     .then( (res: Response) => res.json() )
//     .then((data: any) => console.log(data))

// async function fetchData() {
//     try
//     {
//         const response = await fetch( 'https://restcountries.com/v3.1/alll' );
//         const data = await response.json();
//         console.log(data)
//     }
//     catch ( error )
//     {
//         console.error( error );
//     }
// };

// fetchData();
// fetch('https://restcountries.com/v3.1/all?fields=name,flags`')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error('There was a problem with the fetch operation:', error);
//   } );
  
