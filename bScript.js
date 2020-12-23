const domContainer = document.querySelector("#projInfo");
var linkList = document.querySelectorAll(".project-tile");
const searchQueryURL = "https://api.github.com/users/dstmarthe/repos";
domContainer.innerHTML = "";
CSS.paintWorklet.addModule("houdini-static-gradient/worklet.js");
CSS.paintWorklet.addModule("bytemare/bytemare.js");

const colorPallete = [
	"#fa744f",
	"#ffbcbc",
	"#4cd3c2",
	"#b7efcd",
	"#edffea",
	"#ffe75e",
	"#feb72b",
	"#e85f99",
	"#9399ff",
	"#dab8f3",
	"#ea7ad7",
	"#ce0f3d",
	"#fd2eb3",
];
window.onload = function () {
	document.querySelector("main").style.setProperty("--bytemare-color", color1);
	const color1 = colorPalette[Math.floor(Math.random() * colorPalette.length)];
};

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
			domContainer.innerHTML = `<em>Name:</em> ${response[num].name.replace("-", " ")}
			\<br/ > <br/ > <em>Description:</em> ${response[num].description}`;
		})
		.catch((err) => console.log(err));
}

var node;
function changeNode(num) {
	node = +num;
}
hover(
	//call Hover function
	linkList,
	(e) => {
		// On hover
		console.log("Hovering");
		getRepo(node);
	},
	(e) => {
		// On exit hover
		domContainer.innerHTML = "";
	}
);
