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
} from "@mui/material";

export const radioButtonOptions = [
	{
		value: 1,
		label: "Not at all",
	},
	// {
	// 	value: 3,
	// 	label: "",
	// },
	{
		value: 5,
		label: "Very much",
	},
];

// use like oneRadioButtonItem(["female", "Female"])
export function oneRadioButtonItem(nameAndValue) {
	// for example nameAndValue will be ["female", "Female"] or ["Female"]
	const value = nameAndValue[0];
	// if only one item given, use it as value and name
	const label = nameAndValue.length > 1 ? nameAndValue[1] : nameAndValue[0];
	return <FormControlLabel value={value} control={<Radio />} label={label} sx={{mt:1,mb:1}}/>;
}
// use like oneCheckboxItem(["female", "Female"])
export function oneCheckboxItem(nameAndValue) {
	// for example nameAndValue will be ["female", "Female"] or ["Female"]
	const value = nameAndValue[0];
	// if only one item given, use it as value and name
	const label = nameAndValue.length > 1 ? nameAndValue[1] : nameAndValue[0];
	return (
		<FormControlLabel value={value} control={<Checkbox />} label={label} sx={{mt:1,mb:1}} />
	);
}

// getRadioButton("Question 1", "What is your gender?", "query1", [["female", "Female"],
// 																["male", "Male"]])
export function getRadioButton(
	title,
	questionText,
	questionID,
	options,
	handleChangeCallback
) {
	return (
		<Box sx={{ p: 2 }}>
			<h3>{title}</h3>
			<h3>{questionText}</h3>
			<FormControl>
				<FormLabel id={questionID}></FormLabel>
				<RadioGroup
					aria-labelledby={questionID}
					name={questionID}
					onChange={handleChangeCallback}
				>
					{options.map(oneRadioButtonItem)}
				</RadioGroup>
			</FormControl>
		</Box>
	);
}

export function getSlider(
	title,
	questionText,
	questionID,
	options,
	handleChangeCallback
) {
	return (
		<Box sx={{ width:"80%", p: 2 }}>
			<h3>{title}</h3>
			<h3>{questionText}</h3>
			<Slider
				name={questionID}
				marks={radioButtonOptions}
				valueLabelDisplay="auto"
				onChange={handleChangeCallback}
				shiftStep={1}
				min={options[0]}
				max={options[1]}
			/>
		</Box>
	);
}
// {getSlider(
// 	"Question 8",
// 	"How open are you to trying new relaxation methods or techniques?",
// 	"query8",
// 	[1, 5],
// 	handleChange
// )}
export function getTextField(
	title,
	questionText,
	questionID,
	options,
	handleChangeCallback
) {
	return (
		<Box sx={{ p: 2 }}>
			<h3>{title}</h3>
			<h3>{questionText}</h3>
			<TextField
				name={questionID}
				onChange={handleChangeCallback}
				label={options[0]}
				fullWidth={true}
				minRows={2}
				multiline={true}
			/>
		</Box>
	);
}
// {getTextField(
// 	"Question 6a",
// 	"If you chose OTHER in the previous question, please specify:",
// 	"query6a",
// 	["Write something"]
// )}
export function getCheckbox(
	title,
	questionText,
	questionID,
	options,
	handleChangeCallback
) {
	return (
		<Box sx={{ p: 2 }}>
			<h3>{title}</h3>
			<h3>{questionText}</h3>
			<FormControl>
				<FormLabel id={questionID}></FormLabel>
				<FormGroup
					aria-labelledby={questionID}
					name={questionID}
					onChange={handleChangeCallback}
				>
					{options.map(oneCheckboxItem)}
				</FormGroup>
			</FormControl>
		</Box>
	);
}
