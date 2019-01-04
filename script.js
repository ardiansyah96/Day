var now = 2016

var birthDay = now - 26;

birthDay = now - 26 * 2;
//operator precedence
//2016 - 52

console.log(birthDay);
//variabel mutation
var ageJohn = 30;
var ageMark = 30;

//ageJohn = 26
//ageMark = 26
//ageJohn = ageMark(26)
ageJohn = ageMark = (3+5) * 4 - 6;
//Precedence Actifity
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
//27
ageJohn++;
//ageJohn = 27 + 1;
ageJohn = ageJohn + 1;
ageMark *= 1 ;
console.log(ageJohn);
console.log(ageMark);