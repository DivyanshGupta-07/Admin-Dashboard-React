import React, { useState } from "react";
import "./new.scss";
import { RiFolderUploadLine } from "react-icons/ri";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const New = ({ inputs, title }) => {
  const [image, setImage] = useState("");
  // image ? console.log(image);
  // console.log(image);
  // const url = image ? URL.createObjectURL(image) : "faltu";
  //console.log(url);
  return (
    <div className="new">
      <Sidebar />
      <div className="newcontainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                image
                  ? URL.createObjectURL(image)
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt="imgt"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image : <RiFolderUploadLine className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
