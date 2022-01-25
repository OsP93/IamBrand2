function fadeIn(){
	console.log('Fade in now');
	document.querySelector('.welcome__windows').classList.remove('fadeOut');
	document.querySelector('.welcome__windows').classList.add('fadeIn');
}
function fadeOut(){
	console.log('Fade out now');
	document.querySelector('.welcome__windows').classList.remove('fadeIn');
	document.querySelector('.welcome__windows').classList.add('fadeOut');
}
function hideStartWindow(){
	console.log('Change windows');
	document.querySelector('.container').remove()
	document.querySelector('.wrapper').classList.remove('invisible');
	document.querySelector('.wrapper').classList.remove('fadeOut');
	document.querySelector('.wrapper').classList.add('fadeIn');
}

window.onload = function(){
	console.log('I`m OK')
	fadeIn();
	setTimeout(fadeOut, 2000);
	setTimeout(hideStartWindow, 5000);	
}
