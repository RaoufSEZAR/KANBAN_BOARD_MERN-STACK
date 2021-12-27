import React from "react";
import "./noCard.scss";

// if no cards in db this component will show
export default function NoCard() {
	return <div className="noCards">there are no Boards yet</div>;
}
