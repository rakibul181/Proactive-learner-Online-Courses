import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React from 'react';
import { FaPrint } from 'react-icons/fa';
 
 const PDFFile = ({pageID, pageName}) => {
    const dowenloadDoc = ()=>{
        const input = document.getElementById(pageID)
        html2canvas(input).then((canvas)=>{
            const imgData =canvas.toDataURL('image/png')
            const pdf = new jsPDF('l','pt','a4')
            pdf.addImage(imgData,'JPEG',0, 0)
            pdf.save(pageName)
        })
    }

    return (
        <div>
            <button onClick={dowenloadDoc}><FaPrint></FaPrint></button>
        </div>
    );
 };
 
 export default PDFFile;