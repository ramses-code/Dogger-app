import React from "react";
import CardOwner from "../component/cardOwner";

const CarouselOwner = () => {
  let style1 = {
    overflowX: "scroll",
    overflowY: "white",
    alignItems: "center",
    backgroundColor: "rgba(224, 224, 224, 0.3)",
    height: "25rem",
    paddingLeft: "20px",
    paddingRight: "5px",
    borderRadius: "5px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  };

  return (
    <div className="container-fluid">
      <div className="d-flex flex-row rounded" style={style1}>
        <CardOwner />
        <CardOwner />
        <CardOwner />
        <CardOwner />
      </div>
    </div>
  );
};

export default CarouselOwner;