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
const GuardianCheckoutScreen = ({ match }) => {
  const [select, setSelect] = useState();
  const courseId = match.params.courseId;
  const guardianGetChildren = useSelector((state) => state.guardianGetChildren);
  const { loading, error, data } = guardianGetChildren;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(guardianGetChildrenActions());
  }, [dispatch]);
  return (
    <>
      <GuardianHomeHeader></GuardianHomeHeader>
      <section className="hr-section-26">
        <div className="container">
          <div className="checkout-card">
            <div className="credit-card-info">
              <h4 className="course">
                <span> Course:</span>
                Lorem ipsum dolor sit amet, consetetur
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
                          <Link
                            to={`/guardian/checkout/${courseId}/${child._id}`}
                          >
                            <input
                              type="radio"
                              id={`child-${i + 1}`}
                              name="radio-group"
                              value={`child-${i + 1}`}
                              checked={select === `child-${i + 1}`}
                              onChange={(e) => setSelect(e.target.value)}
                            />
                            <label htmlFor={`child-${i + 1}`}>
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
                          </Link>
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

                <h6>Credit Card Info</h6>
                <div className="name-card">
                  <StripeContainer></StripeContainer>
                </div>
                <div className="input-field">
                  <input
                    className="styled-checkbox"
                    id="save-card"
                    type="checkbox"
                    value=""
                  />
                  <label htmlFor="save-card">
                    save card data for future transactions
                  </label>
                </div>
              </form>
            </div>
            <div className="checkout">
              <div className="price">10.00$</div>
              <div className="total-price">
                tolal
                <span>10.0$</span>
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
