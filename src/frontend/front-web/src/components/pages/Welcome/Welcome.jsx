import React from "react";
import { useParams } from "react-router-dom";

const Welcome = () => {
  const { username } = useParams();
  console.log("username", username);
  if (typeof username !== "string") {
    return <div>Error: Invalid username</div>;
  }

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>Thank you for signing up.</p>
    </div>
  );
};

export default Welcome;
