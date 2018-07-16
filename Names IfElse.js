function person(name, age){
    this.name = name;
    this.age = age;

}

var Chris = new person('Chris', 18);
var Kyle = new person('Kyle', 18);
var Andrew = new person('Andrew', 170);


        if(Chris.age === 17 && Kyle.age === 17){
            console.log(Chris.name + ' and ' + Kyle.name +' are both ' + Chris.age);
        }
        else if(Chris.age === 17 && Kyle.age !== 17){
            console.log(Chris.name + ' is ' + Chris.age + ' and ' + Kyle.name + ' is ' + Kyle.age)
        }
        else if (Andrew.age === 17) {
            console.log(Andrew.name + ' is ' + Andrew.age)
        }
        else{
            console.log('None of them are 17')
        }
