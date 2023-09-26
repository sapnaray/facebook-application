import React from 'react';
import facebook from '../images/facebook.png';
import user1 from "../images/userr.png";

const Navbar = () => {
  return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                  <a className="navbar-brand" href="Home.js"><img src={facebook} alt="logo" style={{ width: "40px" }} /></a>
                  <button style={{border:"none",padding:" 10px 13px",borderRadius:"35px",background:"white",letterSpacing:"1px"}}><i className="fa-solid fa-magnifying-glass"></i>&nbsp;&nbsp;facebook search &nbsp;&nbsp;&nbsp;&nbsp;</button>
                  
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="Home.js"><i className="fa-solid fa-house-chimney"></i></a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="Home.js"><i className="fa-solid fa-flag"></i></a>
                              <span className="navbar_notify">3</span>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="Home.js"><i className="fa-solid fa-video"></i></a>
                              <span className="navbar_notify">10</span>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="Home.js"><i className="fa-solid fa-users"></i></a>
                              <span className="navbar_notify">22</span>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="Home.js"><i className="fa-solid fa-gamepad"></i></a>
                                <span className="navbar_notify">9</span>
                            </li>
                        </ul>
                          <ul className="navbar-nav d-flex" style={{listStyle: "none"}}>
                            <li className="nav-item">
                                <a className="nav-link" href="Home.js"><i className="fa-solid fa-circle-plus" style={{background:"lightblue",borderRadius:"50%",height:"26px",width:"26px",padding:"5px"}}></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="Home.js"><i className="fa-brands fa-facebook-messenger" style={{background:"lightblue",borderRadius:"50%",height:"26px",width:"26px",padding:"5px"}}></i></a>
                            </li>
                            
                            <li className="nav-item dropdown" style={{position:"fixed"}}>
                                <a className="nav-link dropdown-toggle mt-2" href="home.js" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{background:"lightblue",borderRadius:"50%",height:"26px",width:"26px",padding:"5px" ,textAlign:'center',fontSize:"medium"}}>
                                </a>
                                <ul className="dropdown-menu" style={{border:"1px solid black",width:"250px",alignContent:"center"}}>
                                  <li>
                                   <div className="d-flex dropdown-item" style={{borderBottom:"1px solid black"}}>
                                      <div>
                                        <img src={user1} alt="img1" width="40px" height="40px" style={{ borderRadius: "50%", background: "lightblue" }} />&nbsp;&nbsp;&nbsp;&nbsp;
                                      </div>
                                      <div style={{fontSize:"12px",fontFamily:"sans-serif"}}>
                                        <span>Sapna Ray</span>
                                        <p>See Your Profile</p>
                                      </div>
                                    </div>
                                  </li>
                                  <li>
                                      <div className="dispaly dropdown-item" style={{ display: "flex", borderBottom: "1px solid black" }}>
                                        <div>
                                          <i class="fa-solid fa-message"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                        </div>
                                        <div style={{fontSize:"12px",fontFamily:"sans-serif"}}>
                                          <span>Give Feedback</span><br/>
                                          <span>Help us improve the new Facebook</span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="dispaly dropdown-item" style={{ display: "flex"}}>
                                        <div>
                                         <span><i class="fa-solid fa-gear"></i></span>&nbsp;&nbsp;
                                         <span style={{fontSize:"12px",fontFamily:"sans-serif"}}>Setting & Privacy</span>
                                        </div>
                                        <div >
                                          <span style={{paddingLeft:"10px"}}><i class="fa-solid fa-angle-right"></i></span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="dispaly dropdown-item" style={{ display: "flex"}}>
                                        <div>
                                          <span><i class="fa-solid fa-circle-question"></i></span>&nbsp;&nbsp;
                                          <span style={{fontSize:"12px",fontFamily:"sans-serif"}}>Help & Support</span>
                                        </div>
                                        <div style={{fontSize:"15px"}}>
                                           <span style={{paddingLeft:"10px"}}><i class="fa-solid fa-angle-right"></i></span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="dispaly dropdown-item" style={{ display: "flex"}}>
                                        <div>
                                         <span><i class="fa-solid fa-moon"></i></span>&nbsp;&nbsp;
                                         <span style={{fontSize:"12px",fontFamily:"sans-serif"}}>Dark Mode</span>
                                        </div>
                                        <div style={{fontSize:"20px"}}>
                                          <span><i class="fa-solid fa-toggle-on"></i></span>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="d-flex dropdown-item">
                                        <div>
                                          <i class="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;
                                        </div>
                                        <div style={{fontSize:"12px",fontFamily:"sans-serif"}}>
                                          <h6>Switch to Classic Facebook</h6>
                                          <span>The classic Facebook will no longer <br/>be available starting in september</span>
                                       </div>
                                     </div>
                                   </li>
                                    <li>
                                      <div className="d-flex dropdown-item">
                                        <div>
                                        <i class="fa-solid fa-arrow-right-from-bracket"></i>&nbsp;&nbsp;
                                        </div>
                                        <div style={{fontSize:"15px",fontFamily:"sans-serif"}}>
                                          <h6>LogOut</h6>
                                       </div>
                                     </div>
                                    </li>
                                    <li>
                                      <ul className="privacy dropdown-item" style={{display:"flex",listStyleType:"none",fontFamily:"sans-serif"}}>
                                        <li>Privacy</li>
                                        <li>Term</li>
                                        <li>Advatising</li>
                                        <li>Advatising</li>
                                      </ul>
                                      <p className="text" style={{fontSize:"12px",textAlign:"center"}}>Facebook <i class="fa-regular fa-copyright"></i> 2020</p>
                                    </li>
                                </ul>
                            </li>
                               
                          </ul>
                       
                   </div>
               </div>
            </nav>
        </>
  )
}

export default Navbar