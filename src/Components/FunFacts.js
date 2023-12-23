import React from "react";
import FunFact from "./FunFact";

const FunFacts = () => {

  const funfacts = {
    funfact1: {
      icon:"icofont icofont-home",
      number:"3468",
      caption:"Hospital Rooms"
    },

    funfact2: {
      icon:"icofont icofont-user-alt-3",
      number:"557",
      caption:"Specialist Doctors"
    },
    funfact3: {
      icon:"icofont-simple-smile",
      number:"4379",
      caption:"Happy Patients"
    },
    funfact4: {
      icon:"icofont icofont-table",
      number:"32",
      caption:"Years of Experience"
    },

  };
  return (
    <>
      <div id="fun-facts" className="fun-facts section overlay">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <FunFact funfacts={funfacts.funfact1}/>
              {/* End Single Fun */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <FunFact funfacts={funfacts.funfact3}/>
              {/* End Single Fun */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <FunFact funfacts={funfacts.funfact4}/>
              {/* End Single Fun */}
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              {/* Start Single Fun */}
              <FunFact funfacts={funfacts.funfact4}/>
              {/* End Single Fun */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunFacts;
