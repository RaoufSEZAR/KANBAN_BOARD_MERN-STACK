module.exports = (todoStatus) => {
	return (req, res, next) => {
		const taskStatus = req.body.status || "Todo";
		if (todoStatus.includes(taskStatus)) {
			next();
		} else {
			return res
				.status(401)
				.send(
					"YOU CANT DO STATUS LIKE THIS ... IT'S SHOULD LIKE: Backlog ,To Do ,InProgress OR Done"
				);
		}
	};
};
