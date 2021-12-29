import React from "react";
import "./noCard.scss";

// if no cards in db this component will show
export default function NoCard({ title }) {
	return <div className="noCards">{title}</div>;
}
