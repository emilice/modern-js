//DERS 4 : Tür Dönüşümleri
//let sadece string ifadelere özgüdür

/* let num1='5' //num1'in içine string bir değişken tanımlanmış
let num2='10';

console.log(typeof num1); //string
console.log(num1+num2); //tipi string10, 510 */


/* let num1=Number('5')
let num2=Number('10')
let total=num1+num2;

console.log(total); //15
console.log(typeof total); //number */



let val;

//number to string
 val=String(10); //10,string
/*console.log(val.length); //2 */


//bool to string
val=String(true); //true

//date to string
val=new Date(); //Wed Oct 27 2021 15:48:56 GMT+0300 (GMT+03:00)
val=String(new Date()); //Wed Oct 27 2021 15:51:00 GMT+0300 (GMT+03:00)
val=String(new Date().getDay()); //val : 3

//array to string
val=String([1,2,3,4]); //1,2,3,4

val=(10).toString(); //10
val=(false).toString(); //false

//string to number
val=Number('10'); //10, number, val.length undefine sadece string ifadeler için bunun yerine val.toFixed :10.000
val=Number(true); //1, val.toFixed :1.000
val=Number(false); //0, val.toFixed :0.000
val=Number(null); //0, val.toFixed :0.000
val=Number('a'); //NaN, number,  val.toFixed :NaN
val=Number([1,2,3,4]); //Nan, number, NaN

//parseInt
//parseFloat

val=parseInt('10'); //10, number, 10.000
val=parseInt('10.5'); //10, number, 10.000
val=parseFloat('10.5'); //10.5, number, 10.500


console.log(val); 
console.log(typeof val); 
console.log(val.toFixed(3));


