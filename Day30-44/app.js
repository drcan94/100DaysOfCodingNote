// *    variables are "labeled data containers"

const firstString = "Nureddin Nebati'nin gözlerindeki ışıltı :)";

// !    "\" sayesinde ' işaretini kesme olarak verebildik.. yoksa baş ve sondaki işaretlerle karıştırırdı..
// *    Formatter kısayoluna basınca bu saçmalığı neden yaptın deyip " Nebati'nin " formuna getiriyor :)

// !    const, let, var -> keywords -> atanma, değiştirilebilme ve scope'a göre farklı kurallar mevcut
// !    firstString -> variable -> naming rules var.. yazamam şimdi ama zaten öğreniliyo yazdıkça :)
// ?    = -> atama oparatörü
// ?    "", '', [], {}, 2, 12.3 vs -> value
// ?    ; -> semicolon -> not required but kullanmak güzeldir :)

//      data types;
//      number -> 32, 2.2 -> integer, float
//      string -> ""
//      array -> [1,"21",{}]
//      object -> {a:"", b:23}
//      obj.a şeklinde "." accessor'ü ile verilere erişiyoruz

//      code readability önemli falan :)

//      functions -> "function funcName() {}" veya "const funcName = () => {}" (arrow function)
//      tarayıcı, fonksiyonları çağrılmadığı sürece çalıştırmaz.. sadece memorize eder..
//      çağrıldığı yerde execute eder (code on demand)

// !    function declaration/statement -> function f(param1,param2,...) {return something;}
//      bu tip fonksiyonlar hoisted olduğu için compiler tarafından yukarı kaldırılır ve önce
//      çağrılıp sonra tanımlanabilir.

// !    function expression -> deklare edilen fonksiyonu değişkene atadığımızda expression olur..
//      burada ise hoisted işlevi geçerli değildir (not hoisted) ve initialize edilmeden çağrılamazlar

//
//      fonksiyon tanımlarken verdiğimiz geçici değişkenlere parametre;
//      fonksiyonu çağırdığımızda verdiğimiz değişkenlere ise argüman deriz

//      scope'dan falan bahsediyor..
//      fonksiyonlarda "return" kavramı önemli elbette :) return ettiği şeyi bir değişkene atayabiliyoruz..
//      return etmezsek fonk. sadece çalışır ama bir değişkene atadığımızda undefined olur değişken..

//! const f = () => {
//!     console.log("hello")
//! }

//* const g = () => {
//*     console.log("hi")
//*     return "Naber"
//* }

//? const result1 = f()
//? const result2 = g()

//* console.log("result1;", result1) // undefined
//* console.log("result2;", result2) // "Naber"

//  Parameters -> f(x,y,z)

// Exercise time :)

const courseName = "100DaysOfCode";
const priceCourse = 28;
const mainGoals = ["To be SWE someday", "Earn Money", "To stay home :)"];

const courseObj = {
  name: courseName,
  price: priceCourse,
  goals: mainGoals,
};

const secondItemOfGoals = courseObj.goals[1];

const getListItem = (arr, index) => {
  const item = arr[index];
  return item;
};

const firstGoal = getListItem(courseObj.goals, 0);
// console.log(firstGoal);

// methods -> functions in obj

const person = {
  name: "Burak", // property
  greeting: () => {
    // method
    console.log("Hello", person.name);
  },
};
// person.greeting();

// console.log()'u yeni anlatıyo saolsun :)

// Math operators -> % -> kalanı verir..
// i++, i--, +=, -=, *=, /= falan filan :)
// stringler toplanabilir ama concat'tır o.. yoksa mat değil :)
// 2 + "2" -> 22 (str)
// 2 * "2" -> 4 (int)

// console.log("hi" * 2); // python'da oluyodu ama js NaN döner :)

// string metodları zamanla öğreniyoruz zaten
const userName = "drcan94";
// console.log(userName.length); // karakter adedi

// array methods;
const arr1 = [1, 2, "4", [4, 6]];
// console.log(arr1.length);
// console.log(arr1.pop()); // arr'i değiştirip attığı kısmı return eder
// console.log(arr1);

