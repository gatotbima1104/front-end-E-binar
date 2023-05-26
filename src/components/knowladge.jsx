import React from "react";
import about from "../asset/about.png";

const Knowme = () => {
  return (
    <div
      id="knowMe"
      className="d-flex align-items-center justify-content-center"
    >
      <div className="row">
        <div className="col-md-5">
          <img src={about} alt="" className="foto-about" />
        </div>
        <div className="col-md-7">
          <h1 className="text-white text-about mt-5 text-center">ventUS</h1>
          <p className="text-white text-center mt-5 p-about">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            tempora facilis ipsa, ipsam assumenda impedit perferendis iusto
            provident tenetur ducimus officia sit! Repudiandae nam sapiente qui.
            Excepturi a laudantium aut! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Provident commodi ducimus nostrum quas,
            dignissimos adipisci non est enim, accusamus numquam doloribus
            magnam. Harum minus . Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Quisquam consectetur pariatur excepturi
            reprehenderit a quos ea iusto vitae ipsa quidem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Knowme;
