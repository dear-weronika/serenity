import {
	Box,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	TextField,
	Slider,
	Checkbox,
	FormGroup,
	Button,
} from "@mui/material";
import { useEffect, useState } from "react";

const marksEight = [
	{
		value: 1,
		label: "Not at all",
	},
	{
		value: 3,
		label: "",
	},
	{
		value: 5,
		label: "Very much",
	},
];
const marksEightA = [
	{
		value: 1,
		label: "Not at all",
	},
	{
		value: 3,
		label: "",
	},
	{
		value: 5,
		label: "Very much",
	},
];
const marksTen = [
	{
		value: 1,
		label: "Not at all",
	},
	{
		value: 3,
		label: "",
	},
	{
		value: 5,
		label: "Very Good",
	},
];

const marksFourteen = [
	{
		value: 1,
		label: "Not at all",
	},
	{
		value: 3,
		label: "",
	},
	{
		value: 5,
		label: "Very much",
	},
];
const marksFourteenA = [
	{
		value: 1,
		label: "Not at all",
	},
	{
		value: 3,
		label: "",
	},
	{
		value: 5,
		label: "Very much",
	},
];
const marksFifteen = [
	{
		value: 1,
		label: "Not at all",
	},
	{
		value: 3,
		label: "",
	},
	{
		value: 5,
		label: "Very much",
	},
];
const marksSixteen = [
	{
		value: 1,
		label: "Not at all",
	},
	{
		value: 3,
		label: "",
	},
	{
		value: 5,
		label: "Very much",
	},
];
const marksSeventeen = [
	{
		value: 1,
		label: "Not at all",
	},
	{
		value: 3,
		label: "",
	},
	{
		value: 5,
		label: "Very much",
	},
];
const marksEighteen = [
	{
		value: 1,
		label: "Not at all",
	},
	{
		value: 3,
		label: "",
	},
	{
		value: 5,
		label: "Very much",
	},
];

