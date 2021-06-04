import React, { useState } from 'react'
import './Modal.css'

export default function Modal({mod,setSetu,setu}) {
        
    console.log(setu);
    
    return (
        <div className={!setu?'i':'modal'} onClick={()=>{setSetu(false)}}>
          <div className='er'>
              
            <img src={mod} alt='saara'/>
            this is the image Modal hrer os be it tyou
            
          </div>
            
        </div>
    )
}
