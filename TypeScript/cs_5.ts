let ans : any;
ans = 42;
console.log(ans);
ans = 'sarvan';
console.log(ans);

let answers : any[] = [];

answers.push('N0');
answers.push(10);
answers.push({comment : "N/A"});

console.log(answers);
const solutions : any = {};
function recordAnswer(questionID : string, answer : unknown) : void {
    solutions[questionID] = answer;
}

recordAnswer("q1", "black");
recordAnswer("q2", 67890);
recordAnswer("q3", ["apple", "banana"]);

console.log(solutions);