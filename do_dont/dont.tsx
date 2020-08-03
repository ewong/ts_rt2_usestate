import React, { useState } from "react";

// Don't

// Not top level
const HelloDo: React.FC = () => {
  const c1 = () => {
    const [hello1, setHello1] = useState("hi");
  };

  if (true) {
    const [hello2, setHello2] = useState("hi");
  }
  return <div></div>;
};

// Not functional component or custom hook
const c1 = () => {
  const [hello, setHello] = useState("hi");
};

function c2() {
  const [hello, setHello] = useState("hi");
}
