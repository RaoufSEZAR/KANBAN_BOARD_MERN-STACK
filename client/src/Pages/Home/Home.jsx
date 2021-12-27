import "./home.scss";
import BoardForm from "../../components/BoardForm/BoardForm";
import Boards from "./../../components/Boards/Boards";
import Header from "./../../components/Header/Header";

export default function Home() {
	return (
		<>
			<div className="home">
				<div className="homeBoardsAdd">
					<div className="header">
						<Header title="Kanban Board" />
					</div>
					<BoardForm />
				</div>
				<div className="homeBoards">
					<Boards />
				</div>
			</div>
		</>
	);
}
