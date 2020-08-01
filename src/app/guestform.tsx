import React, { useState } from "react";
import { useFormState } from "./hooks";

interface IProps {
  addGuest: (pic: File, guest: string) => void;
}

export const GuestForm: React.FC<IProps> = ({ addGuest }) => {
  const [err, setErr] = useState("");
  const [data, setData] = useFormState({
    pic: undefined,
    guest: "",
  });
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (data.pic == undefined) {
            setErr("Invalid file");
            return;
          }
          if (data.guest.length == 0) {
            setErr("Invalid guest");
            return;
          }
          addGuest(data.pic, data.guest);
        }}
      >
        <input type="file" name="pic" onChange={setData} />
        <input
          className="add-guest-text"
          type="text"
          name="guest"
          onChange={setData}
        />
        <input className="add-guest-button" type="submit" value="Add" />
      </form>
      {err.length > 0 ? <div>{err}</div> : undefined}
    </div>
  );
};
