window.onload = () => {
let who = ['Mi perro', 'Mi abuela', 'El cartero', 'Un pajarito'];
let action = ['se comió', 'mojó', 'mordió', 'rompió', 'perdió', 'me robó'];
let what = ['mi tarea', 'mi móvil', 'el carro','las llaves'];
let when = ['antes de clase', 'cuando estaba durmiendo', 'mientras hacia ejercicio', 'mientras comía'];

const btnGenerater=document.querySelector('.btn');
console.log(btnGenerater);
btnGenerater.addEventListener('click',() => {

    function RandomElement(array){
      return Math.floor(Math.random()*array.length);
    }

    let RandomWho= who[RandomElement(who)]
    let RandomAction= action[RandomElement(action)]
    let RandomWhat= what[RandomElement(what)]
    let RandomWhen= when[RandomElement(when)]

    let GeneradorExcusa= `${RandomWho} ${RandomAction} ${RandomWhat} ${RandomWhen}`;

    document.querySelector('.excusa').innerHTML=GeneradorExcusa;

});

}





