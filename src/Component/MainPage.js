import React from "react";
import "./MainPage.css";

import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchEmails } from "../store/emailSlice";

const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inboxHandler = () => {
    navigate("/EmailList");
  };

  const logOutHandler = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
  };
  const sentHanlder= () =>{
    navigate("/SentMail");
    dispatch(fetchEmails());
  }

  return (
    <div className="mainPage">
      <div className="navbar">
        <div className="mailbox-content">
          <span>Welcome to your mailbox</span>
        </div>

        <Button className="inbox-btn" onClick={logOutHandler}>
          LogOut
        </Button>
        <Button className="inbox-btn" onClick={inboxHandler}>
          Inbox
        </Button>
        <Button className="inbox-btn" onClick={sentHanlder}>
          Sent
        </Button>
        
      </div>
      
    </div>
  );
};

export default MainPage;
