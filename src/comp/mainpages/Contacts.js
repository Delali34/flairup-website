import React, { useState } from "react";
import "./contact.css";
const Contacts = () => {
  return (
    <div className="container-contact">
      <div className="container-contact2">
        <div>
          <h1 className="contact-title">Hello, Just tell us what you want?</h1>
        </div>
        <form
          action="https://getform.io/f/9ea4b3c0-dd6a-43bf-9707-9f617e63464e"
          method="POST"
          encType="multipart/form-data"
        >
          <div>
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="email">
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="category2">
            {" "}
            <select
              className="category"
              name="title"
              id="title"
              placeholder="Select"
            >
              <option value="" disabled selected>
                Select Category
              </option>
              <option value="logo">logo</option>
              <option value="Branding">Branding</option>
              <option value="flyer">Flyer</option>
              <option value="Website">Website</option>
              <option value="Video">Video Editing</option>
              <option value="social">Social Management</option>
            </select>
          </div>

          <div className="textarea2">
            <textarea
              className="textarea"
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Tell us about your project"
            />
          </div>
          <div className="uploads">
            <div>
              {/* <label class="custom-file-upload">
                <input type="file" name="resume[]" />
                <i class="fa-solid fa-paperclip attach-icon"></i> Attach a file
                <span className="file-selected remove-select"></span>
              </label> */}
              <label for="file-upload" className="custom-file-upload">
                <i class="fa-solid fa-paperclip attach-icon"></i> Attach a file
              </label>
              <input type="file" id="file-upload" multiple required />

              <div id="file-upload-filename"></div>
            </div>
            <div className="send-btn">
              <input type="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
