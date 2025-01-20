import React from 'react'
import './hero.scss'
const Hero = () => {
  return (
    <>
    <section>
        <div className="container">
            <div className="hero">
            <div className="row">
        <div className="col-5">
            <h1>Madewell</h1>
            <p className='desc'>Summer Collection</p>
            <div className="price-text">
                <p className="price">1,499 </p>
            <span>$1,999</span> 
            </div>
            <button className='blue'>SHOP NOW</button>
            <button className='classblue'>SHOP NOW</button>
           

        </div>
        <div className="col-7">

        <figure >
            <img src="https://preview.colorlib.com/theme/dealers/images/new/person_transparent.png" alt="" />
        </figure>
        </div>
    </div>

            </div>
        </div>
    </section>

  
      
    </>
  )
}

export default Hero
