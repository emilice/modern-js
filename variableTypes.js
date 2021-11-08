//DERS 3
//DEĞİŞKEN TİPLERİ (VARIABLE TYPES)
//Bellekte tutulma biçimleri birbirinden ayıran özellikleridir.
//"==" primite'de değişken içindeki değerleri, referance'da nesnelerin adreslerinin eşit olup olmadığını kontrol eder

/* Long a = new Long(5);
Long b = new Long(5);
console.log(a == b);
Sonuç false dönecektir çünkü adresleri farklıdır. 
console.log(a.equals(b));
Sonuç true dönecektir çünkü değişkenlerin içindeki değerler aynıdır.

https://metinalniacik.medium.com/primitive-type-reference-object-type-68576f4cfb5b
*/

// 1- Primitive Types (İlkel tip, değerleri yığıt üzerinde tutulan ilkel tip; long, int, double)

//String
let firstName="Emine";
console.log(typeof firstName);

//Number
let age=20;
console.log(typeof age);

let money=100.5;
console.log(typeof money);

//Boolean koşullarda kullanılır
let isActive=true;
console.log(typeof isActive);

//null herhangi bir değerin atanmadığı, boşluğu temsil eder, primitive bir tif alır
let job=null;
console.log(typeof job);

// 2- Referance Types - Objects (Pointerları stackte  değerleri heap(yığın)de bulunan veri tipleri; string, int[], değer girilmediğinde varsayılan null)

//Array
let names=['Ali', 'Ahmet', 'Can'];
console.log(typeof names)

//Object
let adress={
    city:'Kocaeli',
    country:'Türkiye'
}
console.log(typeof adress);

//Function
var calculateAge=function(){
    return 0;
};
console.log(typeof calculateAge);