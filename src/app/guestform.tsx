import React, { useState } from "react";
import { useFormState } from "./hooks";
import "./guestform.css";

interface IProps {
  addGuest: (pic: string, guest: string) => void;
}

export const GuestForm: React.FC<IProps> = ({ addGuest }) => {
  const [err, setErr] = useState("");
  const [data, setData] = useFormState({
    pic: undefined,
    guest: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr("");
    if (data.pic === undefined) {
      setErr("Invalid file");
      return;
    }
    if (data.guest.length === 0) {
      setErr("Invalid guest");
      return;
    }
    addGuest(URL.createObjectURL(data.pic), data.guest.toUpperCase());
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="file" name="pic" onChange={setData} />
        <input
          className="add-guest-text"
          type="text"
          name="guest"
          onChange={setData}
        />
        <button className="add-guest-button" type="submit">
          Add
        </button>
      </form>
      {err.length > 0 ? <div>{err}</div> : undefined}
    </div>
  );
};
