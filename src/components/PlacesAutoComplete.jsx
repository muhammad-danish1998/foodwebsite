import React from 'react'
import { getZipCode, getGeocode, getDetails } from 'use-places-autocomplete'
import AutoComplete from 'react-google-autocomplete';


function PlacesAutoComplete({ onPlaceSelect }) {
    const handlePlaceSelected = (data) => {
        if (data.place_id) {
            getGeocode({
                placeId: data.place_id,
            }).then((result) => {
                const city = getCity(result[0]?.address_components);
                console.log("🚀 ~ file: PlacesAutoComplete.jsx:12 ~ handlePlaceSelected ~ result", result)
                const zipCode = getZipCode(result[0], false);
                onPlaceSelect({
                    ...data,
                    zipCode,
                    city,
                })
            }).catch((e) => console.log(e))
        }
    }
    const getCity = (address_components = []) =>{
        const city = address_components.find((component) => component.types.includes('locality'));
        return city?.long_name || '';
    }
    return (
        <AutoComplete
            className="block w-full border-0 outline-none   py-3 text-base   sm:flex-1"
            apiKey='AIzaSyCZ44yB_6Zqh9VSYqB6zhfPyxtK5hOwsL0'
            options={{
                types: [],
            }}
            onPlaceSelected={handlePlaceSelected}
        />
    )
}

export default PlacesAutoComplete