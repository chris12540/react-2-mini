import React, { Component } from "react";

// Components
import EditToggle from "./components/EditToggle";
import ColorChanger from "./components/ColorChanger";
import SizeChanger from "./components/SizeChanger";
import FamilyChanger from "./components/FamilyChanger";
import TextContainer from "./components/TextContainer";

class App extends Component {
	constructor() {
		super();

		this.state = {
			fontColor: "blue",
			fontSize: 12,
			fontFamily: "monospace",
			allowEdit: true
		};
	}

	update = (prop, val) => {
		this.setState({
			[prop]: val
		});
	};

	render() {
		console.log("state: ", this.state);
		const { fontColor, fontFamily, fontSize, allowEdit } = this.state;

		return (
			<div>
				<div className="headerBar">
					<EditToggle update={this.update} allowEdit={allowEdit} />
					<ColorChanger color={fontColor} update={this.update} allowEdit={allowEdit} />
					<SizeChanger size={fontSize} update={this.update} allowEdit={allowEdit} />
					<FamilyChanger family={fontFamily} update={this.update} allowEdit={allowEdit} />
				</div>
				<div className="textArea">
					<TextContainer fontColor={fontColor} fontFamily={fontFamily} fontSize={fontSize} />
				</div>
			</div>
		);
	}
}

export default App;
