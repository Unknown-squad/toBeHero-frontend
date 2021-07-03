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
import Meta from "../../components/Meta";
const GuardianCheckoutScreen = ({ match }) => {
  const [childId, setChildId] = useState("");
  const courseId = match.params.courseId;

  const getCourseDataForCheckout = useSelector(
    (state) => state.getCourseDataForCheckout
  );
  const { loading, error, data } = getCourseDataForCheckout;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCourseDataForCheckoutActions(courseId));
    // console.log(data);
  }, [dispatch, courseId]);
  return (
    <>
      <Meta title="Guardian | Checkout Payment"></Meta>
      <GuardianHomeHeader></GuardianHomeHeader>
      <section className="hr-section-26">
        <div className="container">
          <div className="checkout-card">
            <div className="credit-card-info">
              <h4 className="course">
                <span> Course: </span>
                {data && data.course && data.course.title}
              </h4>
              <p style={{ color: "#8C61FF" }}>Please select one Child</p>
              <form>
                {loading ? (
                  <Loader></Loader>
                ) : (
                  <div className="select-child">
                    {data &&
                      data.children &&
                      data.children.map((child, i) => (
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
                  price={data && data.course && data.course.price}
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
              <div className="price">
                {data && data.course && data.course.price} EGP
              </div>
              <div className="total-price">
                tolal
                <span>{data && data.course && data.course.price} EGP</span>
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
