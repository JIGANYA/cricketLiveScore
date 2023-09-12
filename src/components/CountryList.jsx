import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function CountryList(props) {
    const [country, setCountry] = useState([])
    useEffect(() => {
        axios.get("https://api.cricapi.com/v1/countries?apikey=12b387cd-2a88-49ef-8814-c3e3162cc3dc&offset=0").then((res) => {
            console.log(res.data.data)
            setCountry(res.data.data)
        })

    }, [])
    return (

        <div>
            <table style={{border:"1px solid black",width:"100%"}}>
                {country.map((value) => {
                    return (
                        <>
                        <tr>
                            <td style={{border:"1px solid black"}}><img src={value.genericFlag} style={{ width: "20px", height: "20px" }} /></td>
                            <td style={{border:"1px solid black"}}> <div>{value.id}</div>
                            </td>
                            <td style={{border:"1px solid black"}}>
                            <div>{value.name}</div>
                            </td>
                        </tr>
                            
                           
                        </>

                    );
                })}
            </table>
        </div>
    )
}
