import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Slider} from "@mui/material"
import { useEffect, useState } from "react"


const marksSeven = [
    {
        value: 1,
        label: "Low Stress"
    },
    {
        value: 5,
        label: "Moderate Stress"
    },
    {
        value: 10,
        label: "Intense Stress"
    }
]
export default function Survey({ handleSendData, handleClick }) {

    const [data, setData] = useState({
        gender: "",
        age: "",
        occupation: "",
        technologyUsage: "",
        practisedMeditation: "",
        practiceBreathing: "",
        marksSeven: "",
        question: ""
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setData(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        handleSendData(data)
        handleClick()
    }
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <div>
            <h5>Survery Final</h5>
            <Box sx={{ width: 400, p: 2 }}>
                <h2>Question 1</h2>
                <h3>What is your gender?</h3>
                <FormControl>
                    <FormLabel id="gender">
                        Gender
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="gender"
                        name="gender"
                        value={data.gender}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="non binary" control={<Radio />} label="non binary" />
                        <FormControlLabel value="prefer not to say" control={<Radio />} label="Prefer not to say" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{ width: 400, p: 2 }}>
                <h2>Question 2</h2>
                <h3>Which age group do you belong to? </h3>
                <FormControl>
                    <FormLabel id="age">
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="age"
                        name="age"
                        value={data.age}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="Under 18" control={<Radio />} label="Under 18" />
                        <FormControlLabel value="18-24" control={<Radio />} label="18-24" />
                        <FormControlLabel value="25-34" control={<Radio />} label="25-34" />
                        <FormControlLabel value="35-44" control={<Radio />} label="35-44" />
                        <FormControlLabel value="45-54" control={<Radio />} label="45-54" />
                        <FormControlLabel value="55 or older" control={<Radio />} label="55 or older" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{ width: 400, p: 2 }}>
                <h2>Question 3</h2>
                <h3>What is your current occupation?</h3>
                <FormControl>
                    <FormLabel id="occupation">
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="occupation"
                        name="occupation"
                        value={data.occupation}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="full-time employed" control={<Radio />} label="full-time employed" />
                        <FormControlLabel value="part-time employed" control={<Radio />} label="part-time employed" />
                        <FormControlLabel value="self employed" control={<Radio />} label="self employed" />
                        <FormControlLabel value="student" control={<Radio />} label="student" />
                        <FormControlLabel value="unemployed" control={<Radio />} label="unempleyed" />
                        <FormControlLabel value="retired" control={<Radio />} label="retired" />
                        <FormControlLabel value="other" control={<Radio />} label="other" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{ width: 400, p: 2 }}>
                <h2>Question 4</h2>
                <h3>How often do you use technology in your daily life?</h3>
                <FormControl>
                    <FormLabel id="technologyUsage">
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="technologyUsage"
                        name="technologyUsage"
                        value={data.technologyUsage}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="Heavy user (use technology extensively throughout the day)" control={<Radio />} label="Heavy user (use technology extensively throughout the day)" />
                        <FormControlLabel value="Moderate user (use technology regularly but not excessively)" control={<Radio />} label="Moderate user (use technology regularly but not excessively)" />
                        <FormControlLabel value="Light user (use technology sparingly)" control={<Radio />} label="Light user (use technology sparingly)" />
                        <FormControlLabel value="Non-user (rarely use technology)" control={<Radio />} label="Non-user (rarely use technology)" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{ width: 400, p: 2 }}>
                <h2>Question 5</h2>
                <h3>Have you practised meditation or mindfulness exercises before?</h3>
                <FormControl>
                    <FormLabel id="practisedMeditation">
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="practisedMeditation"
                        name="practisedMeditation"
                        value={data.practisedMeditation}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="I practice regularly" control={<Radio />} label="I practice regularly" />
                        <FormControlLabel value="I have some experience but not regular practice." control={<Radio />} label="I have some experience but not regular practice." />
                        <FormControlLabel value="I am familiar with it but haven't practised much." control={<Radio />} label="I am familiar with it but haven't practised much." />
                        <FormControlLabel value="I have no experience with meditation or mindfulness." control={<Radio />} label="I have no experience with meditation or mindfulness." />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{ width: 400, p: 2 }}>
                <h2>Question 6</h2>
                <h3>How frequently do you practice breathing exercises?</h3>
                <FormControl>
                    <FormLabel id="practiceBreathing">
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="practiceBreathing"
                        name="practiceBreathing"
                        value={data.practiceBreathing}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="Daily" control={<Radio />} label="Daily" />
                        <FormControlLabel value="Several times a week" control={<Radio />} label="Several times a week" />
                        <FormControlLabel value="Once a week" control={<Radio />} label="Once a week" />
                        <FormControlLabel value="Occasionally, as needed" control={<Radio />} label="Occasionally, as neededPrefer not to say" />
                        <FormControlLabel value="Never" control={<Radio />} label="Never" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{ width: 400, p: 2 }}>
                <h4>Question 7</h4>
                <h5>On a scale of 1 to 10, how relaxed do you feel right now?</h5>
                <Slider
                    name="questionSeven"
                    marks={marksSeven}
                    valueLabelDisplay="auto"
                    value={data.questionSeven}
                    onChange={handleChange}
                    shiftStep={1}
                    min={1}
                    max={10}
                />
            </Box>
            <Box sx={{ width: 400, p: 2 }}>
                <h2>Question 8</h2>
                <h3>Why do you prefer the version with or without haptic feedback?</h3>
                <TextField
                    name="question"
                    value={data.question}
                    onChange={handleChange}
                    label="Write something"
                />
            </Box>
            <button onClick={handleSubmit}>Click</button>
        </div>
    )

};
