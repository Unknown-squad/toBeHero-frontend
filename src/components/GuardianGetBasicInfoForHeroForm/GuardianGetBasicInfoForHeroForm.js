import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import addPicture from "../../images/add-picture.svg";
import someoneChild from "../../images/someone-child.svg";
import uploadPicture from "../../images/upload-picture.svg";
import { useDispatch, useSelector } from "react-redux";
import { getBasicInfoForChildActions } from "../../actions/getBasicInfoForChildActions";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";
import SuccessMessage from "../SuccessMessage";
import { UPDATE_BASIC_INFO_FOR_CHILD_RESET } from "../../constants/updateBasicInfoForChildConstants";
import { updateBasicInfoForChildActions } from "../../actions/updateBasicInfoForChildActions";
import axios from "axios";

const GuardianGetBasicInfoForHeroForm = ({ match }) => {
  const childId = match.params.childId;
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState("");
  const [uploading, setUploading] = useState(false);

  const getBasicInfoForChild = useSelector(
    (state) => state.getBasicInfoForChild
  );
  const { loading, error, hero } = getBasicInfoForChild;

  const updateBasicInfoForChild = useSelector(
    (state) => state.updateBasicInfoForChild
  );
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    data,
    success,
  } = updateBasicInfoForChild;

  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      dispatch({ type: UPDATE_BASIC_INFO_FOR_CHILD_RESET });
    } else {
      if (!hero?.userName || hero?._id !== childId) {
        dispatch(getBasicInfoForChildActions(childId));
      } else {
        setFullName(hero.fullName);
        setUserName(hero.userName);
        setBirthDate(new Date(hero.birthDate).toLocaleDateString());
        setPicture(hero.picture);
      }
    }
  }, [dispatch, childId, hero, success]);

  // const uploadFileHandler = async (e) => {
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append("image", file);
  //   setUploading(true);

  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     };

  //     const { data } = await axios.post("/api/upload", formData, config);

  //     setPicture(data);
  //     setUploading(false);
  //   } catch (error) {
  //     console.error(error);
  //     setUploading(false);
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateBasicInfoForChildActions({
        childId: childId,
        fullName,
        userName,
        password,
        birthDate,
        picture,
      })
    );
  };

  return (
    <>
      {loadingUpdate && <Loader></Loader>}
      {errorUpdate && <ErrorMessage>{errorUpdate}</ErrorMessage>}
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <>
          <form className="basic-info-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="input-field">
                  <label htmlFor="name">Child name</label>
                  <br />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="username">Child username</label>
                  <br />

                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    required
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="password">Password*</label>
                  <br />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="input-field">
                  <label htmlFor="Birthdate">Birthdate*</label>
                  <br />
                  <input
                    type="text"
                    id="Birthdate"
                    name="birthdate"
                    className="Birthdate-mentor"
                    placeholder="Enter your Birthdate"
                    required
                    value={birthDate}
                    onChange={(e) => {
                      setBirthDate(e.target.value);
                    }}
                  />
                </div>
                <div className="upload-picture">
                  <div className="img-back">
                    {/* <input
                      type="text"
                      placeholder="Enter image url"
                      value={picture}
                      onChange={(e) => {
                        setPicture(e.target.value);
                      }}
                    />
                    <label htmlFor="img-file"></label>
                    <input
                      type="file"
                      id="img-file"
                      onChange={uploadFileHandler}
                    /> */}
                    <img className="img-up" src={uploadPicture} alt="" />
                    <img className="icon-up" src={addPicture} alt="" />
                  </div>
                  <div className="img-content">
                    <Link to="">
                      <i className="fas fa-camera"></i>
                      upload new picture
                    </Link>
                    {/* {uploading && <Loader />} */}
                    <button className="btn btn-purple-400">save</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="create-new">
              <button className="btn btn-purple-400" type="submit">
                Save changes
              </button>
            </div>
          </form>
          <div className="someone-child">
            <img src={someoneChild} alt="" />
          </div>
        </>
      )}
    </>
  );
};

export default GuardianGetBasicInfoForHeroForm;
