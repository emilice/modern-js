//DERS 2
//DEĞİŞKENLER (VARİABLES)

var age; //değişken tanımlamak için
console.log(age); //ekran çıktısı : undefined

age=20;
console.log(age); //ekran çıktısı : 20

var fullname="Emine Özçelik";
console.log(fullname); //Emine Özçelik

fullname="Kerim Özçelik";
console.log(fullname); //Kerim Özçelik 
//fullname içindeki eski değer silinir yeni değer yazılır.

//-------------------------------------------------------------------------------
//DEĞİŞKEN TANIMLAMA KURALLARI (VARİABLES DEFINITION RULES)

//Sayısal ifadeyle başlayamaz
var yas1=1;
console.log(yas1);
var _yas2=2;
console.log(_yas2);
var $yas3=3;
console.log($yas3);

//Komut ifadeleriyle tanımlama yapılamaz (var for; veya var switch; gibi)

//Birden fazla kelime içeriyorsa (var ad soyad="Emine Öz" yanlış bir kullanımdır)
var ad="Emine";
var soyad="Özçelik";
var ad_soyad="Emine Özçelik";

//case sensitive (büyük küçük duyarlılığı)
var firstName="Emine";
var FirstName="Kerim";

console.log(firstName);
console.log(FirstName);

//var, let, const
let city="Adana";
console.log(city);

const email="abc@gmail.com"; //bu değerin değişmeyeceğine eminsek const diye tanımlayabiliriz
console.log(email); //maili döndürür

email="bcd@gmail.com";
console.log(email); //hata verir





