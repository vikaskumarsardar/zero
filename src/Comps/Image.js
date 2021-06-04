import React from 'react'
import Firestores from '../Firebase/Firestore'
import './Image.css'
export default function Image({setMod,setSetu,setu}) {
    const {docs}=Firestores('image');
    // console.log(docs);
    // docs.forEach((t)=>{
    //     console.log(t.url);
    // })
    return (
        <div className='Grid'>
        {
            docs?.map((op,i)=>
                (
                    <div className='wrap' onClick={()=>{ setMod(op.url);setSetu(true)}}   key={op.id}>
                <img src={op.url}  />
                </div>
                )
            )
        }
        
        
        
        </div>
    )
}
