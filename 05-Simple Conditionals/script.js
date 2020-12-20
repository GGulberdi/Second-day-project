
let  score = prompt( "What is your score");

      if (score < 0) {score = 0;}
      if (score > 100) {score = 100;}
      if (score < 49) {score = "\"F\""} 
      if (score <= 59) {score = "\"D\""} 
      if (score <= 69) {score = "\"C\""}
      if (score <= 79) {score = "\"B\""} 
      if (score >= 80) {score = "\"A\""} 

      console.log("Your score is " + score);
      alert("Your score is " + score);

//       let season = prompt("Edit month to learn a season");

//       switch (season) {
//             case "January":
//                 alert("Winter")
//             break;
//             case "February":
//                 alert("Winter")
//             break;
//             case "March":
//                 alert("Spring")
//             break;
//             case "April":
//                 alert("Spring")
//             break;
//             case "May":
//                 alert("Spring")
//             break;
//             case "June":
//                 alert("Summer")
//             break;
//             case "July":
//                 alert("Summer")
//             break;
//             case "August":
//                 alert("Summer")
//             break;
//             case "September":
//                 alert("Autumm")
//             break;
//             case "October":
//                 alert("Autumm")
//             break;
//             case "November":
//                 alert("Autumm")
//             break;
//             case "December":
//                 alert("Winter")
//             break;
//             default:
//                 alert("Not a month, may wrong spelling try one more time")
    
//       }

// var month = prompt("Enter a month").toLowerCase();

// var season = (month == "september" || month == "october" || month == "november" )? "it is Autumn "
// : (month == "december" || month == "january" || month == "february") ?  "It is winter season"
// : (month == "march" || month == "april" || month == "may") ? "It is Spring season" 
// : (month == "june" || month == "july" || month == "august") ? "it is summer time" 
// : "Enter only months";
// alert(season);

//     let month = prompt("Enter a month to learn how many days in it.").toLowerCase();
//     switch (month) {
//         case "january":
//             alert("31")
//         break;
//         case "february":
//             alert("28 or 29")
//         break;
//         case "march":
//             alert("31")
//         break;
//         case "april":
//             alert("30")
//         break;
//         case "may":
//             alert("31")
//         break;
//         case "june":
//             alert("30")
//         break;
//         case "july":
//             alert("31")
//         break;
//         case "august":
//             alert("31")
//         break;
//         case "september":
//             alert("30")
//         break;
//         case "october":
//             alert("31")
//         break;
//         case "november":
//             alert("30")
//         break;
//         case "december":
//             alert("31")
//         break;
//         default:
//             alert("Undefined value")
// }

// switch

    let month = prompt("Enter a month to learn how many days in it.").toLowerCase();
    let day
        switch (month) {
        case "january": day = "31"
        break;
        case "february": day = "28" 
        break;
        case "march": day = "31"
        break;
        case "april": day = "30"
        break;
        case "may": day = "31"
        break;
        case "june": day = "30"
        break;
        case "july": day = "31"
        break;
        case "august": day = "31"
        break;
        case "september": day = "30"
        break;
        case "october": day = "31"
        break;
        case "november": day = "30"
        break;
        case "december": day = "31" 
        break;
        default: day = "Undefined value"
}

alert("The " + "Month" + month + " has " + day + " days");

    
    