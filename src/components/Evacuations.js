import React from 'react';

export default function Evacuations() {
  return (
    <div>
      <section className="center-box">
        <h2>Evacuation Level 1</h2>
        <ul>
          <li>Stay alert and aware of nearby fire conditions</li>
          <li>Check often for updates through services like Firespotter!</li>
          <li>Make sure you can locate important documents, and have a medica kit available</li>
        </ul>
        <h2>Evacuation Level 2</h2>
        <ul>
          <li>Things are heating up! Begin preparing to leave</li>
          <li>Begin packing up necessities and make sure vehicles are fueled</li>
          <li>Make sure your family has an evacuation plan</li>
          <li>Keep vigilant watch over fire updates</li>
        </ul>
        <h2>Evacuation Level 3</h2>
        <ul>
          <li>Leave the area quickly</li>
          <li>Do no wait for further evacuation instructions, follow designated routes if applicable</li>
        </ul>
      </section>
    </div>
  );
}