import React, { useState } from "react";

// Do
// 1. Only call useSate (and any Hook, in general) at the top level
// 2. Call useState (and any Hook, in general) from React function components.
// 3. Call useState (and any Hook, in general) from custom Hooks.

// React function component A
const HelloDo1: React.FC = () => {
  const [hello, setHello] = useState("world");
  return <div>{hello}</div>;
};

// React function component B
function HelloDo2() {
  const [hello, setHello] = useState("world");
  return <div>{hello}</div>;
};

interface IState {
  hello: string;
}

// Custom Hook
const useHelloHook = (init: IState) => {
  const [hello, setHello] = useState(init);
  return [hello, setHello];
};
