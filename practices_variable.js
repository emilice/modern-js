

//Bir müşterinin aşağıdaki bilgileri için değişken oluşturma

//Müşteri adı
//Müşterş soyadı
//Müşteri tc
//Müşteri sipariş toplamı
//Müşteri cinsiyet
//Müşteri adres bilgisi
//Müşteri hobiler

var customerName = "Emine";
var customerLastName = "Özçelik";

var fullName = "Emine ÖZçelik";
var musteriId = "111111111";

var total = 205.6;
var gender = true; //erkek true, kadın false

//object
var address = {
  city: "Ankara",
  district: "Çankaya",
  body: "Bahçelievler, 7. Cadde",
};

//array
var hobbies=['Sinema', 'Kitap', 'Spor'];

//Siparişlerin toplamını hesaplama
var order1 = Number("100");
var order2 = Number("150");

var totalOrder1=order1+order2;
console.log(totalOrder1);

//Siparişlerin toplamı
var order3 = Number("100.2");
var order4 = Number("150.5");

var totalOrder2=order3+order4;
console.log(totalOrder2);

//Siparişlerin toplamını tamsayı olarak hesaplama
var order4 = parseInt("100.7");
var order5 = parseInt("150.5");

var totalOrder3=order4+order5;
console.log(totalOrder3);

//verilen doğum yılına göre yaş hesaplama
/* var yearOfBirth=1995;  */
const yearOfBirth=1995; //bu değerin değişmesini istemiyorsak const kullanlır
//yearOfBirth=1996 ;
//95 yeri 66 değeri yazılırsa Uncaught, TypeError:Assignment to constant variable. (hatası alınır. Çünkü const sabit bir değişkendir)

console.log(new Date().getFullYear()-yearOfBirth);

//string ifadenin karakter sayısını bulma
var course="Modern JS"; //var yerine lette kullanılabilir, 
console.log(course.length);

//const, let farkı



