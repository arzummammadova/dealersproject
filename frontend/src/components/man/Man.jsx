import React from 'react'
import Title from '../title/Title'
// import './collcetions.scss'

const Man = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="man">
                        <div className="row">
                            <div className="col-lg-6  col-12 left">
                                <figure>
                                    <img src="
                    https://preview.colorlib.com/theme/dealers/images/model_5.png" alt="" />
                                </figure>

                            </div>
                            <div className="col-12 col-lg-6">
                                <Title style={{ textAlign: "center" }}         >
                                    <div className="title">
                                        <div className="title-desc">
                                            #New Summer Collection 2019
                                        </div>
                                        <div style={{ fontSize: "45px" }} className="title-header">
                                            <h2>Jaket</h2>
                                        </div>
                                        <button>Shop now</button>
                                    </div>


                                </Title>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Man
