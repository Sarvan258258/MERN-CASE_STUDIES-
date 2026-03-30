function checkSign(n : number) : void {
    if(n > 0) {
        console.log("The given numer is positive.")
    } else {
        console.log("The given number is negative");
    }
}


function evenOrOdd(n : number) : void {
    if(n % 2 === 0) {
        console.log("The given number is even");
    } else {
        console.log("The given number is odd");
    }
}

function getGrade(score : number) : string {
    if(score >= 90) {
        return "A";
    } else if(score >= 80) {
        return "B";
    } else if(score >= 70) {
        return "C";
    } else if(score >= 60) {
        return "D";
    }
    return "F";
}

function provideFeedback(grade : string) : void {
    switch (grade) {
        case "A" :
            console.log("Congratulations You got A grade.");
            break;
        case "B" :
            console.log("Congratulations you have got B grade.");
            break;
        case "C" :
            console.log("Good You have got C grade");
            break;
        case "D" : 
            console.log("Not bad You have got D grade.");
            break;
        case "F" :
            console.log("Sorry! you have failed.");
            break;
        default :
            console.log("Please enter valid marks!!");
            break;
    }
}


checkSign(41);
checkSign(-23);

evenOrOdd(41);
evenOrOdd(52);

provideFeedback(getGrade(90));
provideFeedback(getGrade(80));
provideFeedback(getGrade(70));
provideFeedback(getGrade(60));
provideFeedback(getGrade(50));