import { FaStar } from "react-icons/fa";

function Star({active = false, onClick, value}) {
	return (
		<div className="star" onClick={onClick} data-value={value}>
			<FaStar
			className={(active)? "active" : ""}
			/>
		</div>
	)
}

export default Star;