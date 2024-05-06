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

			{/* <div>
				<h4>First Questionnaire</h4>
				<label>Question 1</label>
				<input type="number" name="1Q1" value={data[0].questionOne} readOnly />
				<br></br>
				<label>Question 2</label>
				<input type="number" name="1Q2" value={data[0].questionTwo} readOnly />
				<br></br>
				<label>Question 3</label>
				<input
					type="number"
					name="1Q3"
					value={data[0].questionThree}
					readOnly
				/>
			</div>
			<div>
				<h4>Second Questionnaire</h4>
				<label>Question 1</label>
				<input type="number" name="2Q1" value={data[1].questionOne} readOnly />
				<br></br>
				<label>Question 2</label>
				<input type="number" name="2Q2" value={data[1].questionTwo} readOnly />
				<br></br>
				<label>Question 3</label>
				<input
					type="number"
					name="2Q3"
					value={data[1].questionThree}
					readOnly
				/>
			</div>
			<div>
				<h4>Third Questionnaire</h4>
				<label>Question 1</label>
				<input type="number" name="3Q1" value={data[2].questionOne} readOnly />
				<br></br>
				<label>Question 2</label>
				<input type="number" name="3Q2" value={data[2].questionTwo} readOnly />
				<br></br>
				<label>Question 3</label>
				<input
					type="number"
					name="3Q3"
					value={data[2].questionThree}
					readOnly
				/>
			</div>
			<div>
				<h4>Survey</h4>
				<label>query 1</label>
				<input type="text" name="query1" value={data[3].query1} readOnly />
				<br></br>
				<label>query 2</label>
				<input type="text" name="query2" value={data[3].query2} readOnly />
				<br></br>
				<label>query 3</label>
				<input type="text" name="query3" value={data[3].query3} readOnly />
				<br></br>
				<label>query 4</label>
				<input type="text" name="query4" value={data[3].query4} readOnly />
				<br></br>
				<label>query 5</label>
				<input type="text" name="query5" value={data[3].query5} readOnly />
				<br></br>
				<label>query 6</label>
				<input type="text" name="query6" value={data[3].query6} readOnly />
				<br></br>
				<label>query 6a</label>
				<input type="text" name="query6a" value={data[3].query6a} readOnly />
				<br></br>
				<label>query 7</label>
				<input type="text" name="query7" value={data[3].query7} readOnly />
				<br></br>
				<label>query 7a</label>
				<input type="text" name="query7a" value={data[3].query7a} readOnly />
				<br></br>
				<label>query 8</label>
				<input type="number" name="query8" value={data[3].query8} readOnly />
				<br></br>
				<label>query 8a</label>
				<input type="number" name="query8a" value={data[3].query8a} readOnly />
				<br></br>
				<label>query 9</label>
				<input type="text" name="query9" value={data[3].query9} readOnly />
				<br></br>
				<label>query 10 </label>
				<input type="number" name="query10" value={data[3].query10} readOnly />
				<br></br>
				<label>query 11</label>
				<input type="text" name="query11" value={data[3].query11} readOnly />
				<br></br>
				<label>query 11a</label>
				<input type="text" name="query11a" value={data[3].query11a} readOnly />
				<br></br>
				<label>query 12</label>
				<input type="text" name="query12" value={data[3].query12} readOnly />
				<br></br>
				<label>query 13</label>
				<input type="text" name="query13" value={data[3].query13} readOnly />
				<br></br>
				<label>query 14</label>
				<input type="number" name="query14" value={data[3].query14} readOnly />
				<br></br>
				<label>query 14a</label>
				<input
					type="number"
					name="query14a"
					value={data[3].query14a}
					readOnly
				/>
				<br></br>
				<label>query 15</label>
				<input type="number" name="query15" value={data[3].query15} readOnly />
				<br></br>
				<label>query 16</label>
				<input type="number" name="query16" value={data[3].query16} readOnly />
				<br></br>
				<label>query 17</label>
				<input type="number" name="query17" value={data[3].query17} readOnly />
				<br></br>
				<label>query 18</label>
				<input type="number" name="query18" value={data[3].query18} readOnly />
				<br></br>
				<label>query 19</label>
				<input type="text" name="query19" value={data[3].query19} readOnly />
				<br></br>
				<label>query 20</label>
				<input type="text" name="query20" value={data[3].query20} readOnly />
				<br></br>
				<label>query 21</label>
				<input type="text" name="query21" value={data[3].query21} readOnly />
				<br></br>
			</div>*/}
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
