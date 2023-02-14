import { useCallback } from "react"
import { countryCodes } from "../data/countryCodes"


export const CountrySelector = ({onChange}) => {
    
    const handleCountryChange = useCallback((event) => {
        const value = event.target.value;
        const countryData = countryCodes.find(x => x.code ===value);
        onChange(countryData); 
    },[onChange])
    
    return <select onChange={handleCountryChange}>
        {countryCodes.map(country => {
            return <option value={country.code}>{country.name}</option>
        } ) }
    </select>


}