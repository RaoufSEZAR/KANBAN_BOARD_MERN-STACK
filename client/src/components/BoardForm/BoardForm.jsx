import React, { useRef } from "react";
import "./boardForm.scss";
import axios from "axios";

export default function BoardForm() {
	const name = useRef();

	// create board
	const submitHandler = async (e) => {
		e.preventDefault();
		const newBoard = {
			name: name.current.value,
		};
		try {
			await axios.post("/boards", newBoard);
			window.location.reload();
		} catch (err) {}
	};

	return (
		<form className="form" onSubmit={submitHandler}>
			<div className="row">
				<input type="text" ref={name} placeholder="Board name.." />
			</div>

			<div className="submit">
				<button value="Submit" className="submitBtn">
					Add Board
				</button>
			</div>
		</form>
	);
}
