import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonDish = () => {
  return (
    <div  className="col-md-4">
      <div style={{ boxShadow: "2px 8px 8px #00000010" }} className="dish">
        <Skeleton width={"100%"} height={200} style={{ borderRadius:'30px 30px 0px 0px'}} />
        <div className="mt-4 d-flex justify-content-between align-content-center">
          <p className="">
            <Skeleton width={80} />
          </p>
          <p>
            <Skeleton width={50} />
          </p>
        </div>
        <p className="text-left">
          <Skeleton />
        </p>
        <button className="bg-light">
          <Skeleton />
        </button>
      </div>
    </div>
  );
};
export default SkeletonDish;
