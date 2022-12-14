import React from "react";
import '../styles/pdf.css'
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function Pdf() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return(
        <>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.7.570/es5/build/pdf.worker.min.js">
        <div style={{ height: "210px", width:"550px"}} className="pdf-cont">
        <Viewer
          fileUrl='/Binarcarrental.pdf'
          plugins={[defaultLayoutPluginInstance]}
          className="viewer"
        />
        </div>
      </Worker>
        
        </>
    )
}