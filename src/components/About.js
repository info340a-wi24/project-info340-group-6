import React from "react";

export default function About(props) {
    return (
        <div>
            <h1 className="text-center">About Us</h1>
            <div id="aboutTextAndPhoto">
                <img src="img/WaWildFire.jpg" alt ="Bolt Creek Wildfire, Stevens Pass, 20222"></img>
                <div id="vertBox">
                <p>As temperatures rise and weather patterns become more erratic, the threat of wildfires in Washington State is intensifying with each passing year.
                The impacts of global warming, driven largely by human activities such as the burning of fossil fuels and deforestation,
                are exacerbating the conditions that fuel these devastating blazes.</p>
                <p>
                Washington State has long been susceptible to wildfires, but the changing climate is making the situation increasingly dire.
                Rising temperatures contribute to drier conditions, which in turn create a tinderbox environment ripe for ignition.
                Prolonged droughts, shrinking snowpack even in locations like stevens pass,
                 and earlier snowmelt are all factors that contribute to the increased risk and severity of wildfires.
                 </p>
                 <p>
                 Our solution? Sparkspotter. Sparkspotter is an innovative application designed to provide users with comprehensive tools
                 and resources related to fire safety, updates, and nearby fire threats. It allows users to quickly inform others of threats with
                 posts pre-tagged with the senders location, enables users to search surrounding areas for fire danger through a map interface,
                 and gives provides bountiful resources and news updates surrounding fire acivity.
                </p>
                </div>
            </div>
        </div>
    )
}