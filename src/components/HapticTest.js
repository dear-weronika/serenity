import { useState } from "react";

export default function HapticTest({handleYes,handleNo}) {
    const [state, setState] = useState()
    function test() {
        navigator.vibrate(1000);
        setTimeout(() => navigator.vibrate(1000), 3000)
        setTimeout(() => navigator.vibrate(1000), 6000)
        setTimeout(() => setState(validation),8000)
    }
        const validation = () => (
            <div>
                <p>Did haptic work ?</p>
                <button onClick={handleYes}>yes</button>
                <button onClick={handleNo}>no</button>
            </div>
        )
    // navigator.vibrate([10000, 300, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30, 100]

        return(
            <div>
                <p>Click on the button to check if haptic works !</p>
                <button onClick={()=>test()}>Trigger</button>
                {state}
                
            </div>
          
        )  
      
    

};
