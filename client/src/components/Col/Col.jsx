/* eslint-disable array-callback-return */
import React from "react";
import "./col.scss";
import { Droppable } from "react-beautiful-dnd";
import Item from "../Item/Item";

export default function Col({ col, index, _id }) {
	return (
		<div className="col" key={index}>
			<h5>{col.name}</h5>
			<div>
				<Droppable droppableId={_id} key={_id}>
					{(provider, snapshot) => {
						return (
							<div
								className="drop"
								{...provider.droppableProps}
								style={{
									// to change color during drag
									backgroundColor: snapshot.isDraggingOver
										? "#ad9393"
										: "#463b3b",
								}}
								ref={provider.innerRef}
							>
								{col.items.map((item, index) => {
									// to give different color during fetch data
									if (item.status === "Todo") {
										return (
											<Item
												item={item}
												index={index}
												key={index}
												color="#443c8f"
											/>
										);
									}
									// to give different color during fetch data
									if (item.status === "Backlog") {
										return (
											<Item
												item={item}
												index={index}
												key={index}
												color="#96391d"
											/>
										);
									}
									// to give different color during fetch data
									if (item.status === "Done") {
										return (
											<Item
												item={item}
												index={index}
												key={index}
												color="#9627a1"
											/>
										);
									}
									// to give different color during fetch data
									if (item.status === "InProgress") {
										return (
											<Item
												item={item}
												index={index}
												key={index}
												color="#6b9648"
											/>
										);
									}
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
