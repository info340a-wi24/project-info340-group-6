import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

export default function Prepare() {
    return (
        <div className='container mb-3'>
            <h2>Overview</h2>
            <p>Understanding the importance of fire preparedness is crucial for the safety and security of individuals and communities. This guide provides a comprehensive look at how to prepare for a fire.</p>

            <h2>Fire Prevention</h2>
            <p>Fire prevention is the first step in preparing for a fire. This involves identifying potential fire hazards in your home, in the wild, and anywhere else, and taking measures to mitigate them. Common prevention tips include:</p>
            <ul>
                <li>Install smoke alarms in key areas and test them monthly.</li>
                <li>Keep flammable materials away from heat sources.</li>
                <li>Ensure electrical systems and appliances are in good working order.</li>
                <li>Follow fire restrictions and bans in your area.</li>
                <li>Properly dispose of cigarette butts and matches in designated containers.</li>
                <li>Report any signs of smoke or fire immediately to authorities.</li>
            </ul>

            <h2>Emergency Preparedness Kit</h2>
            <p>An emergency kit is a critical component of fire preparedness. Your kit should be easily accessible and include items such as:</p>
            <ul>
                <li>Water and non-perishable food supplies.</li>
                <li>First aid supplies.</li>
                <li>Flashlights and extra batteries.</li>
                <li>A whistle to signal for help.</li>
                <li>Copies of important documents.</li>
                <li>Additional items based on your family's specific needs.</li>
            </ul>

            <h2>Fire Escape Plan</h2>
            <p>Having a fire escape plan is essential for quickly and safely evacuating in the event of a fire. Your plan should include:</p>
            <ul>
                <li>Identifying two exits from every room.</li>
                <li>Establishing a family meeting spot.</li>
                <li>Practicing your escape plan regularly with all household members.</li>
                <li>Keeping escape routes clear of obstructions.</li>
            </ul>

            <h2 id="resources">Additional Resources</h2>
            <Card className='mb-3'>
                <Card.Body>
                    <Card.Title>Red Cross: Fire Preparedness</Card.Title>
                    <Button variant="primary" href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/fire.html" target="_blank">Visit Site</Button>
                </Card.Body>
            </Card>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>CDC: Wildfires</Card.Title>
                    <Button variant="primary" href="https://www.cdc.gov/disasters/wildfires/index.html" target="_blank">Visit Site</Button>
                </Card.Body>
            </Card>
            <Card className="mb-5">
                <Card.Body>
                    <Card.Title>NFPA: Wildfire Preparedness</Card.Title>
                    <Button variant="primary" href="https://www.nfpa.org/Public-Education/Fire-causes-and-risks/Wildfire/Wildfire-safety-tips" target="_blank">Visit Site</Button>
                </Card.Body>
            </Card>


        </ div>
    );
}
