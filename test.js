// let name = prompt ("Ваше имя?", "" );
// let work = prompt(`${name} Где вы работаете?`)
// alert(`Ты чмо? если работаешь в ${work} `)
// let person = confirm("Подтвердите")
// alert("Регистрация прошла успешно)")
////////////////////////////////////////////////////////


// let x = 10;
// let y = 30;
// console.log( y - x );


// var drawCats = function (howManyTimes) {
//     for (var i = 0; i < howManyTimes; i++) {
//         console.log(i + " =^.^=");
//     }
// };
// drawCats(10); // Вместо 10 тут может быть другое число
//
//
//
// let fack = function (howFack){
//     for(let i = 0; i < howFack; i++ ){
//         console.log(i +  " mIm ");
//     }
// }
// fack(10);


// let kat = function (govKat){
//     for(let i = 0; i < govKat; i++){
//         console.log(i + " =^.^= ")
//     }
// }
// kat(20);


// let a = 1999, b = 2000;
// console.log(a + b)
//
// let text = "Парралелепипед";
// console.log(text.slice(3, 6))


// let numberSister = 1 + 3;
// let nemverCandies = 8;
// console.log(nemverCandies / numberSister);


// let secInMimutes = 60;
// let minInThas = 60;
// let secondInSutckax = secInMimutes * minInThas;
// console.log(secondInSutckax);
// let hausInADye = 24;
// let secundInDie = hausInADye * secondInSutckax;
// console.log(secundInDie);
// let deiInYea = 365;
// let secondInYae = deiInYea  * secundInDie;
// console.log(secondInYae)
//
// let age = 27;
// console.log(age * secondInYae)


// let z = 0;
// ++z;
// ++z;
// --z;
// z++;
// z++;
// console.log(z)
//
//
// let w = 0;
// w++;
// w++;
// console.log(w)


// let t = 10;
// t  += 20
// console.log(t);
//
// let e = 20;
// e += 12;
// console.log(e)


// let griting = "Привет, ";
// let myName = "Максим"
// let result = griting + myName
// console.log(result.length);
// console.log(result[3] + result[4] + result[5]);
// console.log(result[4]);
// console.log(result[5])


// let y = "Чебурашка";
// console.log(y.slice(1,4));


// let o = "привет как дела"
// console.log(o.toUpperCase());//КАК ДЕЛА

// let l = "ПРИВЕТ КАК ДЕЛА"
// console.log(l.toLowerCase());/////как дела

// let text1 = "эЙ кАк дEла?"
// let text3 = text1[0].toUpperCase() + text1.slice(1).toLowerCase();
// console.log(text3);

///////////////////////////////////////////////////////////////////////
// let shower = true;     // Приводит false
// let dackBack = false;
// let result1 = shower && dackBack;
// console.log(result1);
//
// let apple = true; // Приводит true
// let chitrus = false;
// let result2 = apple || chitrus;
// console.log(result2);


// var isWeekend = false;
// var hadShower = true;
// var hasApple = false;
// var hasOrange = true;
// var shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
// console.log(shouldGoToSchool);
//
//
// let heidch = 150;
// let ростПосетителя = 155;
// let resul3 = ростПосетителя < heidch ;
// console.log(resul3);

///////////////////////////////////////////////////////////////////////
// let age11 = 11;
// let accompanied = true;

// let age12 = 12;
// let bilet = age12 > age11;
// console.log(bilet)

// let age10 = 10;
// let bilet1 = age10 === age11 || accompanied;
// console.log(bilet1);
//
// let biletNo = age10 === age11;
// console.log(biletNo);


// let age12 = 12;    //Можно
// let bilet = age11 < age12;
// console.log(bilet);
//
// let age10 = 10;  //Можно
// let bilet1 = age10 === age11 || accompanied;
// console.log(bilet1)
//
// let biletNo = age10 === age11;// Запрещено
// console.log(biletNo);

