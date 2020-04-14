document.getElementById('title1').textContent = '修改後的標題';

var AAA = 200;
var BBB = AAA * 3;
var CCC = "輸入文字，雙引號也可以:) " + BBB;
var DDD = 888;

document.getElementById('gogo').textContent = AAA;
document.getElementById('hihi').textContent = BBB;
document.getElementById('lala').textContent = CCC;

console.log(DDD);

var cookiePrice = 35;
var myMoney = 15;
var total = cookiePrice - myMoney;

document.getElementById('cookiePrice').textContent = cookiePrice;
document.getElementById('myMoney').textContent = myMoney;
document.getElementById('total').textContent = total;
document.getElementById('five').textContent = cookiePrice * 5;

function greet(){
    var greetNote = '您好，歡迎光臨';
    document.getElementById('greetId').textContent = greetNote;
    // alert('安安安安安安')
}
greet();

function order(hamNum,cokeNum){
    var total = (hamNum * 50) + (cokeNum * 20);
    document.getElementById('totalId').textContent = total;
}
order(8,1);

//全域變數
var change;

function count(oneNum,twoNum){
    var love = oneNum * twoNum; //區域變數
    change = oneNum * twoNum;
    console.log("總價格：" + love + "元");
}
count(2,20);

console.log(change);

document.getElementById('countId').onclick = function(){
    var hamPrice = 50;
    var cokePrice = 20;
    var hamNum = parseInt(document.getElementById('hamNumId').value)*hamPrice;
    var cokeNum = parseInt(document.getElementById('cokeNumId').value)*cokePrice;
    document.getElementById('totalMcId').textContent = hamNum + cokeNum
}
