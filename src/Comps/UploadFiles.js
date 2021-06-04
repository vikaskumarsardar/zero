import React, { useState } from 'react'
import Progressbar from './progressbar';

export default function UploadFiles() {
    const [file,setFile]=useState(null);
    const [error,setError]=useState(null);
    const type=['image/jpeg','image/png']
    const upload=(e)=>{
        let selected=e.target.files[0];
        if(selected && type.includes(selected.type)){
            setFile(selected);
            setError('')
        }
        else{
            setFile(null);
            setError('please select an image File')
        }
        
        
    }
    
    
    return (
        <>
            <form  style={{padding:'10px',marginTop:'10px'}}>

            <label htmlFor='fui' style={{cursor:'pointer'}} >
            <span style={{fontSize:'2.3rem',height:'2px',width:'20px'}}>🚗</span>
            
                <input style={{opacity:'0',position:'absolute',zIndex:'-1'}} type="file" name='photo' id='fui' onChange={upload} />
                
            </label>
                <div className='outPut'>
                    {error && <h2>{error}</h2>}
                    {file && <h3>{file.name}</h3>}
                    {file && <Progressbar file={file} setFile={setFile} />}
                </div>
            </form>
            
        </>
            
    )
}
