import React, { useContext } from "react";

// Create the context
export const usercontext = React.createContext();

function Username() {
  const user = useContext(usercontext);
  return <p>Login as {user.name}</p>;
}

export function Page1() {
  return (
    <>
      <h1>Page 1</h1>
      <Username />
    </>
  );
}

export function Page3() {
  return (
    <>
      <h1>Page 3</h1>
      <Username />
    </>
  );
}

export function Page2() {
  return (
    <>
      <h1>Page 2</h1>
      <Username />
    </>
  );
}

// Export the context
export default usercontext;
