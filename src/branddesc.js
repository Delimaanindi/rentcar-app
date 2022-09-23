import React from 'react';
import Carimage from './carimage.js';

function Branddesc() {
    return(
        <>
        <div className="Branddesc">
            <div id="brand-text">
                <p>Sewa &amp; Rental Mobil Terbaik di Kawasan (Lokasimu)</p>
            </div>
            <div id="textdesc">
                    <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. 
                        Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                </div>
                <Carimage />
        </div>
        </>
    )
}

export default Branddesc;