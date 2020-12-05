"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
const domContainer = document.getElementById("projInfo");

// function hover(element, enter, leave) {
// 	element.addEventListener("mouseenter", enter);
// 	element.addEventListener("mouseleave", leave);
// }

// hover(
// 	document.querySelectorAll("project-link"),
// 	(e) => {
// 		// On hover
// 		ReactDOM.render(<projectsInfo />, domContainer);
// 	},
// 	(e) => {
// 		// On exit hover
// 		return null;
// 	}
// );

export default class projectsInfo extends React.Component {
	state = {
		loading: true,
		person: null,
	};

	async componentDidMount() {
		const url = "https://api.github.com/users/dstmarthe/repos";
		const response = await fetch(url);
		const data = response.json;
		console.log(data.results[0]);
		this.setState({ person: data.results[0], loading: false });
	}

	render() {
		return (
			<>
				{this.state.loading || !this.state.person ? (
					<p>loading...</p>
				) : (
					<>
						<h2>{this.state.person.name}</h2>
						<p>{this.state.person.description}</p>
					</>
				)}
			</>
		);
	}
}
