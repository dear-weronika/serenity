import { Box, Container, Slider } from "@mui/material";

const marksOne=[
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
const marksTwo=[
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
const marksThree=[
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

export default function PreQuest({handleClick}) {
    return (
        <Container>
            <h1>Questionnaire</h1>
            <Box sx = {{width:400,p:2}}>
                <h2>Question 1</h2>
                <h3>How would you rate your current level of stress on a scale of 1 to 10?</h3>
                <Slider
                marks={marksOne}
                valueLabelDisplay="auto"
                defaultValue={5}
                shiftStep={1}
                min={1}
                max={10}
                />
            </Box>
            <Box sx = {{width:400,p:2}}>
                <h2>Question 2</h2>
                <h3>On a scale of 1 to 10, how open are you to trying new relaxation methods or techniques</h3>
                <Slider
                marks={marksTwo}
                valueLabelDisplay="auto"
                defaultValue={5}
                shiftStep={1}
                min={1}
                max={10}
                />
            </Box>
            <Box sx = {{width:400,p:2}}>
                <h2>Question 3</h2>
                <h3>On a scale of 1 to 10, how relaxed do you feel right now?</h3>
                <Slider
                marks={marksThree}
                valueLabelDisplay="auto"
                defaultValue={5}
                shiftStep={1}
                min={1}
                max={10}
                />
            </Box>
            <button onClick={handleClick}>Click</button>
        </Container>
    )
};
