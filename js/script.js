/* ==========================================================
   PORTAL EMS BRASIL
   SCRIPT.JS V3
   PARTE 1/4
========================================================== */

const buttons = document.querySelectorAll(".timelineButton");

const frames = document.querySelectorAll(".frame");

const teaser = document.getElementById("teaser");

const hero = document.getElementById("heroContainer");

const heroTitle = document.getElementById("heroTitle");

let opened = [];

let locked = false;





buttons.forEach((button)=>{

button.addEventListener("click",function(){

if(locked) return;

const id=parseInt(this.dataset.frame);

if(opened.includes(id)) return;

opened.push(id);

document.querySelector(

'.frame0'+id

).classList.add("show");

this.classList.add("active");

locked=true;

setTimeout(()=>{

locked=false;

},2500);

checkCompleted();

});

});





function checkCompleted(){

if(opened.length!==8) return;

setTimeout(()=>{

startFinalAnimation();

},1200);

}


/* ==========================================================
   SCRIPT.JS V3
   PARTE 2/4
========================================================== */

function startFinalAnimation(){

teaser.style.transition="1s";

teaser.style.opacity="0";

setTimeout(()=>{

teaser.style.display="none";

hero.style.display="block";

setTimeout(()=>{

heroTitle.classList.add("show");

startWords();

},1200);

},1000);

}





function startWords(){

const words=[

"word01",

"word02",

"word03",

"word04",

"word05",

"word06",

"word07",

"word08"

];

let i=0;

const timer=setInterval(()=>{

if(i>0){

document.getElementById(

words[i-1]

).style.display="none";

}

if(i>=words.length){

clearInterval(timer);

showFinalMessage();

return;

}

document.getElementById(

"finalSequence"

).style.display="flex";

document.getElementById(

words[i]

).style.display="block";

i++;

},1200);

}



/* ==========================================================
   SCRIPT.JS V3
   PARTE 3/4
========================================================== */

function showFinalMessage(){

document.getElementById(

"finalSequence"

).style.display="none";

document.getElementById(

"messageFinal"

).style.display="flex";

}





const enterPortal=document.querySelector(

".enterPortal"

);





enterPortal.addEventListener("click",function(e){

e.preventDefault();

document.getElementById(

"messageFinal"

).style.display="none";

document.getElementById(

"portal"

).scrollIntoView({

behavior:"smooth"

});

});





const backTop=document.getElementById(

"backTop"

);

window.addEventListener(

"scroll",

function(){

if(window.scrollY>500){

backTop.style.display="block";

}else{

backTop.style.display="none";

}

}

);

backTop.addEventListener(

"click",

function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

);



/* ==========================================================
   SCRIPT.JS V3
   PARTE 4/4
========================================================== */

/* BOTÕES DESABILITADOS DURANTE A ANIMAÇÃO */

function lockButtons(state){

buttons.forEach((button)=>{

button.disabled=state;

button.style.pointerEvents=state?"none":"auto";

button.style.opacity=state?".55":"1";

});

}





/* EFEITO DE REVELAÇÃO */

frames.forEach((frame)=>{

frame.style.opacity="0";

});

document.addEventListener("DOMContentLoaded",()=>{

hero.style.display="none";

document.getElementById(

"finalSequence"

).style.display="none";

document.getElementById(

"messageFinal"

).style.display="none";

});





/* PREPARAÇÃO PARA A HOME V4

Na próxima versão vamos substituir esta lógica por:

1. Tela teaser.
2. Primeiro clique remove o teaser.
3. Cada botão revela apenas um pedaço da imagem.
4. Os pedaços permanecem visíveis.
5. Bloqueio curto entre cliques.
6. Ao revelar os oito pedaços:
   - brilho sobre a imagem;
   - união dos blocos;
   - animação das palavras;
   - título final;
   - entrada no Portal.
*/

console.log("Portal EMS Brasil V3 carregado.");