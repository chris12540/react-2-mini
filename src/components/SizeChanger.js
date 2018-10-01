import React from "react";

export default function SizeChanger(props) {
	return (
		<select
			value={props.size}
			className="dropDownContainer"
			onChange={e => {
				props.update("fontSize", +e.target.value);
			}}
			disabled={!props.allowEdit}
		>
			<option value="12"> 12 </option>
			<option value="13"> 13 </option>
			<option value="14"> 14 </option>
		</select>
	);
}
