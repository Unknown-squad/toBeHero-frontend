import React from "react";
import GuardianHomeHeader from "../../components/GuardianHomeHeader";
import Footer from "../../components/Footer";

import "./GuardianCheckoutScreen.scss";
const GuardianCheckoutScreen = () => {
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
              <form action="">
                <div className="select-child">
                  <div className="option-child">
                    <input
                      type="radio"
                      id="child-1"
                      name="radio-group"
                      checked
                    />
                    <label htmlFor="child-1">
                      <img
                        src="images/someone.svg"
                        alt=""
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://img.icons8.com/ultraviolet/40/000000/user.png";
                        }}
                      />{" "}
                      youssef
                    </label>
                  </div>
                  <div className="option-child">
                    <input
                      type="radio"
                      id="child-2"
                      name="radio-group"
                      checked
                    />
                    <label htmlFor="child-2">
                      <img
                        src="images/someone.svg"
                        alt=""
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://img.icons8.com/ultraviolet/40/000000/user.png";
                        }}
                      />{" "}
                      youssef
                    </label>
                  </div>
                  <div className="add-new">
                    <img src="images/add-new.svg" alt="" />
                    <span>Add new</span>
                  </div>
                </div>
                <h6>Credit Card Info</h6>
                <div className="name-card">
                  <div className="input-field w-input-1">
                    <label htmlFor="name">Name on card</label>
                    <br />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder=""
                      required
                      value=""
                    />
                  </div>
                  <div className="input-field w-input-2">
                    <label htmlFor="name-cvv">CVV Number</label>
                    <br />
                    <input
                      type="text"
                      id="name-cvv"
                      name="name"
                      placeholder=""
                      required
                      value=""
                    />
                  </div>
                </div>
                <div className="number-card">
                  <div className="input-field w-input-1">
                    <label htmlFor="name">Card number</label>
                    <br />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder=""
                      required
                      value=""
                    />
                  </div>
                  <div className="exp-month">
                    <label htmlFor="ex-month">EXP. Month</label>
                    <select name="exp-month" id="ex-month">
                      <option selected disabled></option>
                      <option value="1">Programming</option>
                      <option value="2">Programming</option>
                      <option value="3">Programming</option>
                    </select>
                  </div>
                  <div className="exp-year">
                    <label htmlFor="ex-month">EXP. Year</label>
                    <select name="exp-month" id="ex-month">
                      <option selected disabled></option>
                      <option value="1">Programming</option>
                      <option value="2">Programming</option>
                      <option value="3">Programming</option>
                    </select>
                  </div>
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