// DOM -> Document Object Model
// window -> global obj
// this -> globalde window'a karşılık gelir
// window.alert() yerine direkt alert() yazabiliyoruz
// window.document yerine direkt document de yazabiliyoruz :) -> HTML elementlerine ulaştırıyor

// DOM -> data representation of the parsed HTML code

// console.dir(document); // tüm içeriği görebiliriz

// html dosyasındaki scripti body'nin en altına koymazsak hata verebilir.. çünkü tüm DOM oluşmamış henüz
// eğer head içinde script tanımlayacaksak html parsing bitene kadar beklemesi için "defer" attribute verilmeli

// sibling aynı leveldeki kardeş elementler oluyor :)

// drilling yöntemi pek mantıklı değil tabi.. query elements ile ilerliyoruz
// document.querySelector(".class")
// document.querySelector("#id")
// document.getElementById("id")
// document.getElementsByClassName("class")

// console.log(document.body.firstChild) // node olarak gösterir
// console.log(document.body.firstElementChild) // element olarak gösterir
// console.log(document.body.children[0]) // element olarak gösterir
// console.log(document.body.childNodes) // element olarak gösterir
// previousSibling -> node
// previousElementSibling -> element

// different ways;

// const anchorEl = document.getElementById("jshref");
const anchorEl = document.querySelector("#jshref");
// console.log("before ->",anchorEl.href)
anchorEl.href = "https://google.com";
// console.log("after  ->",anchorEl.href)
// console.log(anchorEl.parentElement)
// console.log(anchorEl.textContent)
// console.log(anchorEl.innerHTML)
// console.log(anchorEl.outerHTML)

// create elemenet;
const paragraphEl = document.createElement("p");
paragraphEl.innerHTML = "<h4>Hello World</h4>";
// document.body.appendChild(paragraphEl); // scriptten bile sonraya denk geliyor

// element silme
// anchorEl.remove()
// anchorEl.parentElement.removeChild(anchorEl) // for older browsers

// paragraphEl.parentElement.insertBefore(paragraphEl, anchorEl);
// paragraf elementini a tag'inden önceye yazdırdık

const mainScript = document.querySelector("#main-script");
// paragraphEl.parentElement.insertBefore(paragraphEl, mainScript);
// şimdi de p'yi ana scriptten önceye ekledik

// console.log(paragraphEl.innerHTML)  // HTML formatında gösterir
// console.log(paragraphEl.innerText)
// console.log(paragraphEl.textContent)

// paragraphEl.firstChild.innerText = "Naber"

// Events

const enteringHandler = () => {
  paragraphEl.firstChild.textContent = "Naber";
  console.log("üzerimden kalk lan :)");
};

const leavingHandler = () => {
  paragraphEl.firstChild.textContent = "Hello World";
  console.log("aferin :)");
};

const inputElement = document.getElementById("inputElement");
const counterElement = document.getElementById("counter");

