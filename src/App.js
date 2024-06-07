import {useState} from 'react';
import Dialog from "./components/Dialog";
import StarRating from "./components/StarRating";
// import "./css/debug.css";

function App() {
	const ratingMessages = ["Unacceptable", "Awful", "Alright", "Good!", "Amazing!!!"]
	const [isDialogActive, setDialogActive] = useState(false);


	const toggleDialog = () => {
		setDialogActive(!isDialogActive);
	}
  return (
    <main>
      <div className="page-content">
				<StarRating starCount={5} ratingMessages={ratingMessages}/>
			</div>
			<button className="open-dialog" onClick={toggleDialog}>Open Dialog</button>
			<Dialog enabled={isDialogActive} onBackgroundClick={toggleDialog}/>
    </main>
  );
}

export default App;
