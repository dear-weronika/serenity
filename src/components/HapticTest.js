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
            <p>Did vibrations worked ?</p>
            <div style={{ display: 'flex', gap: '40px', justifyContent: 'center' }}>
                <Button variant="contained" size="small" onClick={handleYes}>yes</Button>
                <Button variant="contained" size="small" onClick={handleNo}>no</Button>
            </div>
        </div>
    )
    // navigator.vibrate([100, 300, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100]

    return (
        <div>
            {/* <p>Click on the button to check if haptic/vibration works !</p> */}
            <p>Before testing the vibration functionality:</p>
            <ul>
                <li>Ensure that your phone is an <strong>ANDROID Device</strong></li>
                <br></br>
                <li>Ensure your phone's sound mode is <strong>NOT SILENT</strong></li>
                <br></br>
                <li>Press the button a few times to initiate the vibration test</li>
            </ul>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" onClick={() => test()}>Check Vibration Now </Button>
            </div>
           
            {state}

        </div>

    )



};
