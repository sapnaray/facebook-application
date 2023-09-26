import React from 'react';
import Stories from "../component/Stories";
import Create from "../component/Create";
import ShowPost from "../component/ShowPost";

const Post = () => {
  return (
      <>
        <div className="posts">
          <Stories/>
          <Create />
          <ShowPost/>
        </div>
      </>
  )
}

export default Post