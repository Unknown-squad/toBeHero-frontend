import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

const CoursePayment = ({ details, location, history }) => {
  const [show, setShow] = useState(false);

  const mentorLogin = useSelector((state) => state.mentorLogin);
  const { mentorInfo } = mentorLogin;
  const guardianLogin = useSelector((state) => state.guardianLogin);
  const { guardianInfo } = guardianLogin;
  const checkoutHandler = () => {
    history.push(`/login/guardian?redirect=/guardian/checkout/${details._id}`);
  };
  console.log(details.mentorId.isAvailable);
  return (
    <div className="col-12">
      <div className="purchase-container">
        <div className="service-details">
          <div>
            <div>
              <p>
                For <span>{details.price} EGP</span> your child will learn:-
              </p>
            </div>
            <ul>
              {details.topicsList.map((topic, index) => (
                <li key={index}>
                  <p>{topic}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="service-purchase-btns flex-column alin-itms-cntr">
          {mentorInfo ? null : guardianInfo && details.mentorId.isAvailable ? (
            <>
              <div className="service-purchase">
                <button
                  className="btn btn-purple-500"
                  onClick={checkoutHandler}
                >
                  Checkout ({details.price} EGP)
                </button>
              </div>
              <div>
                <p>or</p>
              </div>
              <div className="service-contact">
                <button
                  className="btn btn-purple-200"
                  onClick={() => setShow(!show)}
                  style={show ? { display: "none" } : { cursor: "pointer" }}
                >
                  Contact the mentor
                </button>
                {show && (
                  <button
                    className="btn btn-purple-200"
                    onClick={() => setShow(!show)}
                    style={{ cursor: "pointer" }}
                  >
                    {details &&
                      details.mentorId &&
                      details.mentorId.countryCode}
                    {details && details.mentorId && details.mentorId.phone}
                  </button>
                )}
              </div>
            </>
          ) : guardianInfo && details.mentorId.isAvailable === false ? (
            <>
              <div className="service-purchase">
                <button
                  className="btn btn-purple-500"
                  onClick={checkoutHandler}
                  disabled
                >
                  Mentor not available
                </button>
              </div>
              <div>
                <p>or</p>
              </div>
              <div className="service-contact">
                <button
                  className="btn btn-purple-200"
                  onClick={() => setShow(!show)}
                  style={show ? { display: "none" } : { cursor: "pointer" }}
                >
                  Contact the mentor
                </button>
                {show && (
                  <button
                    className="btn btn-purple-200"
                    onClick={() => setShow(!show)}
                    style={{ cursor: "pointer" }}
                  >
                    {details &&
                      details.mentorId &&
                      details.mentorId.countryCode}
                    {details && details.mentorId && details.mentorId.phone}
                  </button>
                )}
              </div>
            </>
          ) : details.mentorId.isAvailable === false ? (
            <div className="service-purchase">
              <button
                className="btn btn-purple-500"
                onClick={checkoutHandler}
                disabled
              >
                Mentor not available
              </button>
            </div>
          ) : (
            <div className="service-purchase">
              <button className="btn btn-purple-500" onClick={checkoutHandler}>
                Checkout ({details.price} EGP)
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursePayment;