/////// Массив
// let auto = ["BMW", "RENO", "LADA", "PEGE", "OPEL", "GAJEL", "VOLCWAGEN"];
// auto[0] = "OKA";
// auto.push("Zil");
// console.log(auto);
// console.log(auto[3]);
// console.log(auto[6]);


// let foot = [];
// foot[0] = "Ogyrech";
// foot[1] = "Svekla";
// foot[2] = "Burack";
// foot[3] = "Kartoshka";
// foot[4] = "Petrushka";
// foot.push("Rapka")
// console.log(foot);
//
// let ric = Math.floor(Math.random() * 6);
// console.log(foot[ric])


// let dinosaursAndNumbers = [3, "динозавры", ["трицератопс", "стегозавр", 3627.5], 10, 12, 36, 1087, "lox"];
// console.log(dinosaursAndNumbers)
// console.log(dinosaursAndNumbers[2][2]);
// console.log(dinosaursAndNumbers.length)
// console.log(dinosaursAndNumbers[dinosaursAndNumbers.length - 1]);

// let enimal = ["Рыба", "Слон"];
// enimal.push("Рысь");
// enimal.push("Кобан");
// enimal.unshift("Мартышка")
// enimal.pop()
// let lol = enimal.pop();
// console.log(lol);
// console.log(enimal);


// let arr = [1, 2, 3, 4, 5, 6,7, 8, 9];
// arr.push(100)
// arr.pop();
// arr.unshift(256);
// arr.shift();
// console.log(arr.length);
// console.log(arr);
// console.log(arr[5]);


////////spret operator
// let city = ["Минск", "Брест", "Брянск", "Раков"];
// let spret = [ "Бобруйск", "Гродно", ...city];
// for(let i = 0; i< spret.length; i++){
//     console.log("Есть такие города как " + spret);
// }
// console.log(spret);
//
// // То же самое без spread-оператора
// const cities = ["Бобруйск", "Гродно"].concat( city); // Concat
// console.log(cities)


/////////ibdexOf
// var colors = ["красный", "зеленый", "синий"];
// colors.indexOf("синий");
// colors.indexOf("красный");
// colors.indexOf("зелёный");
// console.log(colors);

///////////JOIN
// let boringAnimals = ["Мартышка", "Кот", "Рыба", "Ящерица"];
// console.log(boringAnimals.join("-"))
// console.log(boringAnimals[2]);
// console.log(boringAnimals.length);

// let ages = [11, 14, 79];
// let age = ages.join(" ")
// console.log(age);


// var landmarks = [];
// landmarks.push("Мой дом");
// landmarks.push("Дорожка к дому");
// landmarks.push("Мигающий фонарь");
// landmarks.push("Протекающий гидрант");
// landmarks.push("Пожарная станция");
// landmarks.push("Приют для кошек");
// landmarks.push("Моя бывшая школа");
// landmarks.push("Дом подруги");
// console.log(landmarks.join(","))
//
// landmarks.pop();
// landmarks.pop();
// landmarks.pop();
// landmarks.pop();
// landmarks.pop();
// landmarks.pop();
// landmarks.pop();
// landmarks.pop();
// console.log(landmarks.join(","))


//////Math.random()
// console.log(Math.random() * 10);
// console.log(Math.floor(3.9999999))
// console.log(Math.floor(Math.random() * 10));
//
//
// let random = ["Собака", "Кошка", "Птичка", "Змея", "Хомяк"];
// res = Math.floor(Math.random() * 5);
// console.log(random[res]);


// var phrases = [
//     "Звучит неплохо",
//     "Да, это определенно надо сделать",
//     "Не думаю, что это хорошая идея",
//     "Может, не сегодня?",
// ];
//
// let res = Math.floor(Math.random() * 4);
// console.log(phrases[res]);

