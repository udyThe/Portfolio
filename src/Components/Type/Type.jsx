import React from "react";

import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Devops enthusiast",
          "Cloud Engineer",
          "Full Stack Developer",
          "Badminton Enthusiast",
          "Creative Thinking",
          "Exploring New Places",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
};
