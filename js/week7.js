var el = document.querySelector('.btn');
el.onclick = function(e){
    console.log(e);
     alert("安安")
 }

var bbb = document.querySelector('.bbb');
                    //選擇事件,帶入匿名function,false
bbb.addEventListener('click',function(e){
    alert('hello');
},false)


var elOn = document.querySelector('.btnOn');
elOn.onclick = function(){
    alert('on-1');
}
elOn.onclick = function(){
    alert('on-2');
}

var elAd = document.querySelector('.btnAdd');
elAd.addEventListener('click',function(){
    alert('add-1')
},false)
elAd.addEventListener('click',function(){
    alert('add-2')
},false)



var ccc = document.querySelector('.box');
ccc.addEventListener('click',function(c){
    c.stopPropagation();
    alert('box');
},false);

//var elBody = document.querySelector('.body');
//elBody.addEventListener('click',function(){
//    alert('body');
//},false);

// false (事件氣泡 - event bubbling) - 從指定元素向外找
// ture (事件捕捉 - event Capturing) - 從最外層找到指定元素


var ddd = document.querySelector('.link');
ddd.addEventListener('click',function(d){
    //取消元素的默認行為

    //原本點連結會跳轉到指定網頁
    d.preventDefault();
    console.log('test');
})
