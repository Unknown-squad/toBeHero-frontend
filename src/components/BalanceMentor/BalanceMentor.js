import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { mentorBalanceActions } from "../../actions/mentorBalanceActions";
import ErrorMessage from "../ErrorMessage";
import Loader from "../Loader";

const BalanceMentor = () => {
  const formatter = new Intl.NumberFormat("en-EG", {
    // style: "currency",
    // currency: "EGP",
    minimumFractionDigits: 2,
  });
  const mentorBalance = useSelector((state) => state.mentorBalance);
  const { loading, error, data } = mentorBalance;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mentorBalanceActions());
    // console.log(data);
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <>
          <div className="dashboard-balance-box">
            <p>Current Balance</p>
            <div className="price">
              {formatter.format(data.items[0].balance)} EGP
            </div>
          </div>
        </>
      )}

      <div className="create-new">
        <Link to="">
          <button className="btn btn-purple-400">withdraw</button>
        </Link>
      </div>
    </>
  );
};

export default BalanceMentor;
