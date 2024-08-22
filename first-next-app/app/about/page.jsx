"use client";
import React, { useState } from "react";

function About() {
  const [counter, setCounter] = useState(0);
  return <div>This is about page:{counter}</div>;
}

export default About;
