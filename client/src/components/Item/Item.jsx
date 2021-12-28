import "./item.scss";
import { format } from "timeago.js";
import { Draggable } from "react-beautiful-dnd";

import axios from "axios";

export default function Item({ item, index }) {
	const deleteTask = async (slug) => {
		try {
			await axios.delete(`/tasks/${slug}`);
			window.location.reload();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Draggable key={item._id} draggableId={item._id.toString()} index={index}>
			{(provider, snapshot) => {
				return (
					<div
						className="item"
						ref={provider.innerRef}
						{...provider.dragHandleProps}
						{...provider.draggableProps}
						style={{
							// to give effect by color during drag
							// backgroundColor: snapshot.isDragging ? "#4444a0" : "#4242d3",
							...provider.draggableProps.style,
						}}
					>
						<div
							className="container"
							style={{ backgroundColor: `${item.color}` }}
						>
							<div className="title">{item.title}</div>
							<div className="body">{item.body}</div>
							<div className="settings">
								<div className="time">{format(item.createdAt)}</div>
								<button
									className="deleteIcon"
									onClick={() => deleteTask(item.slug)}
								>
									Delete
								</button>
							</div>
						</div>
					</div>
				);
			}}
		</Draggable>
	);
}
