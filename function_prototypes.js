//OOPS in JS can be implemented using i)Function prototypes and ii)Classes

//Function prototypes using JS
function Bootcamper(fname,lname,age,country){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.country = country;
    
}
Bootcamper.prototype.greeting = function(){
    console.log("Hello "+this.fname+ " "+ this.lname);
}

var obj1 = new Bootcamper("Ali","Ahmed Khan",22,"India");
var obj2 = new Bootcamper("Sri","Ram",33,"India");

console.log(obj1)


