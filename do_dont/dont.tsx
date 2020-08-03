import React, { useState } from "react";

// Don'ts

// Now for the don'ts.

// Not top level
const HelloDont: React.FC = () => {
  const c1 = () => {
    const [hello1, setHello1] = useState("hi");
  };

  if (true) {
    const [hello2, setHello2] = useState("hi");
  }
  return <div></div>;
};

// We'll start with a functional component where useState is not called at the top level.
// We see two examples of this.
// The first one is when useState is called in a nested function.
// And the second is when it's called in an if statement.
// Both leads to linting errors, seen with the red underline.

// Not functional component or custom hook
const c1 = () => {
  const [hello, setHello] = useState("hi");
};

function c2() {
  const [hello, setHello] = useState("hi");
}

// Finally, we see useState called inside a function that is neither a functional component or a custom hook.
// In this case the linter gives an error because c1 and c2 doesn't begin with the lowercase use word
// or a capital.

// Ok, now that we know how to use useState properly, let's get to the coding example.