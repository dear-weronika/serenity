import { useState } from "react"

export default function BreathingExercise(params) {

    const info = () => ( 
        <div>
            <p>Breathing Exercise Info</p>
            <button onClick={() => setState(animation)}>Start</button>
        </div>
    )
    
    const animation = () => (
        <div>
            <p>Animation</p>
        </div>
    )

    const [state, setState] = useState(info)

    return (
        
        <div>
            {state}  
        </div>
    )
};
