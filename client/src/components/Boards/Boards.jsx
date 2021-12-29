import React, { useState, useEffect } from "react";
import axios from "axios";
import "./boards.scss";
import BoardCard from "./../BoardCard/BoardCard";
import NoCard from "./../NoCard/NoCard";

export default function Boards() {
	const [boards, setBoards] = useState([]);

	// TO DELETE BOARD WITH ITS TASKS USING BOARD SLUG
	const deleteBoard = async (slug) => {
		try {
			await axios.delete(`/boards/${slug}`);
			await fetchBoards();
		} catch (error) {
			console.log(error);
		}
	};

	// TO FETCH BOARDS DATA FROM DB USING AXIOS API
	const fetchBoards = async () => {
		const boards = await axios.get("/boards");
		setBoards(boards.data.boards);
	};
	useEffect(() => {
		fetchBoards();
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
				<NoCard title="there are no Boards yet" />
			)}
		</div>
	);
}
