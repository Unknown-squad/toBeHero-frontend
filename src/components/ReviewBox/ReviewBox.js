import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewReviewActions } from "../../actions/addNewReviewActions";
import starRating from "../../images/star-rating.svg";
import ErrorMessage from "../../components/ErrorMessage";
import SuccessMessage from "../../components/SuccessMessage";

const ReviewBox = ({ courseId }) => {
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(1);

  const addNewReview = useSelector((state) => state.addNewReview);
  const { loading, error, success, data } = addNewReview;
  const dispatch = useDispatch();
  useEffect(() => {
    if (success) {
      //   alert("Review Submitted!");
      setRate(1);
      setDescription("");
    }
  }, [success]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addNewReviewActions({ courseId, rate, description }));
  };
  return (
    <>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {success && (
        <SuccessMessage>your review is submitted successfully</SuccessMessage>
      )}
      <div className="rating-box">
        <form className="rating-write-reviwe" onSubmit={submitHandler}>
          <div className="form-rating-reviwe">
            <div className="input-field write-reviwe">
              <label htmlFor="write-reviwe">Write Review</label>
              <br />
              <textarea
                name=""
                id="write-reviwe"
                cols="70"
                rows="7"
                placeholder="Please add a review"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="input-field">
              <p>Rating</p>

              <div className="rating">
                <input
                  type="radio"
                  id="rat5"
                  name="radio-group"
                  value={5}
                  onChange={(e) => setRate(e.target.value)}
                />
                <label htmlFor="rat5">
                  5 <img src={starRating} alt="" />
                </label>
              </div>
              <div className="rating">
                <input
                  type="radio"
                  id="rat4"
                  name="radio-group"
                  value={4}
                  onChange={(e) => setRate(e.target.value)}
                />
                <label htmlFor="rat4">
                  4 <img src={starRating} alt="" />
                </label>
              </div>
              <div className="rating">
                <input
                  type="radio"
                  id="rat3"
                  name="radio-group"
                  value={3}
                  onChange={(e) => setRate(e.target.value)}
                />
                <label htmlFor="rat3">
                  3 <img src={starRating} alt="" />
                </label>
              </div>
              <div className="rating">
                <input
                  type="radio"
                  id="rat2"
                  name="radio-group"
                  value={2}
                  onChange={(e) => setRate(e.target.value)}
                />
                <label htmlFor="rat2">
                  2 <img src={starRating} alt="" />
                </label>
              </div>
              <div className="rating">
                <input
                  type="radio"
                  id="rat1"
                  name="radio-group"
                  value={1}
                  defaultChecked={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
                <label htmlFor="rat1" className="rat-1">
                  1 <img src={starRating} alt="" />
                </label>
              </div>
            </div>
          </div>
          <div className="input-field">
            <button className="btn btn-purple-400" type="submit">
              Write Review
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ReviewBox;
