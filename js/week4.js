var myMonth = 5;
var thisMonth = 12;

var birthdayCheck = myMonth == thisMonth;

document.getElementById('birthdayId').textContent = birthdayCheck;

var nowPeople = 1;
var totalPeople = 2;

var allPeople = totalPeople !== nowPeople;

document.getElementById('peopleId').textContent = allPeople;


var myBill = 1250;
var VIP = false;
var andCheck = myBill > 1000 && VIP == true;
var orCheck = myBill > 1000 || VIP == true;

document.getElementById('andId').textContent = andCheck;
document.getElementById('orId').textContent = orCheck;


var hungry = '飽足';

if(hungry == '飢餓'){
    console.log('我現在好餓');
}else{
    console.log('我現在一點都不想吃東西');
    console.log('我們走吧');
}

var hungry = 9; //飢餓程度 1~10

function eat(food){
    console.log('我現在要吃'+food);
}
if(hungry <= 3){
    eat('披薩');
}else if(hungry <= 5 && hungry > 3){
    eat('沙拉');
}else if(hungry == 6){
    eat('餅乾');
}else {
    console.log('我超飽我不想吃東西');
}


var light = 'blue';

function lightFun(str){
    console.log('目前是'+str+'警戒');
}

switch(light){
    case 'red':
    alert('紅色警戒');
    break;

    case 'blue':
    lightFun(light);
    break;

    default:
    alert('沒有任何資料');
    break;
}

