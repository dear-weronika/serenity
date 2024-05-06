import { useState } from "react";
import { Button } from "@mui/material";

export default function HapticTest({ handleYes, handleNo }) {
    const [state, setState] = useState()
    function test() {
        if("vibrate"in navigator){
            navigator.vibrate(1000);
        }
        // setTimeout(() => navigator.vibrate(1000), 3000)
        // setTimeout(() => navigator.vibrate(1000), 6000)
        setTimeout(() => setState(validation), 1000)
    }
    const validation = () => (
        <div>
            <p>Did you feel vibrations on the phone?</p>
            <div style={{ display: 'flex', gap: '40px', justifyContent: 'center' }}>
                <Button variant="contained" size="small" onClick={handleYes}>yes,I felt the vibration on the phone</Button>
                <Button variant="contained" size="small" onClick={handleNo}>no,it didn't work on my phone</Button>
            </div>
        </div>
    )
    // navigator.vibrate([100, 300, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100]

    return (
        <div>
            {/* <p>Click on the button to check if haptic/vibration works !</p> */}
            <p>Hey, just a few checks before we begin</p>
            <ul>
                <li>This is an early prototype, so it currently only work on <strong>ANDROID</strong> phone</li>
                <br></br>
                <li>Sadly, this app it's <strong>not</strong> compatible with iPhone or laptop at the moment</li>
                <br></br> 
                <li>The study may include vibration, make sure your phone is <strong>not on silent</strong>, because vibration is off when you're on silent</li>
                <br></br> 
                <li>Press the button to initiate the vibration test</li>
            </ul>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" onClick={() => test()}>Check Vibration Now </Button>
            </div>
           
            {state}

        </div>

    )



};
