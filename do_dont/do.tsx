import React, { useState } from "react";

// Do's
// Let's first go over the do's for useState.
// Note that this also applies to all react hooks.
// 1. Only call useState at the top level.
// 2. Call useState from React functional components.
// 3. Call useState from custom Hooks.

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

// So for functional components, you can declare them as shown with HelloDo1 and HelloDo2.
// Both are equivalent ways of creating a functional component.
// The name of the component needs to start with a capital letter.
// When you call useState, it returns a state value as well as its value setter.
// Note, that you need to feed in an starting value to useState.

interface IState {
  hello: string;
}

// Custom Hook
const useHelloHook = (init: IState) => {
  const [hello, setHello] = useState(init);
  return [hello, setHello];
};

// Finally, here is an example of how to create a custom hook.
// The name of the hook needs to start with lower cased use.
// You have to take in an initial state, where you define the interface.
// In this case, our IState interface only has the hello string property.
// It then returns, the state value as well as the setter.
// Later in the video we'll create a form hook that will greatly simplify form handling.