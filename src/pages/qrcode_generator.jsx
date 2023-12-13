import QRcode from "react-qr-code";
import React, { useState } from "react";
import html2canvas from 'html2canvas'; 
import jsPDF from 'jspdf';
import './qrcode.css';

function Qrcode() {
  const [data, setData] = useState('');
  const [value, setvalue] = useState('');
  const [show, setshow] = useState('');
  
  function handleadd(){
    setData(value);
    setvalue('');
    setshow(1);
  };

  function handleclear(){
    setData('');
    setvalue('');
    setshow('');
  };

  const handleprint = () => {
    const input = document.getElementById("divToPrint");
    console.log(input);
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  };


  return (
    <div style={{justifyItems:'center'}}>
        <div className="qrcard" style={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
            <div className="qrcard1">
                <h2 style={{margin:'20px', marginLeft:'40px'}}>Enter the Barcode here</h2>
                <input placeholder="Text here" value={value} onChange={(e) => {setvalue(e.target.value);}}/> 
                <br />
                <br />
                <div style={{display:'flex', justifyContent:'center', gap:'30px'}}>
                    <button onClick={handleadd}>Generate</button>
                    <button onClick={handleclear}>Clear</button>
                </div>
                <p style={{padding:'20px'}}>QR code is a square grid that can easily be readable with digital devices like smartphones.</p>
                <button onClick={handleprint} style={{marginLeft:'270px', marginTop:'10px'}}>Print</button>
            </div>
            <div className="qrcard2">
                <h2 style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:"10px"}}>Generated Barodes</h2>
                  <div className="qrcard3">
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                      {show && 
                        <div id="divToPrint" style={{ marginTop: "2em", paddingLeft:'20px' }}>
                          <QRcode value={data} />
                        </div>
                      }
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Qrcode;