// var randomBodyParts = ["глаз", "нос", "череп"];
// var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
// var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
//
// randomBodyParts = randomBodyParts [Math.floor(Math.random() * 3)];
// randomAdjectives = randomAdjectives [Math.floor(Math.random() * 3)]
// randomWords = randomWords [Math.floor(Math.random() * randomWords.length)]
// let name = "У тубя " + randomBodyParts +  " словно "  +  randomAdjectives  + " " +  randomWords;
// console.log(name);


// var randomInsult = ["У тебя", randomBodyPart, "словно", randomAdjective, randomWord + "!!!"].join(" ");
// "У тебя череп словно дурацкая дубина!!!"


// let arr = [3, 2, 1];
// let resu = arr.join(" больше чем ");
// console.log(resu);


//////////Практическое задание
// let randomBodyParts = ["глаз", "нога", "жопа", "рот", "нос", "лицо", "голова", "уши", "ноздри", "пальцы", "руки",]
// let randomAdjectives = [ "гнилой", "блевотный", "вонючий", "мерский", "противный", "тухлый", "ублядский", "конченый", "трухлявая", "сморщеная", "жухлая", ]
// let randomAnimal = ["писюн", "рот", "кардан", "клык", "рог", "лоб", "хвост", "волос", "мех", "клюв", "коготь",]
// let randomWords = ["кролика", "обезьяны", "бегимота", "страуса", "мухи", "чупокабры", "крысы", "тушканчика", "собаки", "опосума", "андатры",]
//
// randomBodyParts = randomBodyParts [Math.floor(Math.random() * randomBodyParts.length)];
// randomAdjectives = randomAdjectives [Math.floor(Math.random() * randomAdjectives.length)];
// randomAnimal = randomAnimal [Math.floor(Math.random() * randomAnimal.length)];
// randomWords = randomWords [Math.floor(Math.random() * randomWords.length)];

// let name = ["У тебя ", randomBodyParts, "словно",  randomAnimal, " у " , randomWords].join(" ");
// console.log(name);    //Вариант 1

// let name = "У тебя "  + randomBodyParts + " словно " +  randomAnimal + " у "  + randomWords;
// console.log(name);     //Вариант 2


// let e = [3, 2, 1];

// let u = e.join(" больше чем ")
// console.log(u);


///////Обьекты
// let cat = {
//     "legs": 6,
//     "name": "Bella",
//     "color": "red"
// };
// console.log(cat.name);
// console.log(cat.color);
// console.log(Object.keys(cat));


// let cota = {
//     legs: 4,
//     name: "Bel",
//     color: "hreen"
// };
// console.log(cota)

///Создание обьекта
// let enot = {};
// enot ["legs"] = 3;
// enot ["name"] = "Ben";
// enot ["color"] = "blue";
// console.log(enot);

// let dog = {};
// dog.legs = 6;
// dog.name = "Lola";
// dog.color = "green"
// console.log(dog);


//Обьект в массиве
// let cat1 = [
//     {name:"lusa", age: 21, budget: 5000 },
//     {name:"Feda", age: 11, budget: 239 },
//     {name:"Vasa", age: 3, budget: 10 },
//     {name:"Vala", age: 11, budget: 110 },
//     {name:"Asa", age: 9, budget: 1023 },
//     {name:"Vika", age: 12, budget: 1 },
//     {name:"Sasha", age: 25, budget: 1550 },
//     {name:"Maks", age: 27, budget: 4310 }
// ];

// if (cat1.length > 10){
//     console.log("Хорошо")
// }else {
//     console.log("Тухло")
// }
// console.log(cat1)

// let resul = cat1.filter(person =>{
//     if(person.budget >= 1500){
//         return true
//     }
// })
// console.log(resul);

// console.log(cat1[1]);
// console.log(cat1[6]);
// console.log(cat1[7]);
//console.log(cat1.length)

// console.log(cat1[5] ["budget"])
//  console.log(cat1[3].name);

