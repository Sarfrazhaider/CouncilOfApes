

console.log('heloo world');




const btn = document.querySelector('.mobile-btn');
console.log(btn);
const nav = document.querySelector('.main-nav');
console.log(nav);


btn.addEventListener('click', function(){
nav.classList.toggle('show');
});


