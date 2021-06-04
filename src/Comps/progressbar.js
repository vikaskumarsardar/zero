import React, { useEffect, useState } from 'react'
import useStorage from '../Hooks/useStorage'
export default function Progressbar({file,setFile}) {
    const [kui,setKui]=useState(0);
const {url,progress} =useStorage(file);

useEffect(()=>{
    if(url){
        setFile(null);
    }
},[url])
    return (
        <>
        <div className='progressbar' style={{width:progress+'%',height:'14px',marginTop:"5px",textAlign:'center',backgroundColor:"yellow"}}>
        </div>
        </>

    )
}