// var anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
// var dave = { name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40] };
// var kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };

// let frend = [anna, dave, kate];
// console.log(frend);
// console.log(frend[1].luckyNumbers[2]);
// console.log(frend[2]);


// let mani = { };
//  mani.Lila = 40;
//  mani.Vlad = 134;
//  mani.Stith = 200;
//  mani["Lila"] += 60;
// console.log(mani.Lila);
// console.log(mani);


// let films = {
//     "Взлом": {
//         "Рейтинг Кинопоиска": 6.5,
//         "Рейтинг IMDb": 6.3,
//         Год: 2000,
//         Страна: "США",
//         Режиссер: ["Джо Чаппелль («Прослушка», «Грань», «Чикаго в огне», «Манифест"],
//         Жанр: ["триллер, драма, криминал, биография"]
//     },
//     "Кто я": {
//         "Рейтинг Кинопоиска": 7.4,
//         "Рейтинг IMDb": 7.6,
//         Год: 2014,
//         Страна: "Германия",
//         Режиссер: ["Баран бо Одар («Тьма» (сериал), «Тишина»)"],
//         Жанр: ["фантастика, триллер, драма, криминал"]
// },
//
//
//         "Пятая власть": {
//         "Рейтинг Кинопоиска": 6.6,
//         "Рейтинг IMDb": 6.2,
//         Год: 2013,
//         Страна: ["Великобритания, Бельгия"],
//         Режиссер: ["Билл Кондон («Хороший лжец», «Боги и монстры», «Красавица и чудовище»)"],
//         Жанр: ["триллер, драма, криминал, биография"]
//     }
//
// };

// let film1 = films["Взлом"];
// console.log(film1.Год);
// console.log(film1.формат);

// let film2 = films["Трансформеры"];
// console.log(film2.актёры);


//Добавление обьектаа
// let cars = {
// "Рейтинг Кинопоиска": 7.2,
// "Рейтинг IMDb": 6.5,
// Год: 2001,
// Страна: "США",
// Режиссер: ["Доминик Сена"],
// Жанр: ["боевик, триллер, криминал"]
// };
// films["Пароль Рыба-меч"] = cars;
//
// console.log(films)

// console.log(Object.keys(films));


//Практическое по обьектам
// let myCrazyObject = {
//     "name": "Нелепый объект",
//     "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
//     "random animal": "Банановая акула"
// };
// console.log(myCrazyObject["some array"][2].number);


// let долги = {};
// долги ["Миша"] = 10;
// долги ["Маша"] = 10;
// долги ["Степан"] = 20;
// долги ["Макс"] = 30;
// долги.Макс += 35;
// долги.Макс += 40;
// долги.Маша += 100;
// долги.Степан += 100000000;
// console.log(долги);


//Конструкция if
//  let name = "Николай";
// console.log("Привет " + name);
// if(name.length > 6){
//     console.log("Какое у вас длинное имя, "  + name);
// }

//Конструкция if... else
// let name2 = "Nik";
// console.log("Привет " + name2);
// if(name2.length > 6){
//     console.log("Какое у вас длинное имя, "  + name);
// } else {
//     console.log("Коротыш у вас имя " + name2);
// }

// let eda = ["Банан", "Киви", "Лимон"];
// if(eda.length > 3){
//     console.log("Покпаю: " + eda)
// }else {
//     console.log("Я ухожу без покупок")
// }


// let lemonChicken = false;
// let beefWithBlackBean = false;
// let sweetAndSourPork = false;
//
// if(lemonChicken){
//     console.log("Принесите пожалуйста Курицу с лимонам")
// } else if(beefWithBlackBean){
//     console.log("Тогда несите БОбы" + "Уёбки")
// } else  if(sweetAndSourPork){
//     console.log("Суки нисите хоть что нибудь")
// } else{
//     console.log("Ебучий ресторан несите свой бляцкий рис!!!!!!")
// }

