import React from "react";

const Hero = () => {
  return (
    <section
      className="container bg-black text-white mb-5"
      id="about"
      style={{
        // height: "70vh",
        border: "1px solid black",
        position: "relative",
        // top: "100px",
        paddingTop: "100px"
      }}
    >
      <h1 className="mt-5 pt-5 display-1 fw-semibold">Arnav Saha</h1>
      <p className="text-white-50 fs-2 mb-0">Full Stack Developer</p>
      <span className="border-bottom px-5 border-success border-4"></span>
      <p
        className="mt-4"
        style={{
          width: "64%",
          fontSize: "1.3rem",
          fontWeight: "300",
          color: "#dbdfe3",
        }}
      >
        Passionate full-stack developer crafting intuitive digital experiences
        with modern technologies.
      </p>
      <p
        className=""
        style={{
          width: "64%",
          fontSize: "1.3rem",
          fontWeight: "300",
          color: "#dbdfe3",
        }}
      >
        Specializing in React, Node.js, and MongoDB to build scalable and user-centered applications.
      </p>
      <div className="mt-4">
        <a href="#contact" className="btn btn-success px-4 me-3" >Contact Me</a>
        <a className="btn btn-outline-secondary px-4" href="https://drive.google.com/file/d/1iVg9ecc5wVs4Tl6ZZbJLVT6gangsWcUV/view?usp=sharing" target="_blank">Resume</a>
      </div>
    </section>
  );
};

export default Hero;
