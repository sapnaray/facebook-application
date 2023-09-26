import React, { useState } from 'react';
import user from "../images/userr.png";
//import covid from "../images/covid.png";
//import flag from "../images/flag.png";
//import friend from "../images/fckuser.jpg";
//import messenger from "../images/messenger.png";

const Sidebar = () => {
  const[state] = useState([
            { id: 1, image: user, name: "Flutter Development" },
            { id: 2, image: user, name: "PHP Development" },
            { id: 3, image: user, name: "React Native Development" },
            { id: 4, image: user, name: "NodeJS Development" },
            { id: 5, image: user, name: "VueJS Development" },
            { id: 6, image: user, name:"ReactJS Development"},
            
           ])
  return (
    <>
      <div className="sidebar">
        {state.map((info) => (
          <div className="sidebar_list" key={info.id}>
            <div className="sidebar_list-img">
              <img src={info.image} alt="groupimg"/>
            </div>
            <div className="sidebar_list-name">
              {info.name}
            </div>
          </div>))
        }
        
      </div>
    </>
  )
}

export default Sidebar

/*<div className="side-nav">
            <a className="sidelink" href="home.js"><img src={user} alt="img" height="25px" width="25px" style={{borderRadius:"50%"} } />Shakil Khan</a>
          </div>
          <div className="side-nav">
            <a className="sidelink" href="home.js"><img src={covid} alt="img" height="25px" width="25px" />COVID-19 Information Center</a>
          </div>
          <div className="side-nav">
            <a className="sidelink" href="home.js"><img src={flag} alt="img" height="25px" width="25px"/>Pages</a>
            <li className="">9+ new</li>
          </div>
          <div className="side-nav">
            <a className="sidelink" href="home.js"><img src={ friend} alt="img" height="25px" width="25px"/>Friends</a>
          </div>
          <div className="side-nav">
            <a className="sidelink" href="home.js"><img src={ messenger} alt="img" height="25px" width="25px"/>Messenger</a>
          </div>*/