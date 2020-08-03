import React, { useState } from "react";
import "./guestlist.css";
import { Guest } from "./guest";
import { GuestForm } from "./guestform";

interface GuestInfo {
  pic: string;
  guestName: string;
}

export const GuestList: React.FC = () => {
  const [guests, setGuests] = useState(new Array<GuestInfo>());

  const addGuest = (pic: string, guestName: string) => {
    const g = guests.slice();
    g.push({ pic, guestName });
    setGuests(g);
  };

  const removeGuest = (i: number) => {
    const g = guests.slice();
    g.splice(i, 1);
    setGuests(g);
  };

  return (
    <div>
      <h1>Guest List</h1>
      <GuestForm addGuest={addGuest}></GuestForm>
      {guests.map((curGuest, index) => {
        return (
          <Guest
            key={`guest-${index}`}
            pic={curGuest.pic}
            guestName={curGuest.guestName}
            removeGuest={() => {
              removeGuest(index);
            }}
          ></Guest>
        );
      })}
    </div>
  );
};

export default GuestList;