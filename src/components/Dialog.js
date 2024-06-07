function Dialog({enabled = false, onBackgroundClick}) {
	return (
		<div className={`dialog-background${enabled? "":" hide"}`} onClick={e=>{if (e.currentTarget==e.target) {onBackgroundClick()}}}>
			<div className="dialog-content">
				<h2>Thank you for visiting this webpage</h2>
				<p>View my other projects on GitHub <a href="https://github.com/cubebotfan">https://github.com/cubebotfan</a></p>
			</div>
		</div>
	)
}

export default Dialog;