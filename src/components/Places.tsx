import usePlacesAutocomplete, { getGeocode
, getLatLng } from "use-places-autocomplete";
import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
	ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

type PlacesProps = {
    setPing: (position: google.maps.LatLngLiteral) => void;
}

export default function Places({ setPing }: PlacesProps){
    const {
        ready, 
        value, 
        setValue, 
        suggestions: 
        {status, data}, 
        clearSuggestions
    } = usePlacesAutocomplete();
    
    return <div>Places</div>;
}