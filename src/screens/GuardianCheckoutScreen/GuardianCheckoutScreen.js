import React, { useEffect, useState } from "react";
import GuardianHomeHeader from "../../components/GuardianHomeHeader";
import Footer from "../../components/Footer";
import StripeContainer from "../../components/StripeContainer";
import "./GuardianCheckoutScreen.scss";
import { useDispatch, useSelector } from "react-redux";
import { guardianGetChildrenActions } from "../../actions/guardianGetChildrenActions";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";

import addSomeOne from "../../images/add-someone.svg";
import { getCourseDataForCheckoutActions } from "../../actions/getCourseDataForCheckoutActions";
const GuardianCheckoutScreen = ({ match }) => {
  const [childId, setChildId] = useState("");
  const courseId = match.params.courseId;

  const guardianGetChildren = useSelector((state) => state.guardianGetChildren);
  const { loading, error, data } = guardianGetChildren;
  const getCourseDataForCheckout = useSelector(
    (state) => state.getCourseDataForCheckout
  );
  const {
    loading: loadingCourseData,
    error: errorCourseData,
    data: courseData,
  } = getCourseDataForCheckout;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(guardianGetChildrenActions());
    dispatch(getCourseDataForCheckoutActions(courseId));
  }, [dispatch, courseId]);
  return (
    <>
      <GuardianHomeHeader></GuardianHomeHeader>
      <section className="hr-section-26">
        <div className="container">
          <div className="checkout-card">
            <div className="credit-card-info">
              <h4 className="course">
                <span> Course: </span>
                {courseData && courseData.title}
              </h4>
              <form>
                {loading ? (
                  <Loader></Loader>
                ) : (
                  <div className="select-child">
                    {data &&
                      data.items &&
                      data.items.map((child, i) => (
                        <div className="option-child" key={child._id}>
                          <label htmlFor={`child-${i + 1}`}>
                            <input
                              type="radio"
                              id={`child-${i + 1}`}
                              name="radio-group"
                              value={`${child._id}`}
                              checked={childId === `${child._id}`}
                              onChange={(e) => setChildId(e.target.value)}
                            />
                            <img
                              src={child.picture}
                              alt=""
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                  "https://img.icons8.com/ultraviolet/40/000000/user.png";
                              }}
                            />
                            {child.fullName}
                          </label>
                        </div>
                      ))}
                    <Link
                      to={`/guardian/home/addchild?redirect=/guardian/checkout/${courseId}`}
                    >
                      <div className="add-new">
                        <img src={addSomeOne} alt="" />
                        <span>Add new</span>
                      </div>
                    </Link>
                  </div>
                )}
              </form>

              <h6>Credit Card Info</h6>
              <div className="name-card">
                <StripeContainer
                  childId={childId}
                  courseId={courseId}
                  price={courseData && courseData.price}
                ></StripeContainer>
              </div>

              <div className="input-field">
                <label htmlFor="save-card">
                  <input
                    className="styled-checkbox"
                    id="save-card"
                    type="checkbox"
                    value={false}
                  />
                  save card data for future transactions
                </label>
              </div>
            </div>
            <div className="checkout">
              <div className="price">{courseData && courseData.price} EGP</div>
              <div className="total-price">
                tolal
                <span>{courseData && courseData.price} EGP</span>
              </div>
              <div className="btn-checkout">
                <button className="btn btn-purple-400">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default GuardianCheckoutScreen;
