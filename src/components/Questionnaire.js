import { Box, Button } from "@mui/material";
import { useState } from "react";
import { getSlider } from "./SurveyHelper";

export default function Questionnaire({
	handleClick,
	version,
	handleSendData,
}) {
	const [data, setData] = useState({
		questionOne: 1,
		questionTwo: 1,
		questionThree: 1,
	});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setData((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSendData(data);
		handleClick();
	};

	return (
		<Box style={{width:"100%"}}>
			<h3>Questionnaire {version}</h3>
			{getSlider(
				"",
				"Describe how STRESSED do you feel rigth now on a scale of 1 to 5?",
				"questionOne",
				[1, 5],
				handleChange
			)}
			{getSlider(
				"",
				"Describe how RELAXED do you feel rigth now on a scale of 1 to 5?",
				"questionTwo",
				[1, 5],
				handleChange
			)}
			{getSlider(
				"",
				"Describe how GOOD do you feel rigth now on a scale of 1 to 5?",
				"questionThree",
				[1, 5],
				handleChange
			)}
			<div
				style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}
			>
				<Button variant="contained" onClick={handleSubmit}>
					Next
				</Button>
			</div>
		</Box>
	);
}
