import React from "react";

const BalanceMentor = () => {
  return (
    <>
      <div className="dashboard-balance-box">
        <p>Current Balance</p>
        <div className="price">30.00$</div>
      </div>
      <div className="create-new">
        <button className="btn btn-purple-400">withdraw</button>
      </div>
    </>
  );
};

export default BalanceMentor;
