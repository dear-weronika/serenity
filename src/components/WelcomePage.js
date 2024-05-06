import { Button } from "@mui/material";
export default function WelcomePage({ handleClick }) {
    return (
        <div>
            <h1>Welcome to Serenity+ Study</h1>
            
            <p>Thank you for participating in our study!</p>
            <p>It should only take around <strong>10 minutes</strong> of your time.</p>
                <p>We'll be doing two breathing exercises with animation, each lasting <strong>one minute</strong>.
                <br></br>
                One of them might include a gentle vibration.
                Between exercises, we'll check-in on your mood. Once you've completed the exercises, there will be a survey for you to fill out. </p>
                <p><strong>Reminder:</strong>
                Your participation is voluntary, and you can opt out at any time.</p>
                <p>To begin PRESS button below</p>
               <p>Thanks again for your involvement!</p>
            <Button variant="contained" onClick={handleClick}>Start</Button>
            <p>Version 0.1.1</p>
        </div>
    )
};
