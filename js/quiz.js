let dogsArr = [
	"Corgie",
	"Pitbull",
	"Husky",
	"Golden Retriever",
	"Beagle",
	"Bulldog",
	"German Shepherd",
	"Poodle",
	"Rottweiler",
	"Pug",
	"Chihuahua",
];
let numDogs = dogsArr.length - 1;
let randomNum = Math.round(Math.random() * numDogs);
let randomDog = dogsArr[randomNum];
let image;
switch (randomDog) {
	case "Corgie":
		image = "../images/Corgie.jpg";
		break;
	case "Pitbull":
		image = "../images/pitbull.jpg";
		break;
	case "Husky":
		image = "../images/husky_puppy.jpg";
		break;
	case "Golden Retriever":
		image = "../images/golden_retriever.jpg";
		break;
	case "Beagle":
		image = "../images/beagle.jpg";
		break;
	case "Bulldog":
		image = "../images/bulldog.jpg";
		break;
	case "German Shepherd":
		image = "../images/German_Shepherd.jpg";
		break;
	case "Poodle":
		image = "../images/poodle.jpeg";
		break;
	case "Rottweiler":
		image = "../images/rottweiler.jpg";
		break;
	case "Pug":
		image = "../images/pug.jpg";
		break;
	case "Chihuahua":
		image = "../images/chihuahua.jpg";
		break;
}

$(document).ready(function () {
	$("#quizResults").append(`<h1 id="randomDog">${randomDog}!</h1>`);
	$("#quizResults").append(`<img id="dogImage" src="${image}">`);
});
