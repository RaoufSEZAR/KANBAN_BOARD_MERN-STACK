/* eslint-disable array-callback-return */
import React from "react";
import "./col.scss";
import { Droppable } from "react-beautiful-dnd";
import Item from "../Item/Item";

export default function Col({ col, index, _id }) {
	return (
		<div className="col" key={index}>
			<h2>{col.name}</h2>
			<div>
				<Droppable droppableId={_id} key={_id}>
					{(provider, snapshot) => {
						return (
							<div
								className="drop"
								style={{
									// to change color during drag
									backgroundColor: snapshot.isDraggingOver
										? "#ad9393"
										: "#463b3b",
								}}
								ref={provider.innerRef}
							>
								{col.items.map((item, index) => {
									// to send single item card
									return <Item item={item} index={index} key={index} />;
								})}

								{provider.placeholder}
							</div>
						);
					}}
				</Droppable>
			</div>
		</div>
	);
}
