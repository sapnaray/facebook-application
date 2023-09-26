import React ,{useState} from 'react';
import Navbar from './component/Navbar';
//import Home from './component/Home';
import Sidebar from "./component/Sidebar";
import Post from "./component/Post";
import ChatBar from "./component/ChatBar";
import ChatBox from "./component/ChatBox";

const App = () => {
  const [state, setState] = useState(false);
  const [current, setCurrent] = useState({});
  const openChat = (chatStatus) => {
    setState(true);
    setCurrent(chatStatus);
  };
  const closeChat = () => {
    setState(false);
  }
  return (
          <>
           <div className="app">
             <Navbar/>
             <div className="facebook">
               <Sidebar/>
               <Post/>
               <ChatBar openChat={openChat } />
               <ChatBox state={state} current={current} closeChat={closeChat} />
             </div>
            </div>
             
           </>
          )
}
export default App