import React from "react";

const ReviewBox = () => {
  return (
    <div className="rating-box">
      <form action="" className="rating-write-reviwe">
        <div className="form-rating-reviwe">
          <div className="input-field write-reviwe">
            <label htmlFor="write-reviwe">Write Reviwe</label>
            <br />
            <textarea
              name=""
              id="write-reviwe"
              cols="70"
              rows="7"
              placeholder=""
            ></textarea>
          </div>
          <div className="input-field">
            <p>Rating</p>
            <div className="rating">
              <input type="radio" id="rat5" name="radio-group" checked />
              <label htmlFor="rat5">
                5 <img src="images/star-rating.svg" alt="" />
              </label>
            </div>
            <div className="rating">
              <input type="radio" id="rat4" name="radio-group" checked />
              <label htmlFor="rat4">
                4 <img src="images/star-rating.svg" alt="" />
              </label>
            </div>
            <div className="rating">
              <input type="radio" id="rat3" name="radio-group" checked />
              <label htmlFor="rat3">
                3 <img src="images/star-rating.svg" alt="" />
              </label>
            </div>
            <div className="rating">
              <input type="radio" id="rat2" name="radio-group" checked />
              <label htmlFor="rat2">
                2 <img src="images/star-rating.svg" alt="" />
              </label>
            </div>
            <div className="rating">
              <input type="radio" id="rat1" name="radio-group" checked />
              <label htmlFor="rat1" className="rat-1">
                1 <img src="images/star-rating.svg" alt="" />
              </label>
            </div>
          </div>
        </div>
        <div className="input-field">
          <button className="btn btn-purple-400">Write Reviwe</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewBox;
