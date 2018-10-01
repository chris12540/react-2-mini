import React from "react";

export default function FamilyChanger(props) {
	return (
		<select
			value={props.family}
			className="dropDownContainer"
			onChange={e => {
				props.update("fontFamily", e.target.value);
			}}
			disabled={!props.allowEdit}
		>
			<option value="monospace"> Monospace </option>
			<option value="arial"> Arial </option>
			<option value="courier"> Courier </option>
		</select>
	);
}
