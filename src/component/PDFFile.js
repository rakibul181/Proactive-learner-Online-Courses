import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React from 'react';
import { FaPrint } from 'react-icons/fa';
 
 const PDFFile = ({pageID, pageName}) => {
    const dowenloadDoc = ()=>{
        const input = document.getElementById(pageID)
        html2canvas(input).then((canvas)=>{
            window.scroll({
                scrollX: 0,
                scrollY: -window.scrollY
            })
            // document.body.appendChild(canvas);
            const imgData =canvas.toDataURL('image/png')
            const pdf = new jsPDF({
                orientation: 'p',
                unit: 'mm',
                format: 'a4',
                putOnlyUsedFonts:true,
                floatPrecision: 16 // or "smart", default is 16
               })
            pdf.addImage(imgData,'JPEG',0,0,200,300)
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