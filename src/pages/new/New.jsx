import "./new.scss";
import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DriveFolderUploadOutlined } from "@mui/icons-material";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image : <DriveFolderUploadOutlined className="icon" />{" "}
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => {
                return (
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                );
              })}
              {/* <div className="formInput">
                <label>Name and Surname</label>
                <input type="text" placeholder="Raafat Samy" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="text" placeholder="raafatsamy@gmail.com" />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="2+ 01112345678" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" placeholder="***********" />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder=" Nasr City St. 211 Cairo" />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="Egypt" />
              </div> */}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
