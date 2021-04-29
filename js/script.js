/** Implementação animação inicial **/

const target = document.querySelectorAll ('[data-anime]');

const animationClass = 'animate';

animeScroll();

function animeScroll() {
const windowTop = window.pageYOffset + ((window.innerHeight * 3 / 4));
console.log(windowTop);
target.forEach(function(element){


	if ((windowTop) > element.offsetTop){
	console.log(element.classList.add(animationClass));
}
})



}


window.addEventListener('scroll', function(){
animeScroll();


})
	

target.forEach(item=> {

console.log(item);

})
