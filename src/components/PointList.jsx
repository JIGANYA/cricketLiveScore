import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function PointList() {
  const[point,setPoint]=useState([])
  useEffect(()=>{
    axios.get("https://api.cricapi.com/v1/series_points?apikey=12b387cd-2a88-49ef-8814-c3e3162cc3dc&id=b08f7abf-e95c-4b44-b092-edf4529534c2").then((res)=>{
        console.log(res.data.data)
        setPoint(res.data.data)
    })

  },[])
  return (
    <div>
      <table style={{border:"1px solid black",width:"100%"}}>
      {point.map((value)=>{
        return(
          <>
          <tr>
            <td style={{border:"1px solid black"}}><img src={value.img}/></td>
            <td>{value.shortname}</td>
            <td>{value.teamname}</td>
            <td>{value.matches}</td>
            <td>{value.loss}</td>
            <td>{value.nr}</td>
            <td>{value.ties}</td>
            <td>{value.wins}</td>
          </tr>
          </>
        );
      })}
</table>
    </div>
  )
}
