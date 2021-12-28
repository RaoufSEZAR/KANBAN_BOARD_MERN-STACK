import React, { useRef, useState } from "react";
import Modal from "react-modal";
import axios from "axios";

// give style to modal
const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		width: "50%",
		height: "450px",
		right: "auto",
		bottom: "auto",
		display: "flex",
		flexDirection: "column",
		marginRight: "-40%",
		transform: "translate(-50%, -50%)",
		alignItems: "center",
		color: "red",
	},
};

export function Modall({ slug }) {
	const title = useRef();
	const body = useRef();
	const status = useRef();
	const boardId = useRef();
	const color = useRef();

	// to open/close modal
	const [modalIsOpen, setIsOpen] = useState(false);
	const [titleValid, setTitleValid] = useState({
		touched: false,
		isValid: false,
		errMsg: "",
	});
	const [bodyValid, setBodyValid] = useState({
		touched: false,
		isValid: false,
		errMsg: "",
	});

	// title input validation
	const checkTitleValidation = (event) => {
		const val = event.target.value.trim();
		let valids = { ...titleValid };
		valids.touched = true;
		if (val.length <= 0) {
			valids.isValid = false;
			valids.errMsg = "Card title is Required";
		} else if (val.split(" ").length < 2) {
			valids.isValid = false;
			valids.errMsg = "Card title must be more than 3 words";
		} else {
			valids.isValid = true;
			valids.errMsg = "";
		}
		setTitleValid({ ...valids });
		console.log(valids);
	};

	// title input validation
	const checkBodyValidation = (event) => {
		const val = event.target.value.trim();
		let valids = { ...bodyValid };
		valids.touched = true;
		if (val.length <= 0) {
			valids.isValid = false;
			valids.errMsg = "Card body is Required";
		} else if (val.split(" ").length < 6) {
			valids.isValid = false;
			valids.errMsg = "Card body must be more than 6 words";
		} else {
			valids.isValid = true;
			valids.errMsg = "";
		}
		setBodyValid({ ...valids });
		console.log(valids);
	};
	// create task
	const submitHandler = async (e) => {
		e.preventDefault();
		const newPost = {
			title: title.current.value,
			body: body.current.value,
			status: status.current.value,
			color: color.current.value,
			boardId: boardId.current.value.toString(),
		};
		try {
			await axios.post("/tasks", newPost);
			window.location.reload();
		} catch (err) {
			console.log("err", err);
		}
	};
	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div>
			<div onClick={openModal}>+ Add Card</div>
			<div className="modal">
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					ariaHideApp={false}
					contentLabel="modal"
					style={customStyles}
				>
					<h2>Kanban</h2>
					<form
						className="formBottom"
						style={{ width: "100%" }}
						onSubmit={submitHandler}
					>
						<div className="formOptions">
							<input
								placeholder={"add title"}
								className="shareInput"
								onBlur={checkTitleValidation}
								ref={title}
								style={{
									width: "90%",
									margin: "10px",
									padding: "15px",
									fontSize: "15px",
								}}
							/>
							<div
								className="row"
								style={{
									margin: "10px",
								}}
							>
								{titleValid.errMsg ? <small>{titleValid.errMsg}</small> : ""}
							</div>

							<input
								placeholder={"add body"}
								className="shareInput"
								ref={body}
								style={{
									width: "90%",
									margin: "10px",
									padding: "15px",
									fontSize: "15px",
								}}
								onBlur={checkBodyValidation}
							/>
							<div
								className="row"
								style={{
									margin: "10px",
								}}
							>
								{bodyValid.errMsg ? <small>{bodyValid.errMsg}</small> : ""}
							</div>

							<input
								type="color"
								ref={color}
								style={{
									margin: "10px",

									// padding: "15px",
								}}
							/>

							<input
								className="shareInput"
								value={slug}
								ref={boardId}
								type="hidden"
							/>

							<select
								name="status"
								ref={status}
								style={{
									margin: "10px",
									padding: "15px",
									fontSize: "15px",
									width: "85%",
								}}
							>
								<option value="Backlog">Backlog</option>
								<option value="InProgress">In Progress</option>
								<option value="Todo">To do</option>
								<option value="Done">Done</option>
							</select>
						</div>
						<button
							className="shareButton"
							type="submit"
							style={{
								margin: "10px",
								padding: "15px",
								fontSize: "15px",
								border: "none",
								width: "70px",
								borderRadius: "15px",
								cursor: "pointer",
								backgroundColor: "teal",
								color: "white",
							}}
						>
							Add
						</button>
						<button
							style={{
								margin: "10px",
								padding: "15px",
								fontSize: "15px",
								width: "70px",
								border: "none",
								borderRadius: "15px",
								cursor: "pointer",
								backgroundColor: "red",
								color: "white",
							}}
							onClick={closeModal}
						>
							close
						</button>
					</form>
				</Modal>
			</div>
		</div>
	);
}
