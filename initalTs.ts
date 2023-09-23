const person = (title: string, date: Date) =>
{
    return ` ${title}  ${date.toDateString()}`
}

console.log( person( 'hey', new Date() ) );

"use strict";
function greet(person: string, date: Date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());