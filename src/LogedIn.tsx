import { useState } from "react";

export const Logedin = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);

  let content;
  if (isLogedIn) {
    content = <h2>Welcome BacK!</h2>;
  } else {
    content = <h2>Please login.</h2>;
  }

  return (
    <div>
      {content}
      <button onClick={() => setIsLogedIn(!isLogedIn)}>
        {" "}
        {isLogedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};
