

let john = (29 + 120 + 103)/3;
let mike = (116 +94 + 123)/3;

// console.log(`John team avarage is ${john}`);
// console.log(`Mike team avarage is ${mike}`);

// if (john > mike ){
//  console.log(`John's team wins with ${john} points.` );
// } else if (john < mike) {
//     console.log(`Mike's team wins with ${mike} points.`);
// } else {
//     console.log("There is draw");
// }

let mary = (97 + 134 + 105)/3;
// console.log(`Mary's team avarage is ${mary}`)

if (john > mike && john > mary ){
    console.log(`John's team wins with ${john} points.` );
   } else if (mary < mike && john < mike) {
       console.log(`Mike's team wins with ${mike} points.`);
    } else if (mary > mike && mary > john) {
        console.log(`Mary's team wins with ${mary} points.`);
   } else {
       console.log("There is draw");
   }