// Demo : Operators

// 1- Can ve Ada'nın boy ve kg bilgilerini alın
// 2- Alınan bilgilere göre kilo indexlerini hesaplayın
// **Formül : Kişinin kilosu / Boy uzunluğunun karesi
// 3- Hesaplanan indeks bilgisine göre karşılaştırma yapın
// 4- Aşağıdaki tabloya göre Can ve Ada hangi gruba giriyor

// 0 - 18,4 : Zayıf
// 18,5 -24,9 : Normal
// 25,0 - 29,9 : Fazla Kilolu
// 30,0 - 34,9 : Şişman (Obez)

let IndexCan; //let yerine varda kullanılabilir.
let IndexAda;

const kgCan = 60;
const kgAda = 40;

const heightCan = 1.7;
const heightAda = 1.5;

IndexAda = kgAda / (heightAda * heightAda);
IndexCan = kgCan / (heightCan * heightCan);

console.log("Ada", IndexAda, "Can", IndexCan);

let adaHigherIndex = IndexAda > IndexCan; //false
let canHigherIndex = IndexCan > IndexAda; //true

console.log(
  "Adanin kilo indexi Canin kilo indexinden daha buyuk : " + adaHigherIndex
);
console.log(
  "Canin kilo indexi Adanin kilo indexinden daha buyuk : " + canHigherIndex
);

let AdaZayif = (IndexAda >= 0) && (IndexAda <= 18.4);