export default function Survey({ handleSendData, handleClick, shouldVibrate }) {
	const [data, setData] = useState({
		query0: shouldVibrate ? "yes" : "no",
		query1: "",
		query2: "",
		query3: "",
		query4: "",
		query5: "",
		query6: "",
		query6a: "",
		query7: "",
		query7a: "",
		query8: "",
		query8a: "",
		query9: "",
		query10: "",
		query11: "",
		query11a: "",
		query12: "",
		query13: "",
		query14: "",
		query14a: "",
		query15: "",
		query16: "",
		query17: "",
		query18: "",
		query19: "",
		query20: "",
		query21: "",
	});

	// use like checkboxOption(["female", "Female"])
	const oneRadioButtonItem = (nameAndValue) => {
		// for example nameAndValue will be ["female", "Female"]
		console.log("nameAndValue", nameAndValue);
		return (
			<FormControlLabel
				value={nameAndValue[0]}
				control={<Radio />}
				label={nameAndValue[1]}
			/>
		);
	};
	// getRadioButton("Question 1", "What is your gender?", "query1", [["female", "Female"],
	// 																["male", "Male"]])
	const getRadioButton = (title, questionText, questionID, options) => {
		return (
			<Box sx={{ width: 250, p: 2 }}>
				<h4>{title}</h4>
				<h5>{questionText}</h5>
				<FormControl>
					<FormLabel id={questionID}></FormLabel>
					<RadioGroup
						aria-labelledby={questionID}
						name={questionID}
						value={data.query1}
						onChange={handleChange}
					>
						{options.map(oneRadioButtonItem)}
					</RadioGroup>
				</FormControl>
			</Box>
		);
	};
	const handleChange = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		if (e.target.type === "checkbox") {
			// query1: "male,non-binary"
			name = e.currentTarget.getAttribute("name");
			let valuesBefore = data[name].split("*");
			if (e.target.checked) {
				value = valuesBefore.push(value);
			} else {
				var index = valuesBefore.indexOf(value);
				if (index !== -1) {
					valuesBefore.splice(index, 1);
				}
			}
			value = valuesBefore.join("*");
		}
		// console.log(e.target.value);
		console.log(name, "-", value);

		setData((values) => ({ ...values, [name]: value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		handleSendData(data);
		handleClick();
	};
	useEffect(() => {
		console.log(data);
	}, [data]);
	return (
		<div>
			<h2>Thank you for completing the exercises.</h2>
			<h2>
				Now, the final step is a survey that will take less than 5 minutes
			</h2>
			<h3>Survery </h3>
			{getRadioButton("Question 1", "What is your gender?", "query1", [
				["female", "Female"],
				["male", "Male"],
				["non binary", "Non Binary"],
				["prefer not to say", "Prefer not to say"],
			])}
			{getRadioButton(
				"Question 2",
				"Which age group do you belong to? ",
				"query2",
				[
					["Under 18", "Under 18"],
					["18-24", "18-24"],
					["25-34", "25-34"],
					["35-44", "35-44"],
					["45-54", "45-54"],
					["55 or older", "55 or older"],
				]
			)}
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 3</h4>
				<h5>How often do you use your mobile phone in daily life</h5>
				<FormControl>
					<FormLabel id="query3"></FormLabel>
					<RadioGroup
						aria-labelledby="query3"
						name="query3"
						value={data.query3}
						onChange={handleChange}
					>
						<FormControlLabel
							value="Heavy user (More than 4 hours)"
							control={<Radio />}
							label="Heavy user (More than 4 hours)"
						/>
						<FormControlLabel
							value="Moderate user (2-4 hours)"
							control={<Radio />}
							label="Moderate user (2-4 hours)"
						/>
						<FormControlLabel
							value="Light user (1-2 hours)"
							control={<Radio />}
							label="Light user (1-2 hours)"
						/>
						<FormControlLabel
							value="Non-user (rarely use mobile phone)"
							control={<Radio />}
							label="Non-user (rarely use mobile phone)"
						/>
					</RadioGroup>
				</FormControl>
			</Box>
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 4</h4>
				<h5>Have you practised meditation or mindfulness exercises before?</h5>
				<FormControl>
					<FormLabel id="query4"></FormLabel>
					<RadioGroup
						aria-labelledby="query4"
						name="query4"
						value={data.query4}
						onChange={handleChange}
					>
						<FormControlLabel
							value="I practice regularly"
							control={<Radio />}
							label="I practice regularly"
						/>
						<FormControlLabel
							value="I have some experience but not regular practice."
							control={<Radio />}
							label="I have some experience but not regular practice."
						/>
						<FormControlLabel
							value="I am familiar with it but haven't practised much."
							control={<Radio />}
							label="I am familiar with it but haven't practised much."
						/>
						<FormControlLabel
							value="I have no experience with meditation or mindfulness."
							control={<Radio />}
							label="I have no experience with meditation or mindfulness."
						/>
						<FormControlLabel
							value="No, but I am interested in starting."
							control={<Radio />}
							label="No, but I am interested in starting."
						/>
						<FormControlLabel
							value="No, and I have no interest in starting."
							control={<Radio />}
							label="No, and I have no interest in starting."
						/>
					</RadioGroup>
				</FormControl>
			</Box>
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 5</h4>
				<h5>How frequently do you practice breathing exercises?</h5>
				<FormControl>
					<FormLabel id="query5"></FormLabel>
					<RadioGroup
						aria-labelledby="query5"
						name="query5"
						value={data.query5}
						onChange={handleChange}
					>
						<FormControlLabel value="Daily" control={<Radio />} label="Daily" />
						<FormControlLabel
							value="Several times a week"
							control={<Radio />}
							label="Several times a week"
						/>
						<FormControlLabel
							value="Once a week"
							control={<Radio />}
							label="Once a week"
						/>
						<FormControlLabel
							value="Occasionally, as needed"
							control={<Radio />}
							label="Occasionally, as needed"
						/>
						<FormControlLabel value="Never" control={<Radio />} label="Never" />
					</RadioGroup>
				</FormControl>
			</Box>
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 6</h4>
				<h5>
					What devices do you typically use for breathing exercises (e.g.,
					smartphone, smartwatch, dedicated breathing device)?
				</h5>
				<FormControl>
					<FormLabel id="query6"></FormLabel>
					<RadioGroup
						aria-labelledby="query6"
						name="query6"
						value={data.query6}
						onChange={handleChange}
					>
						<FormControlLabel
							value="I don't use it"
							control={<Radio />}
							label="I don't use it"
						/>
						<FormControlLabel
							value="Smartphone apps"
							control={<Radio />}
							label="Smartphone apps"
						/>
						<FormControlLabel
							value="Smartwatch"
							control={<Radio />}
							label="Smartwatch"
						/>
						<FormControlLabel
							value="Dedicated breathing device etc"
							control={<Radio />}
							label="Breathing device(melo) etc"
						/>
						<FormControlLabel
							value="None, I prefer to practice breathing exercises without any specific device."
							control={<Radio />}
							label="None, I prefer to practice breathing exercises without any specific device."
						/>
						<FormControlLabel value="Other" control={<Radio />} label="Other" />
					</RadioGroup>
				</FormControl>
			</Box>
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 6a</h4>
				<h5>If you chose OTHER in the previous question, please specify:</h5>
				<TextField
					name="query6a"
					value={data.query6a}
					onChange={handleChange}
					label="Write something"
				/>
			</Box>
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 7</h4>
				<h5>What features do you look for in a breathing exercise app?</h5>
				<FormControl>
					<FormLabel id="query7"></FormLabel>
					<FormGroup
						aria-labelledby="query7"
						name="query7"
						value={data.query7}
						onChange={handleChange}
					>
						<FormControlLabel
							value="Guided Breathing Exercises"
							control={<Checkbox />}
							label="Guided Breathing Exercises"
						/>
						<FormControlLabel
							value="Customisable Breathing Patterns"
							control={<Checkbox />}
							label="Customisable Breathing Patterns"
						/>
						<FormControlLabel
							value="Relaxing Background Music"
							control={<Checkbox />}
							label="Relaxing Background Music"
						/>
						<FormControlLabel
							value="Visual Breathing Guides"
							control={<Checkbox />}
							label="Visual Breathing Guides"
						/>
						<FormControlLabel
							value="Breathing Techniques for Specific Goals (e.g., stress relief, sleep aid)"
							control={<Checkbox />}
							label="Breathing Techniques for Specific Goals (e.g., stress relief, sleep aid)"
						/>
						<FormControlLabel
							value="Progress Tracking and Analytics"
							control={<Checkbox />}
							label="Progress Tracking and Analytics"
						/>
						<FormControlLabel
							value="Breathing exercises for different skill levels (beginner, intermediate, advanced)"
							control={<Checkbox />}
							label="Breathing exercises for different skill levels (beginner, intermediate, advanced)"
						/>
						<FormControlLabel
							value="Vibration for tactile cues during breathing exercises"
							control={<Checkbox />}
							label="Vibration for tactile cues during breathing exercises"
						/>
						<FormControlLabel
							value="Setting the duration of breathing sessions"
							control={<Checkbox />}
							label="Setting the duration of breathing sessions"
						/>
						<FormControlLabel
							value="None, I do not use breathing exercise apps"
							control={<Checkbox />}
							label="None, I do not use breathing exercise apps"
						/>
					</FormGroup>
				</FormControl>
			</Box>
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 7a</h4>
				<h5>
					If you chose VIBRATION in the previous question, please specify:
				</h5>
				<TextField
					name="query7a"
					value={data.query7a}
					onChange={handleChange}
					label="Write something"
				/>
			</Box>
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 8</h4>
				<h5>
					How open are you to trying new relaxation methods or techniques?
				</h5>
				<Slider
					name="query8"
					marks={marksEight}
					valueLabelDisplay="auto"
					value={data.query8}
					onChange={handleChange}
					shiftStep={1}
					min={1}
					max={5}
				/>
			</Box>
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 8a</h4>
				<h5>
					How sceptical are you about trying new relaxation methods or
					techniques?
				</h5>
				<Slider
					name="query8a"
					marks={marksEightA}
					valueLabelDisplay="auto"
					value={data.query8a}
					onChange={handleChange}
					shiftStep={1}
					min={1}
					max={5}
				/>
			</Box>
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 9</h4>
				<h5>
					Have you used apps with vibration (haptic feedback) for breathing
					exercises before? If yes, what was your experience?
				</h5>
				<TextField
					name="query9"
					value={data.query9}
					onChange={handleChange}
					label="Write something"
				/>
			</Box>
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 10</h4>
				<h5>
					What are your overall impressions of the breathing exercises you did a
					minute ago, specifically regarding the visual graph with the blue
					bubble?
				</h5>
				<Slider
					name="query10"
					marks={marksTen}
					valueLabelDisplay="auto"
					value={data.query10}
					onChange={handleChange}
					shiftStep={1}
					min={1}
					max={5}
				/>
			</Box>
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 11</h4>
				<h5>
					Did you notice any differences in your experience or effectiveness of
					the breathing exercises between the two versions? (with haptic /
					without haptic feedback)
				</h5>
				<FormControl>
					<FormLabel id="query11"></FormLabel>
					<RadioGroup
						aria-labelledby="query11"
						name="query11"
						value={data.query11}
						onChange={handleChange}
					>
						<FormControlLabel
							value="Yes, I noticed a significant difference."
							control={<Radio />}
							label="Yes, I noticed a significant difference."
						/>
						<FormControlLabel
							value="Yes, I noticed a slight difference."
							control={<Radio />}
							label="Yes, I noticed a slight difference."
						/>
						<FormControlLabel
							value="No, I did not notice any difference."
							control={<Radio />}
							label="No, I did not notice any difference."
						/>
						<FormControlLabel
							value="I'm not sure / I didn't pay close attention."
							control={<Radio />}
							label="I'm not sure / I didn't pay close attention."
						/>
						<FormControlLabel value="Other" control={<Radio />} label="Other" />
					</RadioGroup>
				</FormControl>
			</Box>
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 11a</h4>
				<h5>If you chose OTHER in the previous question, please specify:</h5>
				<TextField
					name="query11a"
					value={data.query11a}
					onChange={handleChange}
					label="Write something"
				/>
			</Box>
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 12</h4>
				<h5>
					Did you notice the haptic feedback during the breathing exercises?
				</h5>
				<FormControl>
					<FormLabel id="query12"></FormLabel>
					<RadioGroup
						aria-labelledby="query12"
						name="query12"
						value={data.query12}
						onChange={handleChange}
					>
						<FormControlLabel
							value="I noticed in the first exercise"
							control={<Radio />}
							label="I noticed in the first exercise"
						/>
						<FormControlLabel
							value="I noticed in the second exercise"
							control={<Radio />}
							label="I noticed in the second exercise"
						/>
						<FormControlLabel
							value="I didn't notice"
							control={<Radio />}
							label="I didn't notice"
						/>
					</RadioGroup>
				</FormControl>
			</Box>
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 13</h4>
				<h5>
					If yes, how would you describe the experience of the haptic feedback?
				</h5>
				<FormControl>
					<FormLabel id="query13"></FormLabel>
					<FormGroup
						aria-labelledby="query13"
						name="query13"
						value={data.query13}
						onChange={handleChange}
					>
						<FormControlLabel
							value="Subtle vibrations"
							control={<Checkbox />}
							label="Subtle vibrations"
						/>
						<FormControlLabel
							value="Enhanced focus"
							control={<Checkbox />}
							label="Enhanced focus"
						/>
						<FormControlLabel
							value="Annoying"
							control={<Checkbox />}
							label="Annoying"
						/>
						<FormControlLabel
							value="Soothing sensations"
							control={<Checkbox />}
							label="Soothing sensations"
						/>
						<FormControlLabel
							value="Unexpected but interesting"
							control={<Checkbox />}
							label="Unexpected but interesting"
						/>
						<FormControlLabel
							value="Occasionally distracting"
							control={<Checkbox />}
							label="Occasionally distracting"
						/>
					</FormGroup>
				</FormControl>
			</Box>
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 14</h4>
				<h5>
					Did the vibration (haptic feedback) help you stay focused during the
					breathing exercises?
				</h5>
				<Slider
					name="query14"
					marks={marksFourteen}
					valueLabelDisplay="auto"
					value={data.query14}
					onChange={handleChange}
					shiftStep={1}
					min={1}
					max={5}
				/>
			</Box>
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 14a</h4>
				<h5>
					Did the vibration (haptic feedback) enhanced your experiance during
					the breathing exercises?
				</h5>
				<Slider
					name="query14a"
					marks={marksFourteenA}
					valueLabelDisplay="auto"
					value={data.query14a}
					onChange={handleChange}
					shiftStep={1}
					min={1}
					max={5}
				/>
			</Box>
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 15</h4>
				<h5>
					Did the vibration (haptic feedback) distracted you during the
					breathing exercises?
				</h5>
				<Slider
					name="query15"
					marks={marksFifteen}
					valueLabelDisplay="auto"
					value={data.query15}
					onChange={handleChange}
					shiftStep={1}
					min={1}
					max={5}
				/>
			</Box>
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 16</h4>
				<h5>
					Did you find the haptic feedback accurately reflected the rhythm or
					pace of the exercises?
				</h5>
				<Slider
					name="query16"
					marks={marksSixteen}
					valueLabelDisplay="auto"
					value={data.query16}
					onChange={handleChange}
					shiftStep={1}
					min={1}
					max={5}
				/>
			</Box>
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 17</h4>
				<h5>Did the haptic feedback feel natural and intuitive?</h5>
				<Slider
					name="query17"
					marks={marksSeventeen}
					valueLabelDisplay="auto"
					value={data.query17}
					onChange={handleChange}
					shiftStep={1}
					min={1}
					max={5}
				/>
			</Box>
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 18</h4>
				<h5>
					Once this app is available how likely are you to continue using the
					version of the app with vibration haptic feedback?
				</h5>
				<Slider
					name="query18"
					marks={marksEighteen}
					valueLabelDisplay="auto"
					value={data.query18}
					onChange={handleChange}
					shiftStep={1}
					min={1}
					max={5}
				/>
			</Box>
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 19</h4>
				<h5>
					Why did you prefer the chosen version? Please explain your preference
					in more detail.
				</h5>
				<TextField
					name="query19"
					value={data.query19}
					onChange={handleChange}
					label="Write something"
				/>
			</Box>
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 20</h4>
				<h5>
					{" "}
					Do you have any suggestions for improving the vibration (haptic
					feedback)
				</h5>
				<TextField
					name="query20"
					value={data.query20}
					onChange={handleChange}
					label="Write something"
				/>
			</Box>
			<Box sx={{ width: 250, p: 2 }}>
				<h4>Question 21</h4>
				<h5>
					Are there any additional features or adjustments you would like to see
					in the app related to breathing exercises
				</h5>
				<TextField
					name="query21"
					value={data.query21}
					onChange={handleChange}
					label="Write something"
				/>
			</Box>
			<div
				style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}
			>
				<Button variant="contained" onClick={handleSubmit}>
					Next
				</Button>
			</div>
		</div>
	);
}
