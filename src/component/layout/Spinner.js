import React from "react";
import spinner from "./spinner.gif";

export default function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading. Please wait."
        style={{ display: "block", margin: "auto" }}
      />
    </div>
  );
}
