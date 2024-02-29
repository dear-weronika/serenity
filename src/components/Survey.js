import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material"
import { useEffect, useState } from "react"

export default function Survey({ handleSendData, handleClick }) {

    const [data, setData] = useState({
        gender: "",
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
                <h3>human?</h3>
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
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                        <FormControlLabel value="prefer not to say" control={<Radio />} label="Prefer not to say" />
                    </RadioGroup>
                </FormControl>
            </Box>
            <Box sx={{ width: 400, p: 2 }}>
                <h2>Question 2</h2>
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
