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
                <p>To begin PRESS the button below</p>
               <p>Thanks again for your involvement!</p>
            <Button variant="contained" onClick={handleClick}>Start</Button>
            <p>You need to complete this study on an android smartphone. If you are seeing this on your laptop and want to switch to your android device, you can scan below barcode or visit <a href="https://theserenity.netlify.app">https://theserenity.netlify.app</a></p>
            <img src="qrcode_theserenity.netlify.app.png" style={{width:200}} alt="qr code link to https://theserenity.netlify.app"></img>
            <p>Version 0.1.5</p>
        </div>
    )
};
