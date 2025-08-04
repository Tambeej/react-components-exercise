import Spam from "./Spam";
import React, { Component } from "react";

const Spamalot = () => {
  const spamArray = Array.from({ length: 500 }, (_, i) => <Spam key={i} />);
  return <div>{spamArray}</div>;
};

export default Spamalot;
