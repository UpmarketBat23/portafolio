import React from "react";
import Typewriter from "typewriter-effect";

function TypewriterBanner() {
  return (
    <div style={{ color: "#186e88", fontWeight: "lighter", fontSize: "2rem" }}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString("Hi! I'm Juan here is my resume").start();
        }}
      />
    </div>
  );
}

export default TypewriterBanner;