// let name = "Максим";
// let nameMom = "Наташа";
// let nameDad = "Вася";
//
// if(name === "Максим"){
//     console.log("Это ваше имя")
// }else {
//     console.log("Пшол нахуй")
// }
//
// if(nameMom === "Наташа"){
//     console.log("Привет Мама")
// }else {
//     console.log("Ты не мама пшол нахуй")
// }
//
// if(nameDad === "Вася"){
//     console.log("привет папа")
// }else {
//     console.log("Это не папа пшол нахуй")
// }


//Цикл while
// let овцы = 0;
//   while (овцы < 10){
//       console.log("Посчитано овец " + овцы + " !!!");
//     овцы++;
// };
// console.log("Хрхрхрхрхрхрхрхрхрхрхрхрхр")


//Бесконечный цикл      //без ++ будет бесконечный цикл
// let овцы = 0;
// while (овцы < 10){
//     console.log("Посчитано овец " + овцы + " !!!");
//     овцы++;
// };
// console.log("Хрхрхрхрхрхрхрхрхрхрхрхрхр")


// let банкноты = 0;
// while (банкноты < 10){
//     console.log("Посчитано банкнот " + банкноты);
//     банкноты++
// }
// console.log("Вся сумма на месте");


//Цикл for
// for(банкноты = 0; банкноты < 10; банкноты++){
//     console.log("Посчитать  деньги "  + банкноты);
// }
// console.log("Деньги посчитаны");

//выведит привет 3 раза
// let time = 3;
// for (let i = 0;  i < time; i++) {
//     console.log("Пока");
// }

// let animal = ["Лев", "Собака", "Жираф", "Тигр"];
// for(let i = 0; i < animal.length; i++){
//     console.log("В это заопарке есть " + animal[i] )
// };


// let name = "Максим";
// for (let i = 0; i < name.length; i++) {
//     console.log("В моем имени есть буква " + name[i] + ".");
// }

// for (let x = 3; x < 10000; x = x * 3){
//     console.log(x)
// };

// let лев = 100;
// while (лев < 10000){
//     console.log(лев);
//     лев++
// }

//Практичесеое задание
// let  animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
// animals[0] = animals[0] + " - прекрасное животное";
// animals[1] = animals[1] + " - прекрасное животное";
// animals[2] = animals[2] + " - прекрасное животное";
// animals[3] = animals[3] + " - прекрасное животное";
// for (let i = 3; i < animals.length; i++){
//     console.log(animals)
// };


// let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// let rs = "";
// while (rs.length < 6) {
//     rs += alphabet[Math.floor(Math.random() * alphabet.length)];
// }
// console.log(rs);


// let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// let randomStrung = "";
// while (randomStrung.length < 10){
//     randomStrung += alphabet[Math.floor(Math.random() * alphabet.length)]
// }
// console.log(randomStrung);


// let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// let ser = "";
// while (ser.length < 10){
//     ser += alphabet[Math.floor(Math.random() * alphabet.length)]
// }
// console.log(ser)


//////////////Xакерский язык
// var input = "javascript is awesome";
// var output = "";
// for (let i = 0; i < input.length; i++){
//     let symbol = input[i]
//     switch (symbol) {
//         case 'a': output += '4'; break;
//         case 'e': output += '3'; break;
//         case 'i': output += '1'; break;
//         case 'o': output += '0'; break;
//         case 't': output += '7'; break;
//         default: output += symbol;
//     }
// }
// console.log(output);



// let input = "java is not the green";
// let lesson = "";
// for (let i = 0; i < input.length; i++){
//     let symbal = input[i];
//
//     switch (symbal){
//         case "j": lesson +=  "1"; break;
//         case "a": lesson +=  "5"; break;
//         case "v": lesson +=  "9"; break;
//         case "g": lesson +=  "7"; break;
//         case "s": lesson +=  "8"; break;
//         case "r": lesson +=  "2"; break;
//         case "e": lesson +=  "6"; break;
//         default: lesson  += symbal
//     }
// }
// console.log(lesson)


