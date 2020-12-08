"use strict";
import React from 'react';
import ReactDOM from 'react-dom'
import './style.css';
import './index.html'
// var React = require("react");
// var ReactDOM = require("react-dom");
const domContainer = document.getElementById("#projInfo");

function hover(element, enter, leave) {
	element.addEventListener("mouseenter", enter);
	element.addEventListener("mouseleave", leave);
}

class projectsInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			isLoaded: false,
		};
	}

	componentDidMount() {
		fetch("https://api.github.com/users/dstmarthe/repos")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					isLoaded: true,
					items: json,
				});
			});
	}

	render() {
		var { isLoaded, items } = this.state;
		if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div className="info">
					<ul>
						{items.mao((item) => (
							<li key={item.id}>Project Name: {item.name}</li>
						))}
					</ul>
				</div>
			);
		}
	}
}

hover(
	document.querySelectorAll(".project-link"),
	(e) => {
		// On hover
		ReactDOM.render(projectsInfo, domContainer);
		console.log("Hovering");
	},
	(e) => {
		// On exit hover
		return null;
	}
);
