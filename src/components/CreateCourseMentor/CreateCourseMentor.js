import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mentorAddNewCourseDashboardActions } from "../../actions/mentorAddNewCourseDashboardActions";
import ErrorMessage from "../ErrorMessage";
import Loader from "../Loader";
import SuccessMessage from "../SuccessMessage";
import { useRouteMatch } from "react-router";
import { useHistory } from "react-router";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
const CreateCourseMentor = () => {
  let history = useHistory();
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("Programming");
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState("");
  const [description, setDescription] = useState("");
  const [topicsList, setTopicsList] = useState([]);
  const [mediaUrls, setMediaUrls] = useState([]);
  const [alert, setAlert] = useState(false);
  // const [fileInputState, setFileInputState] = useState("");
  // const [previewSource, setPreviewSource] = useState("");
  // const [selectedFile, setSelectedFile] = useState("");

  const mentorAddNewCourse = useSelector((state) => state.mentorAddNewCourse);
  const { loading, error, success, mentorCourseAddedInfo } = mentorAddNewCourse;

  const dispatch = useDispatch();

  // useEffect(() => {
  //   // if (mentorCourseAddedInfo) {
  //   //   history.push("/mentor/dashboard/courses");
  //   // }
  // }, [history]);
  const submitHandler = (e) => {
    e.preventDefault();
    const dataArray = new FormData();
    dataArray.append("title", title);
    dataArray.append("price", price);
    dataArray.append("description", description);
    dataArray.append("topicsList", topicsList);
    dataArray.append("genre", genre);
    for (let i = 0; i < mediaUrls.length; i++) {
      dataArray.append("mediaUrls", mediaUrls[i]);
    }
    console.log(mediaUrls);
    dataArray.append("picture", picture);
    dispatch(mentorAddNewCourseDashboardActions(dataArray));
    setTimeout(() => {
      setAlert(true);
    }, 1100);
  };
  console.log(mediaUrls);

  // const uploadFileHandler = async (e) => {
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append("picture", file);
  //   formData.append("body", {
  //     method: "course.put",
  //     params: {
  //       title,
  //       genre,
  //       price,
  //       description,
  //       topicsList,
  //       mediaUrls,
  //     },
  //   });
  //   return formData;
  //   setUploading(true);

  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     };

  //   const { data } = await axios.post("/api/upload", formData, config);

  //     setImage(data);
  //     setUploading(false);
  //   } catch (error) {
  //     console.error(error);
  //     setUploading(false);
  //   }
  // };
  // if (success) {
  //   history.push("/mentor/dashboard/courses");
  // }
  return (
    <>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading ? (
        <Loader></Loader>
      ) : (
        <form
          noValidate
          className="service-info-details"
          onSubmit={submitHandler}
        >
          <div className="row">
            <div className="col-lg-5 pl-0 col-12">
              <div className="serivice-title">
                <div className="input-field">
                  <label htmlFor="serivice-title-input">Service title</label>
                  <br />
                  <input
                    type="text"
                    id="serivice-title-input"
                    name="serivice-title-input"
                    className="serivice-title-input"
                    placeholder="enter title"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 pl-0 col-12">
              <div className="select-topic-price">
                <div className="select-topic">
                  <label htmlFor="topic">Select topic</label>
                  <select
                    name="topic"
                    id="topic"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                  >
                    {/* <option defaultValue="pick the topic">
                      pick the topic
                    </option> */}
                    <option defaultValue="Programming">Programming</option>
                    <option value="Art">Art</option>
                    <option value="Music">Music</option>
                    <option value="Drawing">Drawing</option>
                    <option value="Quran">Quran</option>
                    <option value="Physics">Physics</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Philosophy">Philosophy</option>
                  </select>
                </div>
                <div className="price">
                  <div className="input-field">
                    <label htmlFor="price-input">price</label>
                    <br />
                    <input
                      type="text"
                      id="price-input"
                      name="price"
                      className="price-input"
                      placeholder=""
                      required
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    <span>EGP</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 pl-0 col-12">
              <div className="main-picture">
                <div className="title-main-picture">
                  <label
                    htmlFor="img"
                    className="btn"
                    style={{ color: "black" }}
                  >
                    Main picture
                  </label>
                </div>
                <div className="input-field">
                  {/*  */}
                  {/* <label
                    htmlFor="upload-img-input"
                    className="btn btn-purple-400"
                    >
                    upload
                    </label>
                    <input
                    type="file"
                    id="upload-img-input"
                    name="upload"
                    // onChange={uploadFileHandler}
                    // value={mainPicture}
                    className="upload-img-input"
                    placeholder=""
                    required
                    />
                    <input
                    type="text"
                    id="upload-img-title"
                    name="upload"
                    className="upload-img-title"
                    placeholder=""
                    required
                    value={picture}
                    onChange={(e) => setPicture(e.target.value)}
                  /> */}
                  {/*  */}
                  <input
                    id="img"
                    name="img"
                    type="file"
                    onChange={(e) => setPicture(e.target.files[0])}
                  />
                  <p>upload your picture</p>
                  {/*  */}
                </div>
              </div>
            </div>
            <div className="col-12 pl-0 pt-1">
              <div className="input-field">
                <label htmlFor="Description">Service Description</label>
                <br />
                <textarea
                  name=""
                  id="Description"
                  cols="30"
                  rows="7"
                  placeholder="Write service description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="col-lg-7 col-12 pl-0 pb-3">
              <div className="service-includes">
                <div className="input-field">
                  <label htmlFor="service-includes-input">
                    This service includes
                  </label>
                  <br />

                  <div className="service-remove">
                    {/* <input
                      type="text"
                      id="service-includes-input"
                      name="service-includes-input"
                      className="service-includes-input"
                      placeholder=""
                      required
                      value={topicsList}
                      onChange={(e) => setTopicsList(e.target.value)}
                    /> */}
                    <ReactTagInput
                      tags={topicsList}
                      placeholder="Type and press enter"
                      maxTags={12}
                      editable={true}
                      readOnly={false}
                      removeOnBackspace={true}
                      onChange={(newTags) => setTopicsList(newTags)}
                    />
                  </div>
                  {/* <button className="btn btn-remove">remove</button> */}
                  {/* <div className="service-remove">
                <input
                type="text"
                id="service-includes-input"
                name="service-includes-input"
                className="service-includes-input"
                placeholder=""
                required
                />
                <button className="btn btn-purple-400">remove</button>
              </div> */}
                  {/* <div className="service-remove">
                <input
                  type="text"
                  id="service-includes-input"
                  name="service-includes-input"
                  className="service-includes-input"
                  placeholder=""
                  required
                  />
                  <button className="btn btn-purple-400">remove</button>
                </div> */}
                  {/* <div className="service-add">
                <button className="btn btn-add">add</button>
              </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12 pl-0 pb-3">
              <div className="main-picture">
                <div className="title-other-media">
                  <label
                    htmlFor="mediaurls"
                    className="btn"
                    style={{ color: "black" }}
                  >
                    Other Media
                  </label>
                </div>
                <div className="input-field">
                  <input
                    id="mediaurls"
                    name="mediaurls"
                    type="file"
                    multiple
                    onChange={(e) => setMediaUrls(e.target.files)}
                  />
                  <p>upload your pictures</p>
                </div>
                {/* <label
                    htmlFor="upload-img-other-media"
                    className="btn btn-purple-400"
                  >
                  upload
                  </label>
                  <input
                    type="file"
                    id="upload-img-other-media"
                    name="upload"
                    className="upload-img-input"
                    placeholder=""
                    required
                    />
                    <input
                    type="text"
                    id="upload-title-other-media"
                    name="upload"
                    className="upload-img-title"
                    placeholder=""
                    required
                    value={mediaUrls}
                    onChange={(e) => setMediaUrls(e.target.value)}
                  /> */}
              </div>
            </div>
          </div>
          <div>
            {alert && !error ? (
              <SuccessMessage style={{ paddingBottom: "1rem" }}>
                course is added successfully.
              </SuccessMessage>
            ) : null}
          </div>
          <div className="save-edits">
            <button
              className="btn btn-purple-400"
              type="submit"
              style={{ marginTop: "1rem" }}
            >
              Create course
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default CreateCourseMentor;
