//OPERATÖRLER

let val;
const a = 10;
const b = 5;
const c = 5;
let d = 3;

// 1- Aritmetik
val = a + b;
val = a - b;
val = a * b;
val = a / b;
val = a % b;
val = d++;
val = ++d;
val = --d;
val = d--;

// 2- Atama
val = a; //10
val += a; //20 val=val+a;
val -= a; //10 val=val-a;
val *= a; //100 val=val*a;
val /= a; //10 val=val/a;
val %= a; //0 val=val½a;

// 3- Karşılaştırma
val = a == b; //false
val = b == c; //true
val = a === b; //false
val = b === c; //true
//ÖNEMLİ 3 eşittir varsa değer ve tip kontrolü yapılır. 2 eşittirde sadece değer kontrolü yapılır
val = 5 === 5; //true int, int
val = 5 === "5"; //false int, string
val = a != b; //true a, b'ye eşit değil mi
val = a !== b; //true a, b'ye eşit değil mi (değer, tip)
val = a > b;
val = a < b;
val = a >= b;
val = 5 >= 5;
val = a <= b;

//4- Mantıksal
// && And

//true && true =>true
//true && false =>true
//false && false =>false

val = a > b && a > c; //true
val = a > b || a < c; //true
val = !(a > b); //false

// || Or

//true && true =>true
//true && false =>true
//false && false =>false

// ! Not

//!false => true
//!true => false

console.log(val);
console.log(typeof val);
