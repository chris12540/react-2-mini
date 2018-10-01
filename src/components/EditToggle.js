import React from "react";

export default function EditToggle(props) {
	return (
		<select
			value={props.allowEdit}
			className="dropDownContainer ml0"
			onChange={e => {
				props.update("allowEdit", e.target.value === "true");
			}}
		>
			<option value="true"> Allow Edit </option>
			<option value="false"> Disable Edit </option>
		</select>
	);
}
