import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function LiveScore() {
    const date = new Date();


    const [score,setScore]=useState([])
    useEffect(()=>{
        axios.get("https://api.cricapi.com/v1/currentMatches?apikey=45fd0d95-b65b-4b37-9319-f11dbf59dbdd&offset=0").then((res)=>{
            console.log(res)
            setScore(res.data.data)
        }).catch((err)=>{
            console.log("error")
        })
    },[])
  return (
    <>
    {/* <table> */}
        {score.map((value,index,array)=>{
            return(

                hii
                // <tr>
                //     <td><img src={value.t1img}/></td>
                //     <td>{value.t1}</td>
                //     <td><img src={value.t2img}/></td>
                //     <td>{value.t2}</td>
                //     <td>{value.matchType}</td>
                //     <td>{date.getDate()}</td>
                //     <td>{date.getMonth()}</td>
                //     <td>{date.getFullYear()}</td>
                //     <td>{value.status}</td>
                // </tr>
            )
        })}
    {/* </table> */}
    </>
  )
}
