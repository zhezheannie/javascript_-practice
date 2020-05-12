//----------- 陣列

var cornField1 = 8;
var cornField2 = 5;
var cornField3 = 6;

var cornField = [8,5,6];

console.log(cornField[0]);

//push

var cornField4 = [];
cornField4.push(5);
cornField4.push(8);
cornField4.push(6);

cornField4[0] = 10;

console.log(cornField4);

//length

console.log('我總共有' + cornField4.length + '個玉米田');

//----------- 物件

var farm = {
    farmer:'卡斯伯',
    chick: 15,
    dog: ['張姆士','龐的'],
    goDinner: function(){
        console.log(farm.farmer + '該回家吃晚飯');
    }
};

farm.goDinner();


//farm.chick = 15;
var dog1 = farm.dog[0]

console.log('我的農場裡的第一隻狗叫' + farm.dog[0]);

var house = {
    room:3,
    father:'Tom',
    son:['Jhon','Bob'],
    mom:'Mary',
}

console.log('第二個兒子名字是' + house.son[1]);


//----------- 物件+function

var farm = {
    farmer:'卡斯伯',
    chick: 15,
    duck:3,
    dog: ['張姆士','龐的'],
    goDinner: function(){
        console.log(farm.farmer + '該回家吃晚飯');
    },
    poultryTotal: function(){
        var num = farm.chick + farm.duck;
        console.log('我的農場總共有' + num + '家禽');
    }
};

farm.poultryTotal();


//----------- 物件+陣列

var farms = [
    {
        farmer:'卡斯伯',
        chick: 15,
        duck: 3,
        dogs: ['張姆士','龐的'],
        broccoliField: [6, 6, 6, 6],
        scarecrow: 9,
    },
    {
        farmer:'查理',
        dogs: ['皮皮'],
        chick: 30,
        cornField: [18, 12],
        broccoliField: [8, 8, 8],
        scarecrow: 6,
    },
];

console.log(farms[1].farmer);


