var el = document.querySelector('.title span');
el.textContent = '123';

var aa = document.querySelectorAll('.title2 span');
aa[0].textContent = '666';
aa[1].textContent = '777';

var aaLen= aa.length;

for(var i = 0; i < aaLen; i++){
    aa[i].textContent = i+'888';
}

var bb = document.querySelector('.title3 a');
bb.setAttribute('href','http://www.google.com');

var cc = document.querySelector('.str');
cc.setAttribute('id','strId')

var dd = document.querySelector('.title3 a').getAttribute('href');
console.log(dd);

var ee = document.getElementById('main');
ee.innerHTML = '<h1 id="strId">GoGoGo</h1>'

var gg = document.getElementById('main2');
var ff = '<h3>1234</h3>';
gg.innerHTML = ff+ff;

var hh = document.querySelector('.list');
var link = 'http://google.com';

hh.innerHTML = '<li><a href="'+ link + '">查理</a></li>'