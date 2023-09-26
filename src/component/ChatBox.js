import React from "react";

const ChatBox = (props) => {
  const closeChat = () => {
    props.closeChat();
  };

  return (
    <>
      {props.state ? (
        <div className="chat">
          <div className="chat_header">
            <div className="chat_first">
              <div className="chat_header-img">
                <img
                  src={props.current.userImg ? props.current.userImg : ""}
                  alt="img"
                />
              </div>
              <div className="chat_header-name">
                {props.current.activeUser ? props.current.activeUser : ""}
              </div>
            </div>
            <div className="chat_second">
              <i class="fa-solid fa-video"></i>
              <i class="fa-solid fa-phone"></i>
              <i class="fa-solid fa-xmark" onClick={closeChat}></i>
            </div>
          </div>
          <div className="chat_body">
            <div className="chat_left">
              <p className="msg">Hlo how are you</p>
            </div>
            <div className="chat_right">
              <p className="msg">Yes I am fine</p>
            </div>
            <div className="chat_left">
              <p className="msg">Lorem ipsum dolor sit amet</p>
            </div>
            <div className="chat_right">
              <p className="msg">ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="chat_footer">
            <input type="text" className="chat_input" placeholder="Typing..." />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ChatBox;
