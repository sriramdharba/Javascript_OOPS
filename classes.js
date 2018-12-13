class Bootcamper{
    constructor(fname,lname,age,country){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.country = country;
    }
    greeting(){
        console.log("Hello "+this.fname+ " "+ this.lname);
    }
}
var obj1 = new Bootcamper("Ali","Ahmed Khan",22,"India");
console.log(obj1);
