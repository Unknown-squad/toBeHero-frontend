import React from "react";

const SubscriptionAppointmentsForChild = () => {
  return (
    <div className="appointment-control-item live-active">
      {/* <!-- add className live-active to toggle item border and button --> */}
      <div className="appointment-sub-item appointment-date">
        <p>
          <span>Wed</span> <span>22 Mar</span>
        </p>
      </div>
      <div className="appointment-sub-item appointment-time">
        <p>03 PM</p>
      </div>
      <div className="appointment-sub-item appointment-title">
        <p>Appointment Title</p>
      </div>
      <div className="appointment-sub-item appointment-button active">
        <div className="guardian-live-btn ">
          <button>
            live now <span></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionAppointmentsForChild;
