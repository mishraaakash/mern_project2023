import React from "react";

const FunFact = ({ funfacts }) => {
  return (
    <>
      <div className="single-fun">
        <i className={`icofont ${funfacts.icon}`} />
        <div className="content">
          <span className="counter">{funfacts.number}</span>
          <p>{funfacts.caption}</p>
        </div>
      </div>
    </>
  );
};

export default FunFact;
