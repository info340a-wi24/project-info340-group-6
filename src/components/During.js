import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

export default function During(props) {
    return (
        <div className='container mb-3'>
            <h2>Overview</h2>
            <p>During a fire, knowing what actions to take is critical for the safety of yourself and others. This guide outlines the crucial steps to follow when you find yourself in a fire situation.</p>

            <h2>Immediate Actions</h2>
            <p>As soon as you become aware of a fire, act quickly and calmly to ensure your safety and that of others:</p>
            <ul>
                <li>Alert everyone in the immediate area and activate the fire alarm.</li>
                <li>Call the emergency services and provide them with detailed information about the situation.</li>
                <li>If it's safe, use a fire extinguisher to contain small fires, but do not attempt to fight large or spreading fires.</li>
            </ul>

            <h2>Evacuation Procedures</h2>
            <p>Evacuating safely is paramount during a fire. Follow these steps:</p>
            <ul>
                <li>Follow your fire escape plan and head towards the nearest safe exit.</li>
                <li>If smoke is present, stay low to the ground to avoid inhalation and move quickly to an exit.</li>
                <li>Never use elevators during a fire—use stairways instead.</li>
                <li>Once you're out, move away from the building and go to your family's predetermined meeting spot.</li>
            </ul>

            <h2>Wildfire Specifics</h2>
            <p>If you're dealing with a wildfire, additional precautions are necessary:</p>
            <ul>
                <li>Stay informed through local media and obey any evacuation orders from authorities immediately.</li>
                <li>Prepare your home by removing flammable materials from around the house if time permits.</li>
                <li>Wear protective clothing, including long pants, a long-sleeved shirt, and masks to protect against smoke inhalation.</li>
            </ul>

            <h2 id="resources">Additional Resources</h2>
            <Card className='mb-3'>
                <Card.Body>
                    <Card.Title>Red Cross: Responding to a Fire</Card.Title>
                    <Button variant="primary" href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/fire/responding-to-fire.html" target="_blank">Visit Site</Button>
                </Card.Body>
            </Card>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>Ready.gov: Wildfires</Card.Title>
                    <Button variant="primary" href="https://www.ready.gov/wildfires" target="_blank">Visit Site</Button>
                </Card.Body>
            </Card>
            <Card className="mb-5">
                <Card.Body>
                    <Card.Title>Environmental Protection Agency: Wildfires</Card.Title>
                    <Button variant="primary" href="https://www.epa.gov/natural-disasters/wildfires" target="_blank">Visit Site</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
