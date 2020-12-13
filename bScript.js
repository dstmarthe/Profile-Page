var domContainer = document.getElementById("#projInfo");

function hover(element, enter, leave) {
	element.forEach((link) => link.addEventListener("mouseenter", enter));
	element.forEach((link) => link.addEventListener("mouseleave", leave));
}

function getRepo() {
	fetch("https://api.github.com/users/dstmarthe/repos")
		.then((res) => res.json())
		.then((data) => {
			console.log(data.name);
			domContainer.insertAdjacentHTML(
				//Needs new insertion method
				"afterbegin",
				`<p>Repo Name: ${data.name} </p>`
			);
		});
}

hover(
	document.querySelectorAll(".project-tile"),
	(e) => {
		// On hover
		console.log("Hovering");
		getRepo();
	},
	(e) => {
		// On exit hover
		domContainer.innerHTML = "";
	}
);
