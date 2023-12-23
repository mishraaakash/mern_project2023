import React from 'react'

const Service = ({services}) => {
  return (
    <>
      <div className="single-service">
                <i className={`iconfont ${services.icon}`} />
                <h4>
                  <a href="service-details.html">{services.heading}</a>
                </h4>
                <p>
                  {services.caption}
                </p>
              </div>
    </>
  )
}

export default Service
