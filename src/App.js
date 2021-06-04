import './App.css';
import Title from './Comps/Title'
import UploadFiles from './Comps/UploadFiles';
import Image from './Comps/Image'
import Modal from './Comps/Modal';
import { useState } from 'react';
function App() {
  const [mod,setMod]=useState(null);
  const [setu,setSetu]=useState(false);
  
  return (
    <div className="App">
    <Title/>
    <UploadFiles/>
    <Image setMod={setMod}setSetu={setSetu}/>
    <Modal mod={mod} setu={setu} setSetu={setSetu}/>
    </div>
  );
}

export default App;
