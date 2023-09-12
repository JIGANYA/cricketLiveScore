import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card';
import { Outlet } from 'react-router-dom';


export default function LiveScore() {
    const date = new Date();


    const [score,setScore]=useState([])
    useEffect(()=>{
        axios.get("https://api.cricapi.com/v1/currentMatches?apikey=12b387cd-2a88-49ef-8814-c3e3162cc3dc&offset=0").then((res)=>{
            console.log(res.data.data)
            setScore(res.data.data)
        }).catch((err)=>{
            console.log("error")
        })
    },[])
  return (
    
    <>

    {/* <table> */}
    
    <div className='Card'>
        {score.map((value,index,array)=>{
            return(
                   
                   <Card value={value}/>
               
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
        </div>
        <Outlet/>
    {/* </table> */}
    </>
  )
}
