import React from "react";
import about from "../asset/about.png";

const Knowme = () => {
  return (
    <div
      id="knowMe"
      className="d-flex"
    >
      <div className="row">

        <div className="col-md-8">
          <img src={about} alt="" className="foto-about" />
        </div>
        <div className="col-md-4">
           <h1 className="text-white text-about mt-5 text-center">ventUS</h1>
          <p className="text-white my-5 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem <br />
            tempora facilis ipsa, ipsam assumenda impedit pe <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem <br />
            tempora facilis ipsa, ipsam assumenda impedit pe <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem 
            lorem20
            
            
          </p>
          {/* <p className="text-white text-center my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            tempora facilis ipsa, ipsam assumenda impedit pe
          </p> */}
        </div> 
      </div> 
    
      </div>
  );
};

export default Knowme;
