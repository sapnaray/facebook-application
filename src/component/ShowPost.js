import React, { useState } from 'react';
import user1 from "../images/userr.png";
import flower from "../videos/flower.mp4";
import sunset from "../videos/sunset.mp4";
import waterfall from "../videos/waterfall.mp4";
import river from "../videos/river.mp4";

const ShowPost = () => {
    const [state] = useState([
        { id: 1, userImg: user1, userName:"Rahul Kumar", time:"8h", text:"Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",postVideo:flower},
        { id: 2, userImg: user1, userName:"Ramesh Kumar",time:"12h",text:"Sunset is the disappearance of the Sun below the horizon due to Earth's rotation. As viewed from everywhere on Earth.",postVideo:sunset},
        { id: 3, userImg: user1, userNae:"Rohan Raina",  time:"16h",text:"A waterfall is any point in a river or stream where water flows over a vertical drop or a series of steep drops.",postVideo:waterfall},
        { id: 4, userImg: user1, userName:"Suresh Kumar",time:"9h", text:"A river is a natural flowing watercourse, usually a freshwater stream, flowing on the surface.", postVideo:river}
    ])
  return (
      <>
        <div className="show">
            {state.map((post) => (
          <>
         <div key={post.id} className="empty">
            <div className="show_header">
                <div className="show_header-img">
                    <img src={post.userImg} alt="userimg"/>
                </div> 
                <div className="show_header-name">
                    { post.userName}<div className="date">12h</div>
                </div>
            </div>
            <div className="show_body">
                <div className="show_body-text">
                   {post.text}
                </div>
                <div className="show_body-video">
                  <video width="100%" controls="controls loop playsInline muted autoPlay">
                      <source src={post.postVideo} type="video/mp4"/>
                  </video>
                </div>
            </div>
            <div className="show_reactions">
                <span className="reactions">
                   <i class="fa-solid fa-thumbs-up"></i> <span className="reactions-text">Likes</span>
                </span>
                <span className="reactions">
                  <i class="fa-regular fa-message"></i> <span className="reactions-text">Comments</span>
                </span>
                <span className="reactions">
                  <i class="fa-solid fa-share-nodes"></i> <span className="reactions-text">Shares</span>
                </span>
            </div>
          
          </div>             
              </>        
                ))}    
              
             
        </div>
      </>
  )
}

export default ShowPost