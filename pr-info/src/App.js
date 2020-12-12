import "./style.css";
import React from "react";
class App extends React.Component {
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
						{items.map((item) => (
							<li key={item.id}>Project Name: {item.name}</li>
						))}
					</ul>
				</div>
			);
		}
	}
}

export default App;
