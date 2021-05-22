import React from "react";

const CreateCourseMentor = ({}) => {
  return (
    <form action="" className="service-info-details">
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
              />
            </div>
          </div>
        </div>
        <div className="col-lg-4 pl-0 col-12">
          <div className="select-topic-price">
            <div className="select-topic">
              <label htmlFor="topic">Select topic</label>
              <select name="topic" id="topic">
                <option selected disabled>
                  pick the topic
                </option>
                <option value="1">Programming</option>
                <option value="2">Programming</option>
                <option value="3">Programming</option>
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
                />
                <span>$</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 pl-0 col-12">
          <div className="main-picture">
            <div className="title-main-picture">
              <label htmlFor="upload-img-title">Main picture</label>
            </div>
            <div className="input-field">
              <label htmlFor="upload-img-input" className="btn btn-purple-400">
                upload
              </label>
              <input
                type="file"
                id="upload-img-input"
                name="upload"
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
              />
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
                <input
                  type="text"
                  id="service-includes-input"
                  name="service-includes-input"
                  className="service-includes-input"
                  placeholder=""
                  required
                />
                <button className="btn btn-remove">remove</button>
              </div>
              <div className="service-remove">
                <input
                  type="text"
                  id="service-includes-input"
                  name="service-includes-input"
                  className="service-includes-input"
                  placeholder=""
                  required
                />
                <button className="btn btn-purple-400">remove</button>
              </div>
              <div className="service-remove">
                <input
                  type="text"
                  id="service-includes-input"
                  name="service-includes-input"
                  className="service-includes-input"
                  placeholder=""
                  required
                />
                <button className="btn btn-purple-400">remove</button>
              </div>
              <div className="service-add">
                <button className="btn btn-add">add</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-12 pl-0 pb-3">
          <div className="main-picture">
            <div className="title-other-media">
              <label htmlFor="upload-title-other-media">Other Media</label>
            </div>
            <div className="input-field">
              <label
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
              />
            </div>
          </div>
        </div>
      </div>
      <div className="save-edits">
        <button className="btn btn-purple-400">Save edits</button>
      </div>
    </form>
  );
};

export default CreateCourseMentor;
