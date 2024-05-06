import { Box, Button, Slider } from "@mui/material";
import { useState } from "react";
import MediaQuery from 'react-responsive'

const marksOne = [
    {
        value: 1,
        label: "Low"
    },
    {
        value: 3,
        label: ""
    },
    {
        value: 5,
        label: "Intense"
    }
]
const marksTwo = [
    {
        value: 1,
        label: "Relaxed "
    },
    {
        value: 3,
        label: ""
    },
    {
        value: 5,
        label: "Not at all "
    }
]
const marksThree = [
    {
        value: 1,
        label: "Not at all"
    },
    {
        value: 3,
        label: ""
    },
    {
        value: 5,
        label: "Very much"
    }
]

export default function Questionnaire({ handleClick, version, handleSendData }) {

    const [data, setData] = useState({
        questionOne: 1,
        questionTwo: 1,
        questionThree: 1,
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
                <h5>How would you rate your current stress level on a scale of 1 to 5?</h5>
                <Slider sx={{width:400}}
                    name="questionOne"
                    marks={marksOne}
                    valueLabelDisplay="auto"
                    value={data.questionOne}
                    onChange={handleChange}
                    shiftStep={1}
                    min={1}
                    max={5}
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
                    max={5}
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
                    max={5}
                />
            </Box>
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
            <Box sx={{ width: 300, p: 2 }}>
                <h4>Question 1</h4>
                <h5>How would you rate your current level of stress on a scale of 1 to 5?</h5>
                <Slider sx={{width:250,fontSize:12}}
                    name="questionOne"
                    marks={marksOne}
                    valueLabelDisplay="auto"
                    value={data.questionOne}
                    onChange={handleChange}
                    shiftStep={1}
                    min={1}
                    max={5}
                />
            </Box>
            <Box sx={{ width: 300, p: 2 }}>
                <h4>Question 2</h4>
                <h5>How would you describe your current state of mind?</h5>
                <Slider sx={{width:250,fontSize:12}}
                    name="questionTwo"
                    marks={marksTwo}
                    valueLabelDisplay="auto"
                    value={data.questionTwo}
                    onChange={handleChange}
                    shiftStep={1}
                    min={1}
                    max={5}
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
                    max={5}
                />
            </Box>
            </MediaQuery>
            <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
            <Button variant="contained" onClick={handleSubmit}>Next</Button> 
            </div>
        </Box>
      
        
    )
};
