import React, { useRef, useState } from "react";
import "./boardForm.scss";
import axios from "axios";

export default function BoardForm() {
	const name = useRef();
	// TITLE VALIDATION HOOKS
	const [titleValid, setTitleValid] = useState({
		touched: false,
		isValid: false,
		errMsg: "",
	});

	// input validation
	const checkTitleValidation = (event) => {
		const val = event.target.value.trim();
		let valids = { ...titleValid };
		valids.touched = true;
		if (val.length <= 0) {
			valids.isValid = false;
			valids.errMsg = "Board name is Required";
		} else if (val.split(" ").length < 2) {
			valids.isValid = false;
			valids.errMsg = "Board name must be more than 2 words";
		} else {
			valids.isValid = true;
			valids.errMsg = "";
		}
		setTitleValid({ ...valids });
		console.log(valids);
	};
	// create board
	const submitHandler = async (e) => {
		e.preventDefault();
		const newBoard = {
			name: name.current.value,
		};
		try {
			await axios.post("/boards", newBoard);
			window.location.reload();
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<form className="form" onSubmit={submitHandler}>
			<div className="row">
				<input
					type="text"
					ref={name}
					placeholder="Board name.."
					onBlur={checkTitleValidation}
				/>
				{titleValid.errMsg ? <small>{titleValid.errMsg}</small> : ""}
			</div>

			<div className="submit">
				<button value="Submit" className="submitBtn">
					Add Board
				</button>
			</div>
		</form>
	);
}
