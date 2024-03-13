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

    const handleSelect = async (val: string) => {
        setValue(val, false);
        clearSuggestions();

        const results = await getGeocode({ address: val });
        const { lat, lng } = await getLatLng(results[0]);
        setPing({ lat, lng });
    };
    
    return <Combobox onSelect={() => {}}>
        <ComboboxInput value={value} onChange={e => setValue(e.target.value)}
            disabled={!ready}
            className="combobox-input"
            placeholder="Address"
        />
        <ComboboxPopover>
            <ComboboxList>
                {status ==="OK" && data.map(({place_id, description}) => (
                    <ComboboxOption key={place_id} value={description} />
                ))}    
            </ComboboxList>    
        </ComboboxPopover>    
    </Combobox>;
}