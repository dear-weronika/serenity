import { useState } from "react"

export default function HapticTestFeedback({ handleForm }) {

    const [state, setState] = useState("")
    function handleChange(e) {
        setState(e.target.value)
        // console.log(e.target.value)
    }
    function submitForm(e) {
        e.preventDefault()

        handleForm(state)

    }


    return (
        <div>
            <form onSubmit={submitForm}>
                <h1>How many times your phone vibrated?</h1>

                <label >
                    <input type="radio" id="0" name="hapticTestFeedback" value="0" onChange={handleChange} />
                    0
                </label>
                <br></br>
                <label >
                    <input type="radio" id="3" name="hapticTestFeedback" value="3" onChange={handleChange} />
                    3
                </label>
                <br></br>
                <label>
                    <input type="radio" id="5" name="hapticTestFeedback" value="5" onChange={handleChange} />
                    5
                </label>
                <br></br>
                <label>
                    <input type="radio" id="8" name="hapticTestFeedback" value="8" onChange={handleChange} />
                    8
                </label>
                <br></br>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
};
