import React from "react";

function Rentbanner() {
    return(
        <>
        <div className="rentbanner-cont">
            <div className="rentbanner-text">
            <p id="renttitle">Sewa Mobil di (Lokasimu) Sekarang</p>
            <p id="rentdesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis hic assumenda exercitationem quo excepturi autem!
            </p>
            </div>
            <a href="/selectcar"><button id="rentBtn">Mulai Sewa Mobil</button></a>
        </div>
        </>
    )
}

export default Rentbanner;