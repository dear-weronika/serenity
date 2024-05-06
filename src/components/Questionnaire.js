import { Box, Slider } from "@mui/material";
import { useState } from "react";

const marksOne = [
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
const marksTwo = [
    {
        value: 1,
        label: "Very Skeptical"
    },
    {
        value: 5,
        label: "Willing to Consider"
    },
    {
        value: 10,
        label: "Completely Open"
    }
]
const marksThree = [
    {
        value: 1,
        label: "Anxious/Tense"
    },
    {
        value: 5,
        label: "Moderately Relaxed"
    },
    {
        value: 10,
        label: "Extremely Relaxed."
    }
]

export default function Questionnaire({ handleClick, version, handleSendData}) {

    const [data, setData] = useState({
        questionOne : 5, 
        questionTwo : 5,
        questionThree : 5,
    })

    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setData(values => ({...values,[name]: value}))
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        handleSendData(data)
        handleClick()
    }

    return (
        <Box>
            <h1>Questionnaire {version}</h1>
            <Box sx={{ width: 400, p: 2 }}>
                <h4>Question 1</h4>
                <h5>How would you rate your current level of stress on a scale of 1 to 10?</h5>
                <Slider 
                    name="questionOne"
                    marks={marksOne}
                    valueLabelDisplay="auto"
                    value={data.questionOne}
                    onChange={handleChange}
                    shiftStep={1}
                    min={1}
                    max={10}
                />
            </Box>
            <Box sx={{ width: 400, p: 2 }}>
                <h4>Question 2</h4>
                <h5>On a scale of 1 to 10, how open are you to trying new relaxation methods or techniques</h5>
                <Slider
                    name="questionTwo"
                    marks={marksTwo}
                    valueLabelDisplay="auto"
                    value={data.questionTwo}
                    onChange={handleChange}
                    shiftStep={1}
                    min={1}
                    max={10}
                />
            </Box>
            <Box sx={{ width: 400, p: 2 }}>
                <h4>Question 3</h4>
                <h5>On a scale of 1 to 10, how relaxed do you feel right now?</h5>
                <Slider
                    name="questionThree"
                    marks={marksThree}
                    valueLabelDisplay="auto"
                    value={data.questionThree}
                    onChange={handleChange}
                    shiftStep={1}
                    min={1}
                    max={10}
                />
            </Box>
            <button onClick={handleSubmit}>Click</button>
        </Box>
    )
};
