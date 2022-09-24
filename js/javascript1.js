let str = "Welcome To Neosoft Technologies International SEI-CMMI Level 5 and ISO 9001:2008 certified global IT consulting & software";
let str1 = str.indexOf("Neo");
console.log(str1);
document.write(`${str1} <br><br>`);

let str2 = str.lastIndexOf("International");
console.log(str2);
document.write(`${str2} <br><br>`);

let str3 = str.search("Level");
console.log(str3);
document.write(`${str3} <br><br>`);

let str4 = str.toUpperCase();
console.log(str4);
document.write(`${str4} <br><br>`);

let str5 = str.toLowerCase();
console.log(str5);
document.write(`${str5} <br><br>`);

let str6 = str.replace("Welcome", "Join");
console.log(str6);
document.write(`${str6} <br><br>`);

let str7 = '      Logn Live Mother India      ';
console.log(str7.trim());
console.log(str7);
console.log('Before trimed ' + str7.length);
console.log(str7.trimStart());
console.log('After trimed ' + str7.trimStart().length);
console.log(str7.trimEnd());


const text = "HTML is Hypertext Markup Language use to crate basic structure of web application."
let show = text.includes('is');
console.log(show);


let str8 = '12345678'.padStart(10, 0);
console.log(str8);

let str9 = 'abcdefg'.padStart(10);
console.log(str9);




