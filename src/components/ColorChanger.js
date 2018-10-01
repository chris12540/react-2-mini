import React from "react";

export default function ColorChanger(props) {
	return (
		<select
			value={props.fontColor}
			className="dropDownContainer"
			onChange={e => {
				props.update("fontColor", e.target.value);
			}}
			disabled={!props.allowEdit}
		>
			<option value="black"> Black </option>
			<option value="blue"> Blue </option>
			<option value="green"> Green </option>
		</select>
	);
}
