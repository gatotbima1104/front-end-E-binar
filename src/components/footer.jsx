import React from "react";
import { Form } from "react-bootstrap";
import fb from "../asset/fb.png";
import ig from "../asset/ig.png";
import tw from "../asset/tw.png";

const Footer = () => {
  return (
    <div
      id="footer"
      className="d-flex justify-content-center border align-items-center"
    >
      <div className="container-fluid">
        <div className="row pb-4 mt-3 ">
          <div className="col-md-7 footer-border pb-4">
            <h2 className="card-price my-3">Follow us</h2>
            <div className="row">
              <ul className="d-inline">
                <li className="footer-icon me-2">
                  <a href="/fb">
                    <img src={fb} alt="" />
                  </a>
                </li>
                <li className="footer-icon me-2">
                  <a href="/tw">
                    <img src={tw} alt="" />
                  </a>
                </li>
                <li className="footer-icon me-2">
                  <a href="/ig">
                    <img src={ig} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5 ps-4">
            <h2 className="card-price my-3">Subscribe</h2>
            <Form>
              <input
                type="text"
                placeholder="Enter your email address"
                className="footer-form"
              />
              <button className="footer-btn jelajah fw-bold">Subscribe</button>
            </Form>
          </div>
        </div>
        <div className="row border text-footer text-center pt-5">
          <div className="row d-inline mb-5">
            <p className="d-inline footer-p">Privacy Policy</p>
            <p className="d-inline footer-p">Terms of Service</p>
            <p className="d-inline footer-p">Sales and Refund</p>
            <p className="d-inline footer-p">Legal</p>
            <p className="d-inline footer-p">Site Map</p>
          </div>
          <p className="last-p"> © 2023 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
