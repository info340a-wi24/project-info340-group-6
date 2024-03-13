import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

export default function AfterFire(props) {
    return (
        <div className='container mb-3'>
            <h2>Overview</h2>
            <p>The aftermath of a fire can be overwhelming, but knowing how to safely navigate the recovery process is crucial. This guide offers steps to take after a fire to ensure your safety and begin the path to recovery.</p>

            <h2>Safety First</h2>
            <p>Before re-entering your home or any affected area, ensure it's safe:</p>
            <ul>
                <li>Wait for the go-ahead from fire services before entering any building affected by fire.</li>
                <li>Wear protective clothing, including gloves and masks, to avoid contact with potentially toxic substances.</li>
                <li>Be aware of structural damage and hazards such as live wires or gas leaks.</li>
            </ul>

            <h2>Assessing and Documenting Damage</h2>
            <p>Documenting the damage thoroughly is essential for insurance claims and rebuilding efforts:</p>
            <ul>
                <li>Take photographs of the damage to your property and belongings.</li>
                <li>Make a detailed list of all damaged or lost items.</li>
                <li>Avoid disposing of any damaged items until they have been documented and assessed by an insurance adjuster.</li>
            </ul>

            <h2>Contacting Your Insurance Company</h2>
            <p>Begin the insurance claim process as soon as possible:</p>
            <ul>
                <li>Contact your insurance company to report the fire and start the claims process.</li>
                <li>Provide your insurer with a comprehensive list of damaged or lost items and any photos or videos of the damage.</li>
                <li>Keep a record of all communications with your insurance company.</li>
            </ul>

            <h2>Cleaning Up</h2>
            <p>Cleaning up after a fire is a daunting task that may require professional services, especially for:</p>
            <ul>
                <li>Removing water used in firefighting efforts, which may lead to mold if not addressed quickly.</li>
                <li>Cleaning soot and smoke damage, which can be hazardous to your health.</li>
                <li>Addressing structural damage safely and effectively.</li>
            </ul>

            <h2 id="resources">Additional Resources</h2>
            <Card className='mb-3'>
                <Card.Body>
                    <Card.Title>FEMA: Returning Home After a Fire</Card.Title>
                    <Button variant="primary" href="https://www.fema.gov/pdf/library/f&web.pdf" target="_blank">Visit Site</Button>
                </Card.Body>
            </Card>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>Red Cross: Recovery After a Fire</Card.Title>
                    <Button variant="primary" href="https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/fire/recovering-emotionally.html" target="_blank">Visit Site</Button>
                </Card.Body>
            </Card>
            <Card className="mb-5">
                <Card.Body>
                    <Card.Title>EPA: Cleaning Up After a Fire</Card.Title>
                    <Button variant="primary" href="https://www.epa.gov/natural-disasters/cleaning-after-disaster" target="_blank">Visit Site</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
