import React from "react";
import "./guest.css";

interface IProps {
  pic: String;
  guestName: String;
}

export const Guest: React.FC<IProps> = ({ pic, guestName }) => {
  return (
    <div className="guest-div">
      <div className="guest-pic">{pic}</div>
      <div className="guest-name">{guestName}</div>
    </div>
  );
};
