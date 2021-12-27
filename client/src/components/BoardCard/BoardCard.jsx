import { format } from "timeago.js";

import "./boardCard.scss";
import { Link } from "react-router-dom";

export default function BoardCard({ board, remove }) {
	return (
		<div className="boardCard">
			<div className="container">
				<Link to={`/${board.slug}`} className="link">
					<div className="title">{board.name}</div>
				</Link>
				<div className="settings">
					<div className="time">{format(board.createdAt)}</div>
					<button className="deleteIcon" onClick={remove}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}
