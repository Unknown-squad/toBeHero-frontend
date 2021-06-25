import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

const CoursePayment = ({ details, location, history }) => {
  const mentorLogin = useSelector((state) => state.mentorLogin);
  const { mentorInfo } = mentorLogin;
  const checkoutHandler = () => {
    history.push(`/login/guardian?redirect=/guardian/checkout/${details._id}`);
  };
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
          {mentorInfo ? null : (
            <>
              <div className="service-purchase">
                <button
                  className="btn btn-purple-500"
                  onClick={checkoutHandler}
                >
                  continue(10%)
                </button>
              </div>
              <div>
                <p>or</p>
              </div>
              <div className="service-contact">
                <button className="btn btn-purple-200">
                  Contact the mentor
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursePayment;
