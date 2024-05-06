import {
	Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
	getCheckbox,
	getRadioButton,
	getSlider,
	getTextField,
} from "./SurveyHelper";

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
		<div style={{width:"100%"}}>
			<h2>Thank you for completing the exercises.</h2>
			<h2>
				Now, the final step is a survey that will take less than 5 minutes
			</h2>
			{getRadioButton(
				"Question 1",
				"What best describes your gender?",
				"query1",
				[["Female"], ["Male"], ["Non Binary"], ["Prefer not to say"], ["A gender not listed here"]],
				handleChange
			)}
			{getRadioButton(
				"Question 2",
				"Which age group do you belong to? ",
				"query2",
				[
					["Under 18"],
					["18-24"],
					["25-34"],
					["35-44"],
					["45-54"],
					["55 or older"],
				],
				handleChange
			)}
			{getRadioButton(
				"Question 3",
				"How often do you use your mobile phone in daily life?",
				"query3",
				[
					["Heavy user (More than 4 hours)"],
					["Moderate user (2-4 hours)"],
					["Light user (1-2 hours)"],
					["Non-user (rarely use mobile phone)"],
				],
				handleChange
			)}
			{getRadioButton(
				"Question 4",
				"Have you practised meditation or mindfulness exercises before?",
				"query4",
				[
					["I practice regularly"],
					["I have some experience but not regular practice."],
					["I am familiar with it but haven't practised much."],
					["I have no experience with meditation or mindfulness."],
					["No, but I am interested in starting."],
					["No, and I have no interest in starting."],
				],
				handleChange
			)}
			{getRadioButton(
				"Question 5",
				"How frequently do you practice breathing exercises?",
				"query5",
				[
					["Daily"],
					["Several times a week"],
					["Once a week"],
					["Occasionally, as needed"],
					["Never"],
				],
				handleChange
			)}
			{getCheckbox(
				"Question 6",
				"What devices do you typically use for breathing exercises (e.g. smartphone, smartwatch, dedicated breathing device)?",
				"query6",
				[
					["I never perform breathing exercieses"],
					["I don't use any devices for breathing exercieses"],
					["Smartphone apps"],
					["Smartwatch"],
					["Dedicated breathing device"],
					[
						"None, I prefer to practice breathing exercises without any specific device.",
					],
					["Other"],
				],
				handleChange
			)}
			{getTextField(
				"Question 6a",
				"If you chose OTHER in the previous question, please specify:",
				"query6a",
				["Write something"]
				,
				handleChange
			)}
			{getCheckbox(
				"Question 7",
				"What features do you look for in a breathing exercise app?",
				"query7",
				[
					["Guided Breathing Exercises"],
					["Customisable Breathing Patterns"],
					["Relaxing Background Music"],
					["Visual Breathing Guides"],
					[
						"Breathing Techniques for Specific Goals (e.g., stress relief, sleep aid)",
					],
					["Vibration for tactile cues during breathing exercises"],
					["Setting the duration of breathing sessions"],
					["None, I do not use breathing exercise apps"],
				],
				handleChange
			)}
			{getTextField(
				"Question 7a",
				"If you chose VIBRATION in the previous question, please specify:",
				"query7a",
				["Write something"],
				handleChange
			)}
			{getSlider(
				"Question 8",
				"How open are you to trying new relaxation methods or techniques?",
				"query8",
				[1, 5],
				handleChange
			)}
			{getSlider(
				"Question 8a",
				"How sceptical are you about trying new relaxation methods or techniques?",
				"query8a",
				[1, 5],
				handleChange
			)}
			{getTextField(
				"Question 9",
				"Have you used apps with vibration (haptic feedback) for breathing exercises before? If yes, what was your experience?",
				"query9",
				["Write something"],
				handleChange
			)}
			{getTextField(
				"Question 10",
				"In the exercises, you could see a blue bubble growing and shrinking. What did you think about that visualization and why?",
				"query10",
				["Write something"],
				handleChange
			)}
			{getRadioButton(
				"Question 11",
				"Did you notice any differences in your experience or effectiveness of the breathing exercises between the two versions? (with haptic / without haptic feedback)",
				"query11",
				[
					["Yes, I noticed a significant difference."],
					["Yes, I noticed a slight difference."],
					["No, I did not notice any difference."],
					["I'm not sure / I didn't pay close attention."],
					["Other"],
				],
				handleChange
			)}
			{getTextField(
				"Question 11a",
				"If you chose OTHER in the previous question, please specify:",
				"query11a",
				["Write something"],
				handleChange
			)}
			{getRadioButton(
				"Question 12",
				"Did you notice the vibration (haptic feedback) during the breathing exercises?",
				"query12",
				[
					["I noticed in the first exercise"],
					["I noticed in the second exercise"],
					["I noticed in the first and the second exercise"],
					["I didn't notice vibration"],
				],
				handleChange
			)}
			{getCheckbox(
				"Question 13",
				"If yes, how would you describe the experience of the vibration (haptic feedback)?",
				"query13",
				[
					["Subtle vibrations"],
					["Enhanced focus"],
					["Annoying"],
					["Soothing sensations"],
					["Unexpected but interesting"],
					["Occasionally distracting"],
				],
				handleChange
			)}
			{getSlider(
				"Question 14",
				"Did the vibration (haptic feedback) help you stay focused during the breathing exercises?",
				"query14",
				[1, 5],
				handleChange
			)}
			{getSlider(
				"Question 14a",
				"Did the vibration (haptic feedback) enhanced your experiance during the breathing exercises?",
				"query14a",
				[1, 5],
				handleChange
			)}
			{getSlider(
				"Question 15",
				"Did the vibration (haptic feedback) distracted you during the breathing exercises?",
				"query15",
				[1, 5],
				handleChange
			)}
			{getSlider(
				"Question 16",
				"Did you find the vibration (haptic feedback) accurately reflected the rhythm or pace of the exercises?",
				"query16",
				[1, 5],
				handleChange
			)}
			{getSlider(
				"Question 17",
				"Did the vibration (haptic feedback) feel natural and intuitive?",
				"query17",
				[1, 5],
				handleChange
			)}
			{getSlider(
				"Question 18",
				"Once this app is available how likely are you to continue using the version of the app with vibration (haptic feedback)?",
				"query18",
				[1, 5],
				handleChange
			)}
			{getTextField(
				"Question 19",
				"Do you have any suggestions for improving the vibration (haptic feedback)?",
				"query19",
				["Write something"],
				handleChange
			)}
			{getTextField(
				"Question 20",
				"Which model of mobile phone did you use for this study?(e.g Samsung Galaxy,Huawei)",
				"query20",
				["Write something"],
				handleChange
			)}
			{getTextField(
				"Question 21",
				"Are there any additional features or adjustments you would like to see in the app related to breathing exercises",
				"query21",
				["Write something"],
				handleChange
			)}
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
