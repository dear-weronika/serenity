import { Button } from "@mui/material";
export default function WelcomePage({ handleClick }) {
    return (
        <div>
            <h1>Welcome to Serenity+ Study</h1>
            <p><strong>Disclaimer:</strong>
                Your participation is voluntary, and you can opt out at any time. 
                Your feedback is valuable as we evaluate different implementations. 
                Thank you for your participation and understanding.</p>
            <Button variant="contained" onClick={handleClick}>Start</Button>
            <p>Version 0.0.3</p>
        </div>
    )
};
