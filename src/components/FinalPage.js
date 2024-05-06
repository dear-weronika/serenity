import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function FinalPage({ data, handleClick }) {
	const form = useRef();

	// const arr = data.map()
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_lesz7im", "template_f0tg25q", form.current, {
				publicKey: "8QvNVflk_6739D0nz",
			})
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
		handleClick();
	};

	// 0
	// {questionOne: 1, questionTwo: 1, questionThree: 1}
	// 1
	// {questionOne: 1, questionTwo: 1, questionThree: 1}
	// 2
	// {questionOne: 1, questionTwo: 1, questionThree: 1}
	// 3
	// {query0: 'yes', query1: 'female', query2

	// {"0_questionOne":1,"0_questionTwo":3, "0_questionThree":3,
	// "1_questionOne":2,"1_questionTwo":3, "1_questionThree":3,  }

	const flattenQuestionnaires = (questionnaires) => {
		let finalAllAnswers = {};
		finalAllAnswers["0_questionOne"] = questionnaires[0]["questionOne"];
		finalAllAnswers["0_questionTwo"] = questionnaires[0]["questionTwo"];
		finalAllAnswers["0_questionThree"] = questionnaires[0]["questionThree"];
		finalAllAnswers["1_questionOne"] = questionnaires[1]["questionOne"];
		finalAllAnswers["1_questionTwo"] = questionnaires[1]["questionTwo"];
		finalAllAnswers["1_questionThree"] = questionnaires[1]["questionThree"];
		finalAllAnswers["2_questionOne"] = questionnaires[2]["questionOne"];
		finalAllAnswers["2_questionTwo"] = questionnaires[2]["questionTwo"];
		finalAllAnswers["2_questionThree"] = questionnaires[2]["questionThree"];
		// now add all the questionnaires[3] items
		finalAllAnswers = { ...finalAllAnswers, ...questionnaires[3] };
		return finalAllAnswers;
	};

	const dataItemIntoInput = (keyValuePair) => {
		// keyValuePair ["1_questionOne", 4]
		return (
			<input
				key={keyValuePair[0]}
				type="text"
				name={keyValuePair[0]}
				value={keyValuePair[1]}
				readOnly
				style={{ display: "none" }}
			/>
		);
	};

	console.log("data", data);
	const flatData = flattenQuestionnaires(data);
	return (
		<form ref={form} onSubmit={sendEmail}>
			<div>
				<h4>Version</h4>
				<label>Vibrate first:</label>
				<input type="text" name="query0" value={data[3].query0} readOnly />
			</div>
			{Object.entries(flatData).map(dataItemIntoInput)}

			<div style={{ textAlign: "center" }}>
				<input
					type="submit"
					value="Send"
					style={{
						width: "200px",
						height: "40px",
						fontSize: "18px",
						backgroundColor: "green",
						color: "white",
						padding: 5,
						marginTop: 15,
					}}
				/>
			</div>
		</form>
	);
}
