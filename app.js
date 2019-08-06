'use strict';
//esse é um comentário

let today = new Date();
let formatDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formatDate;
console.log("Olá! Tudo bem com você?");