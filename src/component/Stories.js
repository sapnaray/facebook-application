import React, { useState } from 'react';
import user from "../images/userr.png";
import imgback from "../images/background.jpg";

const Stories = () => {
    const [state] = useState([
        { id: 1, imageback: imgback, image: user, name: "Flutter Development." },
        { id: 2, imageback: imgback, image: user, name: "PHP Development" },
        { id: 3, imageback: imgback, image: user, name: "ReactNative Development" },
        { id: 4, imageback: imgback, image: user, name: "NodeJS Development" },
    ])
  return (
        <div className="stories">
           {state.map((story) => (
                <div className="stories_col" key={story.id}>
                    <div className="stories_body">
                     <img src={story.imageback} alt="stories"/>
                       <div className="stories_body-overlay">
                           <div className="stories_body-overlay-img">
                             <img  className="userstories" src={story.image} alt="postimg"/>
                            </div>
                            <div className="stories_body-name">
                              {story.name}
                            </div>
                        </div> 
                    </div>
                </div>))
            }
        </div>
      
  )
}

export default Stories