// let  input = "javascript is awesome";
// let lesson = "";
// for (let i = 0; i < input.length; i++){
//     let symbal = input[i];
//     switch (symbal){
//         case  'a': lesson += '0'; break;
//         case  'j': lesson += '7'; break;
//         case  'v': lesson += '9'; break;
//         case  's': lesson += '3'; break;
//         case  'p': lesson += '1'; break;
//         default: lesson += symbal
//     }
// }
// console.log(lesson);


// let animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
// animals[0] = animals[0] + " - Милое животнае";
// animals[1] = animals[1] + " - Милое животнае";
// animals[2] = animals[2] + " - Милое животнае";
// animals[3] = animals[3] + " - Милое животнае";
// for (let i = 3; i < animals.length; i++){
//     console.log(animals);
// }


//  let animals = ["Кот", "Рыба", "Лемур", "Комодский варан"];
// animals[0] = animals[0] + " - Хуйлуша";
// animals[1] = animals[1] + " - Хуйлуша";
// animals[2] = animals[2] + " - Хуйлуша";
// animals[3] = animals[3] + " - Хуйлуша";
// for (let i = 3; i < animals.length; i++){
//     console.log(animals)
// }
// let random = Math.floor(Math.random() * animals.length);
// console.log(animals[random]);




// let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// let randomSrting = "";
// while (randomSrting.length < 10){
//     randomSrting += alphabet[Math.floor(Math.random() * alphabet.length)]
// }
// console.log(randomSrting);
//
//
//
// let input = " java kak dala drugan"
// let open = "";
// for (let i = 0; i < input.length; i++){
//     let symbol = input[i];
//     switch (symbol){
//         case 'j': open += '3'; break;
//         case 'k': open += '9'; break;
//         case 'a': open += '3'; break;
//         case 'd': open += '1'; break;
//         case 'v': open += '0'; break;
//         default: open += symbol;
//     }
// }
// console.log(open);


// let name = prompt("Как ваше имя?");
// console.log("Привет " + name);



// let cat = confirm("Вы любите кошек");
// if (cat){
//     alert("Это замечательно")
// }else {
//     alert("Ну ты и чмо")
// }



// let likeCat = confirm("Тебе нравятся кошки");
// if (likeCat){
//     console.log("Это замечательно");
// }else {
//     console.log("Печально")// }

// let words = [
//     "макака",
//     "программа",
//     "листья",
//     "гроза",
//     "крыса",
//     "дамба",
//     "перекрёсток",
//     "облысение"
// ];
// let word = words [Math.floor(Math.random() * words.length)];
// let answerArray = [];
// for (let i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
// }
// let remainingLetters = word.length;
// // while (remainingLetters > 0) {
// //     alert(answerArray.join(" "));
// //     let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
// //     if (guess === null) {
// //         break;
// //     } else if (guess.length !== 1) {
// //         alert("Пожалуйста, введите только одну букву.");
// //     } else {
// //         for (let j = 0; j < word.length; j++) {
// //             if (word[j] === guess) {
// //                 answerArray[j] = guess;
// //                 remainingLetters--;
// //             }
// //         }
// //
// //     }
// //
// // }
// alert(answerArray.join(" "));
// alert("Отлично! Было загадано слово " + word);


// let words = [
//     "Мартышка",
//     "Петух",
//     "Корова",
//     "Курица",
// ];
// let word = words[Math.floor(Math.random() * words.length)];
// let answerArray = [];
// for (let i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
// }
// let remainingLetters = word.length;
// while (remainingLetters > 0) {
//     alert(answerArray.join(" "))
//
//     let guess = prompt("Напишите юукву или Вы хотите закончить");
//     if (guess === null) {
//         break;
//     } else if (guess.length !== 1) {
//         alert("Надо ввсести только одну букву")
//     } else {
//         for (let j = 0; j < word.length; j++) {
//             if (word[j] === guess) {
//                 answerArray[j] = guess;
//                 remainingLetters--;
//             }
//         }
//     }
// }
//
// alert(answerArray.join(""))
// alert("Поздравляем было загадано слова " + word);



