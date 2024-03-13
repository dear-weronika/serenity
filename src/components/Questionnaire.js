import { Box, Slider } from "@mui/material";
import { useState } from "react";
import MediaQuery from 'react-responsive'

const marksOne = [
    {
        value: 1,
        label: "Low"
    },
    {
        value: 5,
        label: "Moderate"
    },
    {
        value: 10,
        label: "Intense"
    }
]
const marksTwo = [
    {
        value: 1,
        label: "Calm"
    },
    {
        value: 5,
        label: "Relaxed"
    },
    {
        value: 10,
        label: "Anxious "
    }
]
const marksThree = [
    {
        value: 1,
        label: "Stressed"
    },
    {
        value: 5,
        label: "Neutral"
    },
    {
        value: 10,
        label: "Relaxed"
    }
]

export default function Questionnaire({ handleClick, version, handleSendData }) {

    const [data, setData] = useState({
        questionOne: 5,
        questionTwo: 5,
        questionThree: 5,
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

    return (
        
        
        <Box>
            <h3>Questionnaire {version}</h3>
            <MediaQuery minWidth={1224}>
            <Box sx={{ width: 400, p: 2 }}>
                <h4>Question 1</h4>
                <h5>How would you rate your current stress level on a scale of 1 to 10?</h5>
                <Slider sx={{width:400}}
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
                <h5>How would you describe your current state of mind</h5>
                <Slider sx={{width:400}}
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
                <h5>How relaxed do you feel right now?</h5>
                <Slider sx={{width:400}}
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
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
            <Box sx={{ width: 300, p: 2 }}>
                <h4>Question 1</h4>
                <h5>How would you rate your current level of stress on a scale of 1 to 10?</h5>
                <Slider sx={{width:250,fontSize:12}}
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
            <Box sx={{ width: 300, p: 2 }}>
                <h4>Question 2</h4>
                <h5>How would you describe your current state of mind</h5>
                <Slider sx={{width:250,fontSize:12}}
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
            <Box sx={{ width: 300, p: 2 }}>
                <h4>Question 3</h4>
                <h5>How relaxed do you feel right now?</h5>
                <Slider sx={{width:250,fontSize:12}}
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
            </MediaQuery>
            <button onClick={handleSubmit}>Click</button> 
        </Box>
      
        
    )
};
