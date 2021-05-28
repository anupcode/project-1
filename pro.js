
window.onscroll=function() {scrollnav()};


function scrollnav() {
	if (document.body.scrollTop>200 || document.documentElement.scrollTop>200) {
		// document.querySelector('body').style.transition = '10s';
		document.querySelector('.header-1').classList.add('srcll');

	}else{
		document.querySelector('.header-1').classList.remove('srcll');
	}
};



let menu=document.querySelector('.menu-icon');
let menu_close=document.querySelector('.menu-icon .close');
let menu_click=document.querySelector('.menu-icon .cilck');

menu_click.style.display = 'block';
menu_close.style.display = 'none';

menu.addEventListener('click',()=>{
	if (menu_click.style.display == 'block' 
) {
		menu_click.style.display = 'none';
		menu_close.style.display = 'block';
	} else {
		menu_click.style.display = 'block';
		menu_close.style.display = 'none';
	}
});


