import React from 'react'

export default function Card(props) {
  return (
    <>
    <div className='cardContainer'>
      <div className='header'>
        <div style={{fontSize:"14px", color:"#666666",padding:"0px 0px 4px 0px"}}>{props.value.name}</div>
        <div style={{fontSize:"14px", color:"#666666"}}>{props.value.date}</div>
      </div>

      <div className='team'>
        {props.value.teamInfo.map((team,index)=>{

          return(
            <div className='team1Container'>
            <div className='team1'><img src={team.img} style={{ width: "20px", height: "20px", padding:"0px 0px 8px 11px" }} />
              <div style={{color:"#111111",fontWeight:300}}>{props.value.name}</div>
            </div>
            <div style={{marginLeft:"50px"}}>{props.value.score[index]?props.value.score[index].r:"--"}/{props.value.score[index]?props.value.score[index].w:"--"} ( {props.value.score[index]?props.value.score[index].o:"--"} )</div>
  
          </div>
          )
        })}
      </div>

<div style={{height:"5px"}}></div>
        <div>{props.value.status}</div>
        </div>
      

    </>


  )
}
