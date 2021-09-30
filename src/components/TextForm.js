import React, { useState } from "react";

export default function TextForm(props) {
	const [text, setText] = useState("Enter text here");

	const handleUpClick = () => {
		let newText = text.toUpperCase();
		setText(newText);
	};

	const handleLowerClick = () => {
		let newText = text.toLowerCase();
		setText(newText);
	};

	const handleClearClick = () => {
		let newText = "";
		setText(newText);
	};

	const handleOnChange = (event) => {
		setText(event.target.value);
	};

	const handleCopy = () => {
		var text = document.getElementById("myBox");
		text.select();
		navigator.clipboard.writeText(text.value);
	};

	return (
		<div>
			<h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
				{props.heading}
			</h1>
			<div class="form-group mb-3">
				<textarea
					style={{
						backgroundColor: props.mode === "dark" ? "grey" : "white",
						color: props.mode === "dark" ? "white" : "black",
					}}
					className="form-control"
					onChange={handleOnChange}
					value={text}
					id="myBox"
					rows="3"
				></textarea>
			</div>
			<button className="btn btn-primary mx-2" onClick={handleUpClick}>
				Convert To Uppercase
			</button>
			<button className="btn btn-primary mx-2" onClick={handleLowerClick}>
				Convert To Lowercase
			</button>
			<button className="btn btn-primary mx-2 " onClick={handleCopy}>
				Copy text
			</button>
			<button className="btn btn-primary mx-2" onClick={handleClearClick}>
				Clear Text
			</button>
			<div
				className="container my-3"
				style={{ color: props.mode === "dark" ? "white" : "black" }}
			>
				<h1>Your Text Summary</h1>
				<p>
					{text.split(" ").length} Your words have {text.length} characters
				</p>
				<p>
					{0.008 * text.split(" ").length} Minutes to read the above sentence
				</p>
			</div>
		</div>
	);
}
