//Wellcome Screen
var status1 = "👋Hello World!👋";
document.getElementById("status1").textContent = status1;
var status2 = "👋こんにちは世界!👋";
document.getElementById("status2").textContent = status2;
//Below Wellcome Screen
var words = ["ようこそ", "はじめまして", "いらっしゃいませ", "こんにちは", "どうぞごゆっくりご覧ください"];
var word = words[Math.floor(Math.random() * words.length)];
document.getElementById("hero").textContent = word;