////////////////////////Function глава 8
// let fun = function (kat){
// for (let i = 0; i < kat; i++){
//     console.log(i + " 10");
// }
// }
// fun(20);

// let fun2 = function (){
//     console.log("Привет мир!!!");
// }
// fun2();


// function
// function random (){
//     let min = 0;
//     let max = 100;
//     let res = Math.floor( min + Math.random() * (max + 1 - min))
//     console.log(res)
// }
// random();

/// function
// function random (min, max){
//     let rand1 = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand1);
// }
// let res = random (1, 100);
// console.log(res);


// function random(){
//     let min = 1;
//     let max = 50;
//     let res = Math.floor(min + Math.random() * (max + 1 - min));
//     console.log(res)
// }
//  random()


// let fun = function (){
//     console.log("Привет Мир!!!");
// }
// fun();
//
// let fun2 = function(name) {
//     console.log("Привет " + name);
// }
// fun2("Никита");
// fun2("Анна");


// let fun3 = function (dog){
//     for (let i = 1; i < dog; i++){
//         console.log(i + " Максим")
//     }
// }
// fun3(10);


// let fun4 = function (howMany, whatTo){
//     for (let i = 0; i < howMany; i++ ){
//         console.log( i + "" + whatTo)
//     }
// }
// fun4(10, " Yashchanka");

//Функция возвращения
// let double = function (number) {
//     return number * 2;
//
// }
// console.log(double(3));


// let random = function (word){
//     return word [Math.floor(Math.random() * word.length)]
// };

// let animal = ["кот", "собака", "гусь", "корова", "курица"]
//
// console.log(random(animal));

// let foot = ["пицца", "шаверма", "мясо", "лапша", "курица", "заливное", "куркума",]
// console.log(random(foot));

//
// var randomBodyParts = ["глаз", "нос", "череп"];
// var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
// var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
// let draz = "У тебя " + random(randomBodyParts) + " словно " + random(randomAdjectives) + " " + random(randomWords);
// console.log(draz);


//Дразнилка на функии
// let func = function (){
//     var randomBodyParts = ["глаз", "нос", "череп"];
//     var randomAdjectives = ["вонючая", "унылая", "дурацкая"];
//     var randomWords = ["муха", "выдра", "дубина", "мартышка", "крыса"];
//     let draz = "У тебя " + random(randomBodyParts) + " словно " + random(randomAdjectives) + " " + random(randomWords)
//     return draz;
// }
// console.log(func())


// let fun5 = function (name){
//     if (name.length < 5){
//         return;
//     }
//     console.log("В этом имени есть такая буква: " + name[0])
// }
// fun5("Николай");




// let medalForScore = function (score) {
//     if(score < 3){
//         return "Бронза";
//     }
//     else  if (score < 7){
//         return "Серебро";
//     }
//     else{
//         return "Золото";
//     }
//
// }
// console.log(medalForScore(7));

// 1 вариант длинный
// var double = function (number) {
//     return number * 2;
// };

// 2 вариант короткий
// function double2 (number) {
//     return number * 2;
// };


//Практическое задание
// function add (a, b){
//     return a + b;
//
// };
// console.log(add(36325,  9824 , 777))
//
//
// function multiply (c, d){
//     return c * d
// };
// console.log(multiply(36325,  9824 , 777))


