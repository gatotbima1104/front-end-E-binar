import React from 'react'
import category1 from '../asset/category1.png'

const EventDetails = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <img src={category1} alt="" />
          </div>
          <div className="col-md-4">
            <div className="row">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nulla velit doloribus!
            </div>
            <div className="row">
            <time>22-13-2002</time>
            <p>Majelis ulama indonesia</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetails
