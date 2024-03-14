import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Slider } from "@mui/material"
import { useEffect, useState } from "react"


const marksSeven = [
    {
        value: 1,
        label: "Low Stress"
    },
    {
        value: 3,
        label: ""
    },
    {
        value: 5,
        label: "Intense Stress"
    }
]
const marksTen = [
    {
        value: 1,
        label: "Sceptical"
    },
    {
        value: 3,
        label: ""
    },
    {
        value: 5,
        label: "Open"
    }
]
const marksTwelve = [
    {
        value: 1,
        label: "Very poor"
    },
    {
        value: 3,
        label: ""
    },
    {
        value: 5,
        label: "Satisfied"
    }
]

const marksSixteen = [
    {
        value: 1,
        label: "Distracted"
    },
    {
        value: 3,
        label: ""
    },
    {
        value: 5,
        label: "Stayed Focus "
    }
]
const marksSeventeen = [
    {
        value: 1,
        label: "Distracted"
    },
    {
        value: 3,
        label: ""
    },
    {
        value: 5,
        label: "Enhanced"
    }
]
const marksNineteen = [
    {
        value: 1,
        label: "Less Likely"
    },
    {
        value: 3,
        label: ""
    },
    {
        value: 5,
        label: "Most Likely"
    }
]
export default function Survey({ handleSendData, handleClick, shouldVibrate }) {

    const [data, setData] = useState({
        query0: shouldVibrate?"yes":"no",
        query1: "",
        query2: "",
        query3: "",
        query4: "",
        query5: "",
        query6: "",
        query7: "",
        query8: "",
        query9: "",
        query10: "",
        query11: "",
        query12: "",
        query13: "",
        query14: "",
        query15: "",
        query16: "",
        query17: "",
        query18: "",
        query19: "",
        query20: "",
        query21: "",
        query22: "",
        query23: "",
        query24: "",
        query25: ""
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
            <h3>Survery Final</h3>
            <Box sx={{ width: 250, p: 2}}>
                <h4>Question 1</h4>
                <h5>What is your gender?</h5>
                <FormControl>
                    <FormLabel id="query1">
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="query1"
                        name="query1"
                        value={data.query1}
                        onChange={handleChange} 
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="non binary" control={<Radio />} label="non binary" />
                        <FormControlLabel value="prefer not to say" control={<Radio />} label="Prefer not to say" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{ width: 250, p: 2 }}>
                <h4>Question 2</h4>
                <h5>Which age group do you belong to? </h5>
                <FormControl>
                    <FormLabel id="query2">
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="query2"
                        name="query2"
                        value={data.query2}
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
            <Box sx={{ width: 250, p: 2 }}>
                <h4>Question 3</h4>
                <h5>What is your current occupation?</h5>
                <FormControl>
                    <FormLabel id="query3">
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="query3"
                        name="query3"
                        value={data.query3}
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
            <Box sx={{ width: 250, p: 2 }}>
                <h4>Question 4</h4>
                <h5>How often do you use technology in your daily life?</h5>
                <FormControl>
                    <FormLabel id="query4">
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="query4"
                        name="query4"
                        value={data.query4}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="Heavy user (use technology extensively throughout the day)" control={<Radio />} label="Heavy user (use technology extensively throughout the day)" />
                        <FormControlLabel value="Moderate user (use technology regularly but not excessively)" control={<Radio />} label="Moderate user (use technology regularly but not excessively)" />
                        <FormControlLabel value="Light user (use technology sparingly)" control={<Radio />} label="Light user (use technology sparingly)" />
                        <FormControlLabel value="Non-user (rarely use technology)" control={<Radio />} label="Non-user (rarely use technology)" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{ width: 250, p: 2 }}>
                <h4>Question 5</h4>
                <h5>Have you practised meditation or mindfulness exercises before?</h5>
                <FormControl>
                    <FormLabel id="query5">
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="query5"
                        name="query5"
                        value={data.query5}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="I practice regularly" control={<Radio />} label="I practice regularly" />
                        <FormControlLabel value="I have some experience but not regular practice." control={<Radio />} label="I have some experience but not regular practice." />
                        <FormControlLabel value="I am familiar with it but haven't practised much." control={<Radio />} label="I am familiar with it but haven't practised much." />
                        <FormControlLabel value="I have no experience with meditation or mindfulness." control={<Radio />} label="I have no experience with meditation or mindfulness." />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{ width: 250, p: 2 }}>
                <h4>Question 6</h4>
                <h5>How frequently do you practice breathing exercises?</h5>
                <FormControl>
                    <FormLabel id="query6">
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="query6"
                        name="query6"
                        value={data.query6}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="Daily" control={<Radio />} label="Daily" />
                        <FormControlLabel value="Several times a week" control={<Radio />} label="Several times a week" />
                        <FormControlLabel value="Once a week" control={<Radio />} label="Once a week" />
                        <FormControlLabel value="Occasionally, as needed" control={<Radio />} label="Occasionally, as needed" />
                        <FormControlLabel value="Never" control={<Radio />} label="Never" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{ width: 250, p: 2 }}>
                <h4>Question 7</h4>
                <h5>On a scale of 1 to 5, how relaxed do you feel right now?</h5>
                <Slider
                    name="query7"
                    marks={marksSeven}
                    valueLabelDisplay="auto"
                    value={data.query7}
                    onChange={handleChange}
                    shiftStep={1}
                    min={1}
                    max={5}
                />
            </Box>
            <Box sx={{ width: 250, p: 2 }}>
                <h4>Question 8</h4>
                <h5>What devices do you typically use for breathing exercises (e.g., smartphone, smartwatch, dedicated breathing device)?</h5>
                <FormControl>
                    <FormLabel id="query8">
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="query8"
                        name="query8"
                        value={data.query8}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="Smartphone apps" control={<Radio />} label="Smartphone apps" />
                        <FormControlLabel value="Smartwatch" control={<Radio />} label="Smartwatch" />
                        <FormControlLabel value="Breathing device(melo) etc" control={<Radio />} label="Breathing device(melo) etc" />
                        <FormControlLabel value="None, I prefer to practice breathing exercises without any specific device." control={<Radio />} label="None, I prefer to practice breathing exercises without any specific device." />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{ width: 250, p: 2 }}>
                <h4>Question 9</h4>
                <h5>What features do you look for in a breathing exercise app?</h5>
                <FormControl>
                    <FormLabel id="query9">
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="query9"
                        name="query9"
                        value={data.query9}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="Guided Breathing Exercises" control={<Radio />} label="Guided Breathing Exercises" />
                        <FormControlLabel value="Customisable Breathing Patterns" control={<Radio />} label="Customisable Breathing Patterns" />
                        <FormControlLabel value="Relaxing Background Music" control={<Radio />} label="Relaxing Background Music" />
                        <FormControlLabel value="Visual Breathing Guides" control={<Radio />} label="Visual Breathing Guides" />
                        <FormControlLabel value="Breathing Techniques for Specific Goals (e.g., stress relief, sleep aid)" control={<Radio />} label="Breathing Techniques for Specific Goals (e.g., stress relief, sleep aid)" />
                        <FormControlLabel value="Progress Tracking and Analytics" control={<Radio />} label="Progress Tracking and Analytics" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{ width: 250, p: 2 }}>
                <h4>Question 10</h4>
                <h5>How open are you to trying new relaxation methods or techniques?</h5>
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
                <h5>Have you used apps with haptic feedback for breathing exercises before? If yes, what was your experience?</h5>
                <TextField
                    name="query11"
                    value={data.query11}
                    onChange={handleChange}
                    label="Write something"
                />
            </Box>
            <Box sx={{ width: 250, p: 2 }}>
                <h4>Question 12</h4>
                <h5>What are your overall impressions of the Serenity+ App?</h5>
                <Slider
                    name="query12"
                    marks={marksTwelve}
                    valueLabelDisplay="auto"
                    value={data.query12}
                    onChange={handleChange}
                    shiftStep={1}
                    min={1}
                    max={5}
                />
            </Box>
            <Box sx={{ width: 250, p: 2}}>
                <h4>Question 13</h4>
                <h5>Did you notice any differences in your experience or effectiveness of the breathing exercises between the two versions? (with haptic / without haptic feedback)</h5>
                <FormControl>
                    <FormLabel id="query13">
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="query13"
                        name="query13"
                        value={data.query13}
                        onChange={handleChange} 
                    >
                        <FormControlLabel value="Yes, I noticed a significant difference." control={<Radio />} label="Yes, I noticed a significant difference." />
                        <FormControlLabel value="Yes, I noticed a slight difference." control={<Radio />} label="Yes, I noticed a slight difference." />
                        <FormControlLabel value="No, I did not notice any difference." control={<Radio />} label="No, I did not notice any difference." />
                        <FormControlLabel value="I'm not sure / I didn't pay close attention." control={<Radio />} label="I'm not sure / I didn't pay close attention." />
                        <FormControlLabel value="Other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{ width: 250, p: 2}}>
                <h4>Question 14</h4>
                <h5>Did you notice the haptic feedback during the breathing exercises?</h5>
                <FormControl>
                    <FormLabel id="query14">
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="query14"
                        name="query14"
                        value={data.query14}
                        onChange={handleChange} 
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="yes" />
                        <FormControlLabel value="no" control={<Radio />} label="no" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{ width: 250, p: 2}}>
                <h4>Question 15</h4>
                <h5>If yes, how would you describe the experience of the haptic feedback?</h5>
                <FormControl>
                    <FormLabel id="query15">
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="query15"
                        name="query15"
                        value={data.query15}
                        onChange={handleChange} 
                    >
                        <FormControlLabel value="Subtle vibrations" control={<Radio />} label="Subtle vibrations" />
                        <FormControlLabel value="Enhanced focus" control={<Radio />} label="Enhanced focus" />
                        <FormControlLabel value="Soothing sensations" control={<Radio />} label="Soothing sensations" />
                        <FormControlLabel value="Unexpected but interesting" control={<Radio />} label="Unexpected but interesting" />
                        <FormControlLabel value="Occasionally distracting" control={<Radio />} label="Occasionally distracting" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{ width: 250, p: 2 }}>
                <h4>Question 16</h4>
                <h5>Did the haptic feedback help you stay focused during the breathing exercises?</h5>
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
                <h5> Did the haptic feedback enhance or distract from your experience of the breathing exercises?</h5>
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
            <Box sx={{ width: 250, p: 2}}>
                <h4>Question 18</h4>
                <h5> Did you find the haptic feedback accurately reflected the rhythm or pace of the exercises?</h5>
                <FormControl>
                    <FormLabel id="query18">
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="query18"
                        name="query18"
                        value={data.query18}
                        onChange={handleChange} 
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="yes" />
                        <FormControlLabel value="no" control={<Radio />} label="no" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{ width: 250, p: 2 }}>
                <h4>Question 19</h4>
                <h5>  On a scale of 1 to 5, how likely are you to continue using the version of the app with haptic feedback?</h5>
                <Slider
                    name="query19"
                    marks={marksNineteen}
                    valueLabelDisplay="auto"
                    value={data.query19}
                    onChange={handleChange}
                    shiftStep={1}
                    min={1}
                    max={5}
                />
            </Box>
            <Box sx={{ width: 250, p: 2}}>
                <h4>Question 20</h4>
                <h5>Did the haptic feedback feel natural and intuitive?</h5>
                <FormControl>
                    <FormLabel id="query20">
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="query20"
                        name="query20"
                        value={data.query20}
                        onChange={handleChange} 
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="yes" />
                        <FormControlLabel value="no" control={<Radio />} label="no" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{ width: 250, p: 2}}>
                <h4>Question 21</h4>
                <h5> If you've used both app versions (with and without haptic feedback), which one did you prefer?</h5>
                <FormControl>
                    <FormLabel id="query21">
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="query21"
                        name="query21"
                        value={data.query21}
                        onChange={handleChange} 
                    >
                        <FormControlLabel value="Version with haptic feedback" control={<Radio />} label="Version with haptic feedback" />
                        <FormControlLabel value="Version without haptic feedback" control={<Radio />} label="Version without haptic feedback" />
                        <FormControlLabel value="No preference/I haven't used both versions." control={<Radio />} label="No preference/I haven't used both versions." />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{ width: 250, p: 2 }}>
                <h4>Question 22</h4>
                <h5> Why did you prefer the chosen version? Please explain your preference in more detail.</h5>
                <TextField
                    name="query22"
                    value={data.query22}
                    onChange={handleChange}
                    label="Write something"
                />
            </Box>
            <Box sx={{ width: 250, p: 2}}>
                <h4>Question 23</h4>
                <h5>If given the option, would you prefer to use the version of the app with haptic feedback or without?</h5>
                <FormControl>
                    <FormLabel id="query23">
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="query23"
                        name="query23"
                        value={data.query23}
                        onChange={handleChange} 
                    >
                        <FormControlLabel value="with haptic feedback" control={<Radio />} label="with haptic feedback" />
                        <FormControlLabel value="without haptic feedback" control={<Radio />} label="without haptic feedback" />
                        <FormControlLabel value="No preference" control={<Radio />} label="No preference" />

                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{ width: 250, p: 2 }}>
                <h4>Question 24</h4>
                <h5> Do you have any suggestions for improving the haptic feedback</h5>
                <TextField
                    name="query24"
                    value={data.query24}
                    onChange={handleChange}
                    label="Write something"
                />
            </Box>
            <Box sx={{ width: 250, p: 2 }}>
                <h4>Question 25</h4>
                <h5>Are there any additional features or adjustments you would like to see in the app related to haptic feedback or breathing exercises</h5>
                <TextField
                    name="query25"
                    value={data.query25}
                    onChange={handleChange}
                    label="Write something"
                />
            </Box>
            <button onClick={handleSubmit}>Click</button>
        </div>
    )

};
