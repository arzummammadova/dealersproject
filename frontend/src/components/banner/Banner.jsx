import React from 'react'
import Title from '../title/Title'
import './banner.scss'
const Banner = () => {
  return (
    <>
    <div className="row bannerflex">
        <div className="col-lg-7 col-12 banner">
            <figure>
                <img src="https://preview.colorlib.com/theme/dealers/images/model_woman_1.png" alt="" />
            </figure>
        </div>

        <div className=" col-lg-5 col-12  ">
          <Title  style={{textAlign:"center"}}         >
            <div className="title">
            <div className="title-desc">
            #New Summer Collection 2019
            </div>
            <div style={{fontSize:"45px"}} className="title-header">
                <h2>Jaket</h2>
            </div>
            <button>Shop now</button>
            </div>
            
           
          </Title>

        </div>
    </div>
      
    </>
  )
}

export default Banner