// function  areArraysSame (a, b){
//     for (let i = 2; i < a.length; i++){
//         if(a.length != b.length){
//             console.log(false)
//             break;
//         } if(a[i] != b[i]){
//             console.log(false);
//             return;
//         }if ( a[i] === b[i] ){
//             console.log(true);
//         }
//     }
// }
// areArraysSame([1, 2, 3], [4, 5, 6]);
// areArraysSame([1, 2, 3], [1, 2, 3]);
// areArraysSame([1, 2, 3], [1, 2, 3, 4]);


// function areArraysSame (a, b) {
//     for (let i = 2; i < a.length; i++){
//         if (a.length != b.length){
//             console.log(false)
//             break;
//         } if(a[i] != b[i]){
//             console.log(false)
//             return;
//         } if (a[i] === b[i]){
//             console.log(true)
//         }
//     }
// }
// areArraysSame([1, 2, 3], [4, 5, 6]);
// areArraysSame([1, 2, 3], [1, 2, 3]);
// areArraysSame([1, 2, 3], [1, 2, 3, 4]);


//DOM
// let headingElement = document.getElementById("main-heading");
// console.log(headingElement.innerHTML);
// let res = prompt("Поменяй заголовок");
// headingElement.innerHTML = res;




// document.getElementById("out").innerHTML = "<p class='text'> Пример!</p>";

// let div = document.createElement("div");
// console.log(div);
// div.innerHTML = "<h1>Js green</h1>";
// div.classList.add("main", "red");
// document.body.appendChild(div);  //appendChild встовляет в браузер

// document.body. insertBefore(div, document.getElementById("out"));  //insertBefore первый элемент
// новый (div) второй пере перед каким элементом он станет (document.getElementById("out"))

// document.body. insertBefore(div, document.getElementById("container"));




// let div = document.createElement("div");
// div.className = "row"
// div.innerHTML = "<h3>Js</h3>"
// console.log(div)



// let lol = document.getElementById("lol");
// let p = lol.getElementsByTagName("p");
// console.log(p);
// let div = document.getElementsByTagName("div");
// console.log(div);
// div[0].style.background = "blue";
// div[2].style.background = "green";
// div[4].style.background = "red";


// let div1 = document.querySelector('div').querySelector('p')
// console.log(div1);
//Или так
// let div2 = document.querySelector('#lol  p');
// console.log(div2);


// let div3 = document.querySelectorAll('div'); //Collection div
// console.log(div3[4]);
// let div3 = document.querySelectorAll('div p');
// console.log(div3);


// lol.style.background = "blue";


// let div5 = document.querySelector("div");
// // let child = div5.childNodes;
// let child = div5.children;
// console.log( child);

// let hyper = document.querySelector("a");
 // console.log(hyper.parentElement);                       //Возвращает родителя (а)
// Можно  console.log(hyper.parentElement.parentElement)    //родитель еще выше
// console.log(hyper.parentElement.nextElementSibling);          //следующий див
// console.log(hyper.parentElement.previousElementSibling);      // предыдущий див


// function go() {
//     alert("Как дела")
//     alert("Как настроение")
//         let name = prompt("Ваше имя");
//         alert("Приятно познакомиться " + name);
// }
//
// function reset() {
//     let guess = prompt("Вы весёлый?")
//         if (guess === null){
//         }else if(guess.length < 3){
//     alert("Молодец")
//         }else {
//     alert("Сьёбывай")
//         }
//
// };



const div = document.createElement("div");
div.classList.add("container");
const body = document.querySelector("body");
document.body.append(div)
const header = document.createElement("h1")
header.textContent = "Приколы не дорого"
div.insertAdjacentElement("beforebegin", header);
const ul = `
        <ul>
        <li>Один</li>
        <li>Два</li>
        <li>Три</li>
        <li>Четыре</li>
        </ul>
`;
div.innerHTML = ul;

const img = document.createElement("img");
img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQTaQt0mzYMYt3V5GpqaTfDjjvbuhmODGBw&usqp=CAU"
img.width = 250;
img.classList.add("super");
img.alt = "super man"
div.appendChild(img);






