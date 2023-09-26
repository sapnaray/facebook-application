import React from "react";
import user from "../images/userr.png";

const Create = () => {
  return (
    <div className="create">
      <div className="create_first">
        <div className="create_first-img">
          <span><img src={user} alt="post" /></span>
        </div>
        <div className="create_first-input">
          <input type="text" placeholder="What's on your mind Shakil..." className="create_first-inputs" />
        </div>
      </div>
      <div className="create_second">
        <span className="create_second_icons">
          <i className="fa-solid fa-video redColor"></i><span className="text">Live Video</span>
        </span>
        <span className="create_second_icons">
          <i className="fa-solid fa-photo-film greenColor"></i><span className="text">Photo/Video</span>
        </span>
        <span className="create_second_icons">
            <span className="orangeColor">&#128515;</span><span className="text">Feeling/Activity</span>
        </span>
      </div>
    </div>
  );
};

export default Create;
