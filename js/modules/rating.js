export default function(Rating) {
	const container = document.querySelector('.rating__stars');
	const items = container.querySelectorAll('.rating__item')
	container.onclick = e => {
	const elClass = e.target.classList;
	
	// clicking on a different star changes the rating
	if (!elClass.contains('active')) {
		items.forEach( // resets the active class on the current star
		item => item.classList.remove('active')
	);
	console.log(e.target.getAttribute("data-rate"));
		elClass.add('active'); // adds an active class to the clicked star
	}
	};
	// I was unable to get the 'data-rate' value on display in HTML
}