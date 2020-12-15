const domContainer = document.querySelector("#projInfo");
const searchQueryURL = "https://api.github.com/users/dstmarthe/repos";
domContainer.innerHTML = "";

function hover(element, enter, leave) {
	element.forEach((link) => link.addEventListener("mouseenter", enter));
	element.forEach((link) => link.addEventListener("mouseleave", leave));
}

async function getRepo(num) {      //get repo info by index
	return fetch(searchQueryURL)
		.then((result) => result.json())
		.then((response) => {
			console.log(response[num].name)
			return response[num].name;  //returm name of repo by index
		})
		.catch((err) => console.log(err));
}

hover(  //call Hover function
	document.querySelectorAll(".project-tile"),
	(e) => {
		// On hover
		console.log("Hovering");
		domContainer.innerhtml = getRepo(3);
	},
	(e) => {
		// On exit hover
		domContainer.innerHTML = "";
	}
);
