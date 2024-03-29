import React, {useEffect, useState} from 'react'
import { getZipCode, getGeocode, getDetails } from 'use-places-autocomplete'
import AutoComplete from 'react-google-autocomplete';


function PlacesAutoComplete({ onPlaceSelect , zipCode, address }) {

    console.log("localStorage.getItem", localStorage.getItem("your_street_name"))
    // useEffect(()=> {
    //     if(localStorage.getItem("your_street_name") == null){
    //         localStorage.setItem("your_zip", '');
    //         localStorage.setItem("your_street_name",'')
    //     }
     
    // },[])

    
    const handlePlaceSelected = (data) => {
       
        if (data.place_id) {
            getGeocode({
                placeId: data.place_id,
            }).then((result) => {
                const city = getCity(result[0]?.address_components);
                console.log("result------->", result[0].formatted_address)
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
            // placeholder={`${address && zipCode}  ${zipCode,address} : "Add Location" `}
            // value = {address ? `${zipCode},${address}}` : ""}
           placeholder={`please select your address`}
           defaultValue={`${localStorage.getItem('your_zip')} ${localStorage.getItem('your_street_name')}`}
           inputAutocompleteValue={`${zipCode}, ${address}`}
            className="block   w-full border-0 outline-none   py-3 text-base   sm:flex-1"
            apiKey='AIzaSyBwhHw0I3SUNIIMq0HaWkIx8BSbmHjooeA'
            options={{
                types: [],
            }}
            onPlaceSelected={handlePlaceSelected}
        />
    )
}

export default PlacesAutoComplete
