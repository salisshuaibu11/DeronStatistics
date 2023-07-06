var performancecard = document.getElementById('performance');
var rec1 = document.getElementById('rec1');
var rec2 = document.getElementById('rec2');
var rec3 = document.getElementById('rec3');
var rec4 = document.getElementById('rec4');
var rec5 = document.getElementById('rec5');
var rec6 = document.getElementById('rec6');

var long1 = document.getElementById('long1');
var long2 = document.getElementById('long2');
var long3 = document.getElementById('long3');
var long4 = document.getElementById('long4');
var long5 = document.getElementById('long5');
var long6 = document.getElementById('long6');
var month = document.getElementById('month');
var week = document.getElementById('week');

const cards1 = document.getElementById('cards1');
var cards2 = document.getElementById('cards2');
var cards3 = document.getElementById('cards3');

var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');
var op5 = document.getElementById('op5');
var op6 = document.getElementById('op6');

const longers = document.getElementById('longers')

let scrollcontainer = document.querySelector('.News');
let backbtn = document.getElementById('backbtn');
let frontbtn = document.getElementById('frontbtn');

scrollcontainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault();
    scrollcontainer.scrollLeft += evt.deltaY;
    scrollcontainer.style.scrollBehaviour = "auto";
});

frontbtn.addEventListener('click', ()=>{
    scrollcontainer.scrollLeft += 900;
    scrollcontainer.style.scrollBehaviour = "smooth";
})

backbtn.addEventListener('click', ()=>{
    scrollcontainer.scrollLeft -= 900
    scrollcontainer.style.scrollBehaviour = "smooth";
})

performancecard.addEventListener("mouseover", onHover)
performancecard.addEventListener("mouseout", onDover)
month.addEventListener('click', onclickm)
week.addEventListener('click', onclickw)
cards1.addEventListener('mouseover', onH)
cards1.addEventListener('mouseout', onD)
function onHover(e){
    e.preventDefault();
    function recchange(){
        rec1.style.height = "205px";
        rec1.style.marginTop = "-195px";
        rec1.style.transition = "1s";

        rec2.style.height = "325px";
        rec2.style.marginTop = "-315px";
        rec2.style.transition = "1s";

        rec3.style.height = "90px";
        rec3.style.marginTop = "-80px"
        rec3.style.transition = "1s";

        rec4.style.height = "145px";
        rec4.style.marginTop = "-135px";
        rec4.style.transition = "1s";

        rec5.style.height = "205px";
        rec5.style.marginTop = "-195px";
        rec5.style.transition = "1s";

        rec6.style.height = "145px";
        rec6.style.marginTop = "-135px";
        rec6.style.transition = "1s";
    }
    recchange();
    sum = "hi"
    console.log(sum)
}

function onDover(e){
    e.preventDefault();
    function recchange(){
        rec1.style.height = "10px";
        rec1.style.marginTop = "0px";

        rec2.style.height = "10px";
        rec2.style.marginTop = "0px";

        rec3.style.height = "10px";
        rec3.style.marginTop = "0px";

        rec4.style.height = "10px";
        rec4.style.marginTop = "0px";

        rec5.style.height = "10px";
        rec5.style.marginTop = "0px";

        rec6.style.height = "10px";
        rec6.style.marginTop = "0px";

    }
    recchange();
    sm = "hrrtereri"
    console.log(sm)
}

function onclickm(e){
    e.preventDefault();
    long1.style.height = "170px";
    long1.style.marginTop = "-160px";
    long1.style.transition = "1s";

    long2.style.height = "313px";
    long2.style.marginTop = "-303px";
    long2.style.transition = "1s";

    long3.style.height = "375px";
    long3.style.marginTop = "-365px"
    long3.style.transition = "1s";

    long4.style.height = "235px";
    long4.style.marginTop = "-225px";
    long4.style.transition = "1s";

    long5.style.height = "110px";
    long5.style.marginTop = "-100px";
    long5.style.transition = "1s";

    long6.style.height = "313px";
    long6.style.marginTop = "-303px";
    long6.style.transition = "1s";

    week.style.backgroundColor = "white";
    month.style.backgroundColor = "gold"

    op1.innerHTML = 'Jan';
    op2.innerHTML = 'Feb';
    op3.innerHTML = 'Mar';
    op4.innerHTML = 'Apr';
    op5.innerHTML = 'May';
    op6.innerHTML = 'June';

    longers.style.marginLeft = '-470px'
}

function onclickw(e){
    e.preventDefault();
    long1.style.height = "375px";
    long1.style.marginTop = "-365px";
    long1.style.transition = "1s";

    long2.style.height = "110px";
    long2.style.marginTop = "-100px";
    long2.style.transition = "1s";

    long3.style.height = "235px";
    long3.style.marginTop = "-225px"
    long3.style.transition = "1s";

    long4.style.height = "313px";
    long4.style.marginTop = "-303px";
    long4.style.transition = "1s";

    long5.style.height = "170px";
    long5.style.marginTop = "-160px";
    long5.style.transition = "1s";

    long6.style.height = "110px";
    long6.style.marginTop = "-100px";
    long6.style.transition = "1s";

    week.style.backgroundColor = "gold";
    month.style.backgroundColor = "#5e72e4";

    op1.innerHTML = 'Wk1';
    op2.innerHTML = 'Wk2';
    op3.innerHTML = 'Wk3';
    op4.innerHTML = 'Wk4';
    op5.innerHTML = 'Wk5';
    op6.innerHTML = 'Wk6';

    longers.style.marginLeft = '-490px';
}

function onH(e){
    cards1.style.padding = "30px";
    cards1.style.transition = ".5s";

    cards2.style.padding = "20px";
    cards3.style.padding = "20px";
}