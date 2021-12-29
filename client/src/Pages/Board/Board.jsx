/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import axios from "axios";
import "./board.scss";
import Col from "./../../components/Col/Col";
import Header from "./../../components/Header/Header";
import { Modall } from "./../../components/Modal/Modal";
import { useParams } from "react-router";
import NoCard from "./../../components/NoCard/NoCard";

export default function Board() {
	const [cols, setCols] = useState({});
	const [boardId, setBoardId] = useState("");
	// to get the slug from url
	const slug = useParams().slug;

	// get tasks from api
	const fetchTasks = async () => {
		try {
			const tasks = await axios.get(`/tasks/${slug}`);
			setCols(tasks.data.data);
			setBoardId(tasks.data.boardId);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchTasks();
	}, []);

	const onDragEnd = (result, cols, setCols) => {
		// avoid drap the div outside the div parent

		const { source, destination } = result;
		if (!destination) return;

		// to enable index left his place and drag drap it in the another column
		if (source.droppableId !== destination.droppableId) {
			// list name [Todo,inPorgress.....]
			const sourceCol = cols[source.droppableId];
			const destCol = cols[destination.droppableId];
			// the items which have same list name
			const sourceItems = [...sourceCol.items];
			const destItems = [...destCol.items];
			const [removed] = sourceItems.splice(source.index, 1);
			destItems.splice(destination.index, 0, removed);

			setCols({
				...cols,
				[source.droppableId]: {
					...sourceCol,
					items: sourceItems,
				},
				[destination.droppableId]: {
					...destCol,
					items: destItems,
				},
			});
		}
		// to enable index left his place and drag drap it in the same column
		else {
			const columns = cols[source.droppableId];
			const _items = [...columns.items];
			const [removed] = _items.splice(source.index, 1);
			_items.splice(destination.index, 0, removed);
			setCols({
				...cols,
				[source.droppableId]: {
					...columns,
					items: _items,
				},
			});
		}
	};

	return (
		<div className="board">
			<div className="header">
				<Header title="Kanban Board" />
				<div className="modal">
					<Modall slug={boardId} />
				</div>
			</div>
			<div className="sections">
				<DragDropContext
					onDragEnd={(result) => {
						onDragEnd(result, cols, setCols);
					}}
				>
					{Object.entries(cols).length > 0 ? (
						Object.entries(cols).map(([_id, col], index) => {
							// send every object as a col in api [todo, done, backlog, inProgress] to col components
							return <Col key={_id} col={col} index={index} _id={_id} />;
						})
					) : (
						<NoCard title="Obsss No Board with this name " />
					)}
				</DragDropContext>
			</div>
		</div>
	);
}
