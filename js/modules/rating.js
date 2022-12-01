export default function() {
	const allStars = document.querySelectorAll('.star');

	allStars.forEach((star, i) => {
		star.onclick = function () {
			let currentStarLevel = i + 1;

			allStars.forEach((star, j) => {
				if(currentStarLevel >= j + 1) {
					star.innerHTML = 

				} 
			})
		}
	})
}
