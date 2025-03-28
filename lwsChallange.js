var Storm = function ()
{
    // console.log('strom')
};
Storm.prototype.precip = 'rain';

var WinterStorm = function ()
{
    // console.log( 'WinterStorm' );
};
WinterStorm.prototype = new Storm();
WinterStorm.prototype.precip = 'snow';

var bob = new WinterStorm(); 
console.log( WinterStorm.prototype)
console.log(bob.precip);