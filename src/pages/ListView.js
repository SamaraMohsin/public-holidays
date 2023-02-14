import { useCallback, useEffect, useState } from "react";
import { CountrySelector } from "../components/CountrySelector";
import { Flag } from "../components/Flag";
import { Panel } from "../components/Panel";

export const ListView = () => {

    // const data = ['GB','PK','KZ']

    const[holidays, setHolidays] = useState([]);

    // const getHolidays = useCallback(() => {

    // },[holidays])

    const [country, setCountry] = useState({
        code: 'AT',
        name: 'Austria'
    });

    useEffect(() => {
        async function loadData() {
            const url = `https://date.nager.at/api/v3/publicholidays/2023/${country.code}`;
            const response = await fetch(url);
            const data = await response.json();
            setHolidays(data)
        }
        loadData();
    }, [country])
    console.log(holidays);

  return(
    <>
    <div>
        <CountrySelector onChange = {(value) => setCountry(value)} />
      <div>
          <h2>{country.name}</h2>
          <Flag countryCode = {country.code} />
      </div>
    </div>

    {/* {data.map(item => <Panel> {item })} */}

    {holidays.map(holiday => { return( <Panel>
            <p>Name: {holiday.name}</p>
            <p>Local Name: {holiday.localName}</p>
            <p>Date: {holiday.date}</p>

        </Panel>)
       
    })}
{/* 
    <Panel >
        Content
    </Panel> */}


  
    </>

  )
 
  
};
