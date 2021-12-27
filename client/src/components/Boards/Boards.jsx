import React, { useState, useEffect } from "react";
import axios from "axios";
import "./boards.scss";
import BoardCard from "./../BoardCard/BoardCard";
import NoCard from "./../NoCard/NoCard";

export default function Boards() {
	const [boards, setBoards] = useState([]);

	const deleteBoard = async (slug) => {
		try {
			await axios.delete(`/boards/${slug}`);
			await fetchTasks();
		} catch (error) {
			console.log(error);
		}
	};

	const fetchTasks = async () => {
		const boards = await axios.get("/boards");

		setBoards(boards.data.boards);
	};
	useEffect(() => {
		fetchTasks();
	}, []);
	return (
		<div className="boards">
			{boards ? (
				boards.map((board) => {
					return (
						<BoardCard
							key={board._id}
							board={board}
							remove={() => deleteBoard(board.slug)}
						/>
					);
				})
			) : (
				// if no cards will show
				<NoCard />
			)}
		</div>
	);
}
