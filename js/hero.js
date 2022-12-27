//Wellcome Screen
var status1 = "🎄HPNY 2023!🎄";
document.getElementById("status1").textContent = status1;
var status2 = "🎄幸福な新年 2023!🎄";
document.getElementById("status2").textContent = status2;
//Below Wellcome Screen
var words = ["共に未来を前進させる", "クリエイティブは世界を作る", "未来は作れる", "すべての考えは常に重要です", "未来はここにある"];
var word = words[Math.floor(Math.random() * words.length)];
document.getElementById("hero").textContent = word;
