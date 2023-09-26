import React,{useState} from 'react';
import userImg from "../images/userr.png";
const ChatBar = (props) => {
  const [state] = useState([
    { id: 1, userImg: userImg, activeUser: "Aman shekhawat" },
    { id: 2, userImg: userImg, activeUser: "Sunil Shekhawat" },
    { id: 3, userImg: userImg, activeUser: "Ramesh Aggrawal" },
    { id: 4, userImg: userImg, activeUser: "Rahul Sharma " },
    { id: 5, userImg: userImg, activeUser: "Ramesh Singh " },
    { id: 6, userImg: userImg, activeUser: "Rohit Singhaniya" },
    { id: 7, userImg: userImg, activeUser: "Mayank Sharma" },
    { id: 8, userImg: userImg, activeUser: "Rajesh Khan" },
    { id: 9, userImg: userImg, activeUser: "Ramparesh Shekhawat" },
    { id: 10, userImg: userImg, activeUser: "Sahil Khan" },
  
  ]);
  const openChat = (chatStatus) => {
    props.openChat(chatStatus);
  };
  return (
    <div className="chatBar">
      {state.map((chatStatus) => (
        <>
        <div className="chatBar_list" key={chatStatus.id} onClick={()=> openChat(chatStatus)}>
          <div className="chatBar_list-img">
            <img src={chatStatus.userImg} alt="userimg" />
            <span className="status"></span>
          </div>
            <div className="chatBar_list-name">{ chatStatus.activeUser}</div>
          </div>
        </>))
      }
      
    </div>
  )
}

export default ChatBar