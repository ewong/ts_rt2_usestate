import React from "react";
import "./guest.css";

interface IProps {
  pic: string;
  guestName: String;
  removeGuest: () => void;
}

export const Guest: React.FC<IProps> = ({ pic, guestName, removeGuest }) => {
  return (
    <div className="guest-div">
      <img className="guest-pic" src={pic} alt=""/>
      <div className="guest-name">{guestName}</div>
      <button className="guest-remove" onClick={removeGuest}>X</button>
    </div>
  );
};
