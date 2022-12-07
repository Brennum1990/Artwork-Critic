export default function(Rating) {
	var count = 0;
 
function result(){
	if(count != 0){
		document.getElementById('result').innerHTML = 
		"<h3>Rating: <label class='text-primary'>" + count + "</label></h3>"
		+ "<h3>Review</h3>"
		+ "<p>"+document.getElementById("review").value+"</p>";
	}else{
 
	}
}
 
function startRating(item){
	count=item.id[0];
	sessionStorage.star = count;
	for(var i=0;i<5;i++){
		if(i < count){
			document.getElementById((i+1)).style.color="yellow";
		}
		else{
			document.getElementById((i+1)).style.color="black";
		}
	}
}
}

// const allStars = document.querySelectorAll('.star');

// 	allStars.forEach((star, i) => {
// 		star.onclick = function () {
// 			let currentStarLevel = i + 1;

// 			allStars.forEach((star, j) => {
// 				if(currentStarLevel >= j + 1)

// 		})
// 	}
// })