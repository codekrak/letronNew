import React from "react";



function Photos() {
    return (

        <div className="startTitle">
           <h1>Here is just some of our Work!</h1>

            <div className="carousel">
                        
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="/workspace/letronNew/src/Components/Carousel/exteriorHouseImpact.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="/workspace/letronNew/src/Components/Carousel/IMG-20210402-WA0002.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="/workspace/letronNew/src/Components/Carousel/IMG-20210402-WA0000.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>

            </div>

        </div>

    );
}

export default Photos;