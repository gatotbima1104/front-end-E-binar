import React from "react";
import about from "../asset/about.png";

const Knowme = () => {
  return (
    <div
      id="knowMe"
      className="d-flex"
    >
      <div className="row">

        <div className="col-md-6">
          <img src={about} alt="" className="foto-about" />
        </div>
        <div className="col-md-6">
           <h1 className="text-white text-about mt-5 text-center">ventUS</h1>
          {/* <p className="text-white my-5 text-center">
            Buat dan Temukan Event yang kamu cari <br />
            Promosikan serta buat Eventmu sendiri <br />            
          </p> */}
          <p className="text-white text-center my-5 fs-">
            Buat dan ciptakan eventmu sendiri berdasarkan apa yang kamu inginkan, dan temukan event yang kamu cari.
            Organizir eventmu sendiri dan promosikan eventmu di ventUS.
            <br />
          </p>
        </div> 
      </div> 
    
      </div>
  );
};

export default Knowme;
