const domContainer = document.querySelector("#projInfo");
const searchQueryURL = "https://api.github.com/users/dstmarthe/repos";
domContainer.innerHTML = "";

function hover(element, enter, leave) {
	element.forEach((link) => link.addEventListener("mouseenter", enter));
	element.forEach((link) => link.addEventListener("mouseleave", leave));
}

async function getRepo(num) {
	//get repo info by index
	fetch(searchQueryURL)
		.then((result) => result.json())
		.then((response) => {
			console.log(response[num].name);
			//returm name and description of repo by index
			domContainer.innerHTML = `Name: ${response[num].name}
			\<br/ > Description: ${response[num].description}`

		})
		.catch((err) => console.log(err));
}

hover(
	//call Hover function
	document.querySelectorAll(".project-tile"),
	(e) => {
		// On hover
		console.log("Hovering");
		getRepo(1);
	},
	(e) => {
		// On exit hover
		domContainer.innerHTML = "";
	}
);
