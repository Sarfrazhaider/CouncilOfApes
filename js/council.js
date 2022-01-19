

console.log('heloo world');




const btn = document.querySelector('.mobile-btn');
console.log(btn);
const mainNav = document.querySelector('.main-nav');
console.log(mainNav);


btn.addEventListener('click', function(){
mainNav.classList.toggle('show');
});


