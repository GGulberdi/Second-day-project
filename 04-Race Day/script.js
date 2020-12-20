
let random_number = Math.floor(Math.random(0) * 1000);
let earlyRegister = true 
var age = 38

 if( age > 18  && earlyRegister == true ){
 random_number += 1000
 console.log("Hello! Your run time 9:30 and your race number is " + random_number);
 } else if (age > 18 && earlyRegister !== true){
    random_number += 1000
     console.log("Hello! Your race time at 11:00am and your race number is " + random_number)
 } else if (age < 18 ) {
     console.log("Hello! Your race time at 12:30pm  and your number is " + random_number)
 } else if ( age === 18){
    console.log("Please see the registration desk")
 }