const getRemainCharsOfInput = (e) => {
  // let enteredText = inputElement.value;
  // or
  let enteredText = e.target.value;
  let textLength = enteredText.length;
  const remainChar = 60 - textLength;
  // const ile tanımladığımız halde değer sürekli değişebiliyor..
  // aslında fonksiyon execute olduktan sonra değişken çöpe atılır ve her seferinde yeniden oluşturulur..
  // o yüzden değişti gibi görünüyor. yoksa const ile tanımlanan değişken tek execution içinde değiştirilemez

  // 60 yerine "let maxAllowedChars = inputElement.maxLength" yazılmalıymış

  // console.log(e.data)
  // input eventinde e.data ile her basılan tuşa ayrı ulaşırız
  counterElement.innerText = remainChar;
  // const ile tanımlanan counterElement'in kendisini değil bir property'sini değiştirebiliyoruz

  // control structures :)
  // -> which conditions         -> if/else if
  // -> how often to be executed -> loops

  // booleans -> true / false
  // and yes "true" === "true" -> returns true :)
  // and also "false" === "false" -> returns true :))) kahkahalarrr :)

  // truthy -> 1, 24, "something"
  // falsy  -> 0, ""
  // to see this use "Boolean(0) etc.."

  // ? comparison operators -> ==, ===, != (negation/inverse), <, >= ... etc
  // ? logical operators    -> && -> and
  // ?                      -> || -> or

  // 5 == "5" -> true
  // 5 === "5" -> false (tipe de bakar)

  // ! multiple combined conditions -> && has higher priority than ||
  // bunu aşmak için () kullanılabilir.. en önce parantez içi halledilir (bkz. işlem önceliği :))
  //   priority önemli -> önce "&&" olan durum sonra "||" olan durum değerlendirilir
  //                   -> 2===2 || 2===3 && 5===6 -> burada önce || operatörünü
  //                                                 işleme alsaydı sonuç false çıkardı.
  //                                                 fakat önce &&'ye bakılır ve false bulunup
  //                                                 sonra "2===2 || false" ifadesi true olarak bulunur

  if (remainChar === 0) {
    inputElement.classList.add("error");
    counterElement.classList.add("error");
  } else {
    inputElement.classList.remove("error");
    counterElement.classList.remove("error");
    if (remainChar <= 10) {
      inputElement.classList.add("less-than-bg");
      counterElement.classList.add("less-than-text");
    } else {
      inputElement.classList.remove("less-than-bg");
      counterElement.classList.remove("less-than-text");
    }
  }
};

const eventListeners = () => {
  // paragraphEl.addEventListener("mouseenter", enteringHandler);
  // enteringHandler() şeklinde yazmıyoruz (invoke etmiyoruz).. çünkü parametre olarak bir
  // fonksiyon geçiyoruz aslında -> callbsack function (to be executed in the future)
  // paragraphEl.addEventListener("mouseleave", leavingHandler);

  inputElement.addEventListener("input", getRemainCharsOfInput);
  // inputElement.addEventListener("change", getRemainCharsOfInput);
  // change ile yapınca en son halini yazdıktan sonra değişim varsa fonk çalışır
};

eventListeners();

// ? eventListener fonksiyonunu klasik "function eventListeners(){}"
// ? şeklinde (function declaration/statement -> hoisted) tanımlasaydık fonksiyonu
// ? tanımlamadan önce çağırdığımızda hata vermezdi.. (hoisted -> lift up yapar..
// ? yani yukarı kaldırılır ve önceden tanımlanmış gibi olur) ama const ile arrow
// ? function olarak tanımlayınca (function expression -> not hoisted) sırasıyla
// ? ilerlemek gerekiyor :)
// ! hata -> Cannot access 'eventListeners' before initialization

// -------------------------------------------------------------------

// Variables - Constants

// var değişkeni tekrar tekrar tanımlanabilir (declare)

// let de ise değişkenin değeri (value) değiştirilebilirken;
// let variable = "something" gibi bir ifade ile birden fazla kez declare edilemez.

// const ise asla değiştirelemez ve tekrar declare edilemez
// ayrıca const a; şeklinde önceden değişken olarak belirtip sonra değer atayamayız
// const h; // böyle bişey olmaz yani (initialize edilmelidir)

// block scope'da sadece var değişkeni dışardan görülür, let ve const sadece block'da çalışır.

// -------------------------------------------------------------------

// Loops
// "for", "for ... of" -> in arrays

// "for ... in" -> in objects
// while -> as long as a certain condition is met

for (let i = 0; i < 10; i++) {
  // console.log(i)
}
// console.log(i) // var ile tanımlasak hata vermezdi.. ama let block scope'da çalışır

const users = ["ali", "veli", "merhaba"];

for (let i = 0; i < users.length; i++) {
  // console.log(users[i])
}

for (let i of users) {
  // console.log(i);
  // elbette en güzeli :)
}

const job = {
  title: "SWE",
  salary: 20000,
  duty_time: 5,
};

for (const i in job) {
  // console.log(i, "->", job[i]);
}

let i = 0;
while (i < 10) {
  // console.log(i)
  i++
}
// console.log("last state of i ->",i)

// let isFinished = false;
// while (!isFinished) {
//   isFinished = confirm("Enough?")
//   console.log("i will ask until you press ok :)")
// }
// console.log("ok then :)")