import React from 'react'
import Service from './Service'

const Services = () => {

    const services = {
        service1:{
            heading:"General Treatment",
            caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",
            icon:"icofont icofont-prescription"
        },

        service2:{
            heading:"Teeth Whitening",
            caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",
            icon:"icofont icofont-tooth"
        },

        service3:{
            heading:"Heart Surgery",
            caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",
            icon:"icofont icofont-heart-alt"
        },

        service4:{
            heading:"Ear Treatment",
            caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",
            icon:"icofont icofont-listening"
        },

        service5:{
            heading:"Vision Problems",
            caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",
            icon:"icofont icofont-eye-alt"
        },

        service6:{
            heading:"Blood Transfusion",
            caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.",
            icon:"icofont icofont-blood"
        }
    }
  return (
    <>
      <section className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>We Offer Different Services To Improve Your Health</h2>
                <img src="img/section-img.png" alt="#" />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  praesent aliquet. pretiumts
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service */}
              <Service services={services.service1}/>
              {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service */}
              <Service services={services.service2}/>
              {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service */}
              <Service services={services.service3}/>
              {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service */}
              <Service services={services.service4}/>
              {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service */}
              <Service services={services.service5}/>
              {/* End Single Service */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Service */}
              <Service services={services.service6}/>
              {/* End Single Service */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
