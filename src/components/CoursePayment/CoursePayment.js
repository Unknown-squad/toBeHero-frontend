import React from "react";

const CoursePayment = ({ details }) => {
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
          <div className="service-purchase">
            <button className="btn btn-purple-500">continue(10%)</button>
          </div>
          <div>
            <p>or</p>
          </div>
          <div className="service-contact">
            <button className="btn btn-purple-200">Contact the mentor</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePayment;
