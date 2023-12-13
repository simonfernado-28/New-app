
import React, { useState } from "react";
import { useBarcode } from 'react-barcodes';
import './barcode.css';

export default function Barcodefunction() {
  const [newvalue, setnewvalue] = useState('Barcode')
  const [value, setvalue] = useState('')
  
  const { inputRef } = useBarcode({
    value: newvalue && newvalue,
    options: {
      background: '#ccffff',
    }
  });
  
  const handleAdd = () => {
    if (value !== '') {
      setnewvalue(value)
      setvalue('')
    }
  };
  
  const handlereset = () => {
    setnewvalue('barcode')
  };

  return (
    <div style={{margin:"30px", marginLeft:"100px", display: 'flex', justifyContent: 'center', padding: '10px', border: "2px solid #000"}}>
      <div className="brcard">
        <h1 style={{textAlign:'center', color:"white"}}>React-Barcodes</h1>
        <br/>
        <div style={{justifyContent: 'center' }}>
          <div className="brcard1">
            <input type='text' placeholder="Enter text" value={value} onChange={(e) => setvalue(e.target.value)} />
            <br/>
            <br/>
            <div className="button-container">
              <button onClick={handleAdd} style={{color:"white"}}>Generate</button>
              <button onClick={handlereset} style={{color:"white"}}>Clear</button>
            </div>
          </div>
          <div className="brcard2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg ref={inputRